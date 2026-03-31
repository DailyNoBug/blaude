#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  _enum,
  _null,
  array,
  boolean,
  custom,
  discriminatedUnion,
  init_core,
  init_json_schema_processors,
  init_locales,
  init_util,
  intersection,
  iso_exports,
  literal,
  looseObject,
  number,
  object,
  optional,
  preprocess,
  record,
  safeParse,
  string,
  union,
  unknown
} from "./chunk-BKRSSLV2.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
var LATEST_PROTOCOL_VERSION, SUPPORTED_PROTOCOL_VERSIONS, RELATED_TASK_META_KEY, JSONRPC_VERSION, AssertObjectSchema, ProgressTokenSchema, CursorSchema, TaskCreationParamsSchema, TaskMetadataSchema, RelatedTaskMetadataSchema, RequestMetaSchema, BaseRequestParamsSchema, TaskAugmentedRequestParamsSchema, isTaskAugmentedRequestParams, RequestSchema, NotificationsParamsSchema, NotificationSchema, ResultSchema, RequestIdSchema, JSONRPCRequestSchema, isJSONRPCRequest, JSONRPCNotificationSchema, isJSONRPCNotification, JSONRPCResultResponseSchema, isJSONRPCResultResponse, ErrorCode, JSONRPCErrorResponseSchema, isJSONRPCErrorResponse, JSONRPCMessageSchema, JSONRPCResponseSchema, EmptyResultSchema, CancelledNotificationParamsSchema, CancelledNotificationSchema, IconSchema, IconsSchema, BaseMetadataSchema, ImplementationSchema, FormElicitationCapabilitySchema, ElicitationCapabilitySchema, ClientTasksCapabilitySchema, ServerTasksCapabilitySchema, ClientCapabilitiesSchema, InitializeRequestParamsSchema, InitializeRequestSchema, ServerCapabilitiesSchema, InitializeResultSchema, InitializedNotificationSchema, isInitializedNotification, PingRequestSchema, ProgressSchema, ProgressNotificationParamsSchema, ProgressNotificationSchema, PaginatedRequestParamsSchema, PaginatedRequestSchema, PaginatedResultSchema, TaskStatusSchema, TaskSchema, CreateTaskResultSchema, TaskStatusNotificationParamsSchema, TaskStatusNotificationSchema, GetTaskRequestSchema, GetTaskResultSchema, GetTaskPayloadRequestSchema, GetTaskPayloadResultSchema, ListTasksRequestSchema, ListTasksResultSchema, CancelTaskRequestSchema, CancelTaskResultSchema, ResourceContentsSchema, TextResourceContentsSchema, Base64Schema, BlobResourceContentsSchema, RoleSchema, AnnotationsSchema, ResourceSchema, ResourceTemplateSchema, ListResourcesRequestSchema, ListResourcesResultSchema, ListResourceTemplatesRequestSchema, ListResourceTemplatesResultSchema, ResourceRequestParamsSchema, ReadResourceRequestParamsSchema, ReadResourceRequestSchema, ReadResourceResultSchema, ResourceListChangedNotificationSchema, SubscribeRequestParamsSchema, SubscribeRequestSchema, UnsubscribeRequestParamsSchema, UnsubscribeRequestSchema, ResourceUpdatedNotificationParamsSchema, ResourceUpdatedNotificationSchema, PromptArgumentSchema, PromptSchema, ListPromptsRequestSchema, ListPromptsResultSchema, GetPromptRequestParamsSchema, GetPromptRequestSchema, TextContentSchema, ImageContentSchema, AudioContentSchema, ToolUseContentSchema, EmbeddedResourceSchema, ResourceLinkSchema, ContentBlockSchema, PromptMessageSchema, GetPromptResultSchema, PromptListChangedNotificationSchema, ToolAnnotationsSchema, ToolExecutionSchema, ToolSchema, ListToolsRequestSchema, ListToolsResultSchema, CallToolResultSchema, CompatibilityCallToolResultSchema, CallToolRequestParamsSchema, CallToolRequestSchema, ToolListChangedNotificationSchema, ListChangedOptionsBaseSchema, LoggingLevelSchema, SetLevelRequestParamsSchema, SetLevelRequestSchema, LoggingMessageNotificationParamsSchema, LoggingMessageNotificationSchema, ModelHintSchema, ModelPreferencesSchema, ToolChoiceSchema, ToolResultContentSchema, SamplingContentSchema, SamplingMessageContentBlockSchema, SamplingMessageSchema, CreateMessageRequestParamsSchema, CreateMessageRequestSchema, CreateMessageResultSchema, CreateMessageResultWithToolsSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema, UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema, LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema, EnumSchemaSchema, PrimitiveSchemaDefinitionSchema, ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema, ElicitRequestParamsSchema, ElicitRequestSchema, ElicitationCompleteNotificationParamsSchema, ElicitationCompleteNotificationSchema, ElicitResultSchema, ResourceTemplateReferenceSchema, PromptReferenceSchema, CompleteRequestParamsSchema, CompleteRequestSchema, CompleteResultSchema, RootSchema, ListRootsRequestSchema, ListRootsResultSchema, RootsListChangedNotificationSchema, ClientRequestSchema, ClientNotificationSchema, ClientResultSchema, ServerRequestSchema, ServerNotificationSchema, ServerResultSchema, McpError, UrlElicitationRequiredError;
var init_types = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/types.js"() {
    init_v4();
    LATEST_PROTOCOL_VERSION = "2025-11-25";
    SUPPORTED_PROTOCOL_VERSIONS = [LATEST_PROTOCOL_VERSION, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"];
    RELATED_TASK_META_KEY = "io.modelcontextprotocol/related-task";
    JSONRPC_VERSION = "2.0";
    AssertObjectSchema = custom((v) => v !== null && (typeof v === "object" || typeof v === "function"));
    ProgressTokenSchema = union([string(), number().int()]);
    CursorSchema = string();
    TaskCreationParamsSchema = looseObject({
      /**
       * Requested duration in milliseconds to retain task from creation.
       */
      ttl: number().optional(),
      /**
       * Time in milliseconds to wait between task status requests.
       */
      pollInterval: number().optional()
    });
    TaskMetadataSchema = object({
      ttl: number().optional()
    });
    RelatedTaskMetadataSchema = object({
      taskId: string()
    });
    RequestMetaSchema = looseObject({
      /**
       * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
       */
      progressToken: ProgressTokenSchema.optional(),
      /**
       * If specified, this request is related to the provided task.
       */
      [RELATED_TASK_META_KEY]: RelatedTaskMetadataSchema.optional()
    });
    BaseRequestParamsSchema = object({
      /**
       * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
       */
      _meta: RequestMetaSchema.optional()
    });
    TaskAugmentedRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * If specified, the caller is requesting task-augmented execution for this request.
       * The request will return a CreateTaskResult immediately, and the actual result can be
       * retrieved later via tasks/result.
       *
       * Task augmentation is subject to capability negotiation - receivers MUST declare support
       * for task augmentation of specific request types in their capabilities.
       */
      task: TaskMetadataSchema.optional()
    });
    isTaskAugmentedRequestParams = (value) => TaskAugmentedRequestParamsSchema.safeParse(value).success;
    RequestSchema = object({
      method: string(),
      params: BaseRequestParamsSchema.loose().optional()
    });
    NotificationsParamsSchema = object({
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: RequestMetaSchema.optional()
    });
    NotificationSchema = object({
      method: string(),
      params: NotificationsParamsSchema.loose().optional()
    });
    ResultSchema = looseObject({
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: RequestMetaSchema.optional()
    });
    RequestIdSchema = union([string(), number().int()]);
    JSONRPCRequestSchema = object({
      jsonrpc: literal(JSONRPC_VERSION),
      id: RequestIdSchema,
      ...RequestSchema.shape
    }).strict();
    isJSONRPCRequest = (value) => JSONRPCRequestSchema.safeParse(value).success;
    JSONRPCNotificationSchema = object({
      jsonrpc: literal(JSONRPC_VERSION),
      ...NotificationSchema.shape
    }).strict();
    isJSONRPCNotification = (value) => JSONRPCNotificationSchema.safeParse(value).success;
    JSONRPCResultResponseSchema = object({
      jsonrpc: literal(JSONRPC_VERSION),
      id: RequestIdSchema,
      result: ResultSchema
    }).strict();
    isJSONRPCResultResponse = (value) => JSONRPCResultResponseSchema.safeParse(value).success;
    (function(ErrorCode2) {
      ErrorCode2[ErrorCode2["ConnectionClosed"] = -32e3] = "ConnectionClosed";
      ErrorCode2[ErrorCode2["RequestTimeout"] = -32001] = "RequestTimeout";
      ErrorCode2[ErrorCode2["ParseError"] = -32700] = "ParseError";
      ErrorCode2[ErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
      ErrorCode2[ErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
      ErrorCode2[ErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
      ErrorCode2[ErrorCode2["InternalError"] = -32603] = "InternalError";
      ErrorCode2[ErrorCode2["UrlElicitationRequired"] = -32042] = "UrlElicitationRequired";
    })(ErrorCode || (ErrorCode = {}));
    JSONRPCErrorResponseSchema = object({
      jsonrpc: literal(JSONRPC_VERSION),
      id: RequestIdSchema.optional(),
      error: object({
        /**
         * The error type that occurred.
         */
        code: number().int(),
        /**
         * A short description of the error. The message SHOULD be limited to a concise single sentence.
         */
        message: string(),
        /**
         * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
         */
        data: unknown().optional()
      })
    }).strict();
    isJSONRPCErrorResponse = (value) => JSONRPCErrorResponseSchema.safeParse(value).success;
    JSONRPCMessageSchema = union([
      JSONRPCRequestSchema,
      JSONRPCNotificationSchema,
      JSONRPCResultResponseSchema,
      JSONRPCErrorResponseSchema
    ]);
    JSONRPCResponseSchema = union([JSONRPCResultResponseSchema, JSONRPCErrorResponseSchema]);
    EmptyResultSchema = ResultSchema.strict();
    CancelledNotificationParamsSchema = NotificationsParamsSchema.extend({
      /**
       * The ID of the request to cancel.
       *
       * This MUST correspond to the ID of a request previously issued in the same direction.
       */
      requestId: RequestIdSchema.optional(),
      /**
       * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
       */
      reason: string().optional()
    });
    CancelledNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/cancelled"),
      params: CancelledNotificationParamsSchema
    });
    IconSchema = object({
      /**
       * URL or data URI for the icon.
       */
      src: string(),
      /**
       * Optional MIME type for the icon.
       */
      mimeType: string().optional(),
      /**
       * Optional array of strings that specify sizes at which the icon can be used.
       * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
       *
       * If not provided, the client should assume that the icon can be used at any size.
       */
      sizes: array(string()).optional(),
      /**
       * Optional specifier for the theme this icon is designed for. `light` indicates
       * the icon is designed to be used with a light background, and `dark` indicates
       * the icon is designed to be used with a dark background.
       *
       * If not provided, the client should assume the icon can be used with any theme.
       */
      theme: _enum(["light", "dark"]).optional()
    });
    IconsSchema = object({
      /**
       * Optional set of sized icons that the client can display in a user interface.
       *
       * Clients that support rendering icons MUST support at least the following MIME types:
       * - `image/png` - PNG images (safe, universal compatibility)
       * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
       *
       * Clients that support rendering icons SHOULD also support:
       * - `image/svg+xml` - SVG images (scalable but requires security precautions)
       * - `image/webp` - WebP images (modern, efficient format)
       */
      icons: array(IconSchema).optional()
    });
    BaseMetadataSchema = object({
      /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
      name: string(),
      /**
       * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
       * even by those unfamiliar with domain-specific terminology.
       *
       * If not provided, the name should be used for display (except for Tool,
       * where `annotations.title` should be given precedence over using `name`,
       * if present).
       */
      title: string().optional()
    });
    ImplementationSchema = BaseMetadataSchema.extend({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      version: string(),
      /**
       * An optional URL of the website for this implementation.
       */
      websiteUrl: string().optional(),
      /**
       * An optional human-readable description of what this implementation does.
       *
       * This can be used by clients or servers to provide context about their purpose
       * and capabilities. For example, a server might describe the types of resources
       * or tools it provides, while a client might describe its intended use case.
       */
      description: string().optional()
    });
    FormElicitationCapabilitySchema = intersection(object({
      applyDefaults: boolean().optional()
    }), record(string(), unknown()));
    ElicitationCapabilitySchema = preprocess((value) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        if (Object.keys(value).length === 0) {
          return { form: {} };
        }
      }
      return value;
    }, intersection(object({
      form: FormElicitationCapabilitySchema.optional(),
      url: AssertObjectSchema.optional()
    }), record(string(), unknown()).optional()));
    ClientTasksCapabilitySchema = looseObject({
      /**
       * Present if the client supports listing tasks.
       */
      list: AssertObjectSchema.optional(),
      /**
       * Present if the client supports cancelling tasks.
       */
      cancel: AssertObjectSchema.optional(),
      /**
       * Capabilities for task creation on specific request types.
       */
      requests: looseObject({
        /**
         * Task support for sampling requests.
         */
        sampling: looseObject({
          createMessage: AssertObjectSchema.optional()
        }).optional(),
        /**
         * Task support for elicitation requests.
         */
        elicitation: looseObject({
          create: AssertObjectSchema.optional()
        }).optional()
      }).optional()
    });
    ServerTasksCapabilitySchema = looseObject({
      /**
       * Present if the server supports listing tasks.
       */
      list: AssertObjectSchema.optional(),
      /**
       * Present if the server supports cancelling tasks.
       */
      cancel: AssertObjectSchema.optional(),
      /**
       * Capabilities for task creation on specific request types.
       */
      requests: looseObject({
        /**
         * Task support for tool requests.
         */
        tools: looseObject({
          call: AssertObjectSchema.optional()
        }).optional()
      }).optional()
    });
    ClientCapabilitiesSchema = object({
      /**
       * Experimental, non-standard capabilities that the client supports.
       */
      experimental: record(string(), AssertObjectSchema).optional(),
      /**
       * Present if the client supports sampling from an LLM.
       */
      sampling: object({
        /**
         * Present if the client supports context inclusion via includeContext parameter.
         * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
         */
        context: AssertObjectSchema.optional(),
        /**
         * Present if the client supports tool use via tools and toolChoice parameters.
         */
        tools: AssertObjectSchema.optional()
      }).optional(),
      /**
       * Present if the client supports eliciting user input.
       */
      elicitation: ElicitationCapabilitySchema.optional(),
      /**
       * Present if the client supports listing roots.
       */
      roots: object({
        /**
         * Whether the client supports issuing notifications for changes to the roots list.
         */
        listChanged: boolean().optional()
      }).optional(),
      /**
       * Present if the client supports task creation.
       */
      tasks: ClientTasksCapabilitySchema.optional(),
      /**
       * Extensions that the client supports. Keys are extension identifiers (vendor-prefix/extension-name).
       */
      extensions: record(string(), AssertObjectSchema).optional()
    });
    InitializeRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
       */
      protocolVersion: string(),
      capabilities: ClientCapabilitiesSchema,
      clientInfo: ImplementationSchema
    });
    InitializeRequestSchema = RequestSchema.extend({
      method: literal("initialize"),
      params: InitializeRequestParamsSchema
    });
    ServerCapabilitiesSchema = object({
      /**
       * Experimental, non-standard capabilities that the server supports.
       */
      experimental: record(string(), AssertObjectSchema).optional(),
      /**
       * Present if the server supports sending log messages to the client.
       */
      logging: AssertObjectSchema.optional(),
      /**
       * Present if the server supports sending completions to the client.
       */
      completions: AssertObjectSchema.optional(),
      /**
       * Present if the server offers any prompt templates.
       */
      prompts: object({
        /**
         * Whether this server supports issuing notifications for changes to the prompt list.
         */
        listChanged: boolean().optional()
      }).optional(),
      /**
       * Present if the server offers any resources to read.
       */
      resources: object({
        /**
         * Whether this server supports clients subscribing to resource updates.
         */
        subscribe: boolean().optional(),
        /**
         * Whether this server supports issuing notifications for changes to the resource list.
         */
        listChanged: boolean().optional()
      }).optional(),
      /**
       * Present if the server offers any tools to call.
       */
      tools: object({
        /**
         * Whether this server supports issuing notifications for changes to the tool list.
         */
        listChanged: boolean().optional()
      }).optional(),
      /**
       * Present if the server supports task creation.
       */
      tasks: ServerTasksCapabilitySchema.optional(),
      /**
       * Extensions that the server supports. Keys are extension identifiers (vendor-prefix/extension-name).
       */
      extensions: record(string(), AssertObjectSchema).optional()
    });
    InitializeResultSchema = ResultSchema.extend({
      /**
       * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
       */
      protocolVersion: string(),
      capabilities: ServerCapabilitiesSchema,
      serverInfo: ImplementationSchema,
      /**
       * Instructions describing how to use the server and its features.
       *
       * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
       */
      instructions: string().optional()
    });
    InitializedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/initialized"),
      params: NotificationsParamsSchema.optional()
    });
    isInitializedNotification = (value) => InitializedNotificationSchema.safeParse(value).success;
    PingRequestSchema = RequestSchema.extend({
      method: literal("ping"),
      params: BaseRequestParamsSchema.optional()
    });
    ProgressSchema = object({
      /**
       * The progress thus far. This should increase every time progress is made, even if the total is unknown.
       */
      progress: number(),
      /**
       * Total number of items to process (or total progress required), if known.
       */
      total: optional(number()),
      /**
       * An optional message describing the current progress.
       */
      message: optional(string())
    });
    ProgressNotificationParamsSchema = object({
      ...NotificationsParamsSchema.shape,
      ...ProgressSchema.shape,
      /**
       * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
       */
      progressToken: ProgressTokenSchema
    });
    ProgressNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/progress"),
      params: ProgressNotificationParamsSchema
    });
    PaginatedRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * An opaque token representing the current pagination position.
       * If provided, the server should return results starting after this cursor.
       */
      cursor: CursorSchema.optional()
    });
    PaginatedRequestSchema = RequestSchema.extend({
      params: PaginatedRequestParamsSchema.optional()
    });
    PaginatedResultSchema = ResultSchema.extend({
      /**
       * An opaque token representing the pagination position after the last returned result.
       * If present, there may be more results available.
       */
      nextCursor: CursorSchema.optional()
    });
    TaskStatusSchema = _enum(["working", "input_required", "completed", "failed", "cancelled"]);
    TaskSchema = object({
      taskId: string(),
      status: TaskStatusSchema,
      /**
       * Time in milliseconds to keep task results available after completion.
       * If null, the task has unlimited lifetime until manually cleaned up.
       */
      ttl: union([number(), _null()]),
      /**
       * ISO 8601 timestamp when the task was created.
       */
      createdAt: string(),
      /**
       * ISO 8601 timestamp when the task was last updated.
       */
      lastUpdatedAt: string(),
      pollInterval: optional(number()),
      /**
       * Optional diagnostic message for failed tasks or other status information.
       */
      statusMessage: optional(string())
    });
    CreateTaskResultSchema = ResultSchema.extend({
      task: TaskSchema
    });
    TaskStatusNotificationParamsSchema = NotificationsParamsSchema.merge(TaskSchema);
    TaskStatusNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/tasks/status"),
      params: TaskStatusNotificationParamsSchema
    });
    GetTaskRequestSchema = RequestSchema.extend({
      method: literal("tasks/get"),
      params: BaseRequestParamsSchema.extend({
        taskId: string()
      })
    });
    GetTaskResultSchema = ResultSchema.merge(TaskSchema);
    GetTaskPayloadRequestSchema = RequestSchema.extend({
      method: literal("tasks/result"),
      params: BaseRequestParamsSchema.extend({
        taskId: string()
      })
    });
    GetTaskPayloadResultSchema = ResultSchema.loose();
    ListTasksRequestSchema = PaginatedRequestSchema.extend({
      method: literal("tasks/list")
    });
    ListTasksResultSchema = PaginatedResultSchema.extend({
      tasks: array(TaskSchema)
    });
    CancelTaskRequestSchema = RequestSchema.extend({
      method: literal("tasks/cancel"),
      params: BaseRequestParamsSchema.extend({
        taskId: string()
      })
    });
    CancelTaskResultSchema = ResultSchema.merge(TaskSchema);
    ResourceContentsSchema = object({
      /**
       * The URI of this resource.
       */
      uri: string(),
      /**
       * The MIME type of this resource, if known.
       */
      mimeType: optional(string()),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    TextResourceContentsSchema = ResourceContentsSchema.extend({
      /**
       * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
       */
      text: string()
    });
    Base64Schema = string().refine((val) => {
      try {
        atob(val);
        return true;
      } catch {
        return false;
      }
    }, { message: "Invalid Base64 string" });
    BlobResourceContentsSchema = ResourceContentsSchema.extend({
      /**
       * A base64-encoded string representing the binary data of the item.
       */
      blob: Base64Schema
    });
    RoleSchema = _enum(["user", "assistant"]);
    AnnotationsSchema = object({
      /**
       * Intended audience(s) for the resource.
       */
      audience: array(RoleSchema).optional(),
      /**
       * Importance hint for the resource, from 0 (least) to 1 (most).
       */
      priority: number().min(0).max(1).optional(),
      /**
       * ISO 8601 timestamp for the most recent modification.
       */
      lastModified: iso_exports.datetime({ offset: true }).optional()
    });
    ResourceSchema = object({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      /**
       * The URI of this resource.
       */
      uri: string(),
      /**
       * A description of what this resource represents.
       *
       * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
       */
      description: optional(string()),
      /**
       * The MIME type of this resource, if known.
       */
      mimeType: optional(string()),
      /**
       * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
       *
       * This can be used by Hosts to display file sizes and estimate context window usage.
       */
      size: optional(number()),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: optional(looseObject({}))
    });
    ResourceTemplateSchema = object({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      /**
       * A URI template (according to RFC 6570) that can be used to construct resource URIs.
       */
      uriTemplate: string(),
      /**
       * A description of what this template is for.
       *
       * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
       */
      description: optional(string()),
      /**
       * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
       */
      mimeType: optional(string()),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: optional(looseObject({}))
    });
    ListResourcesRequestSchema = PaginatedRequestSchema.extend({
      method: literal("resources/list")
    });
    ListResourcesResultSchema = PaginatedResultSchema.extend({
      resources: array(ResourceSchema)
    });
    ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
      method: literal("resources/templates/list")
    });
    ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
      resourceTemplates: array(ResourceTemplateSchema)
    });
    ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
       *
       * @format uri
       */
      uri: string()
    });
    ReadResourceRequestParamsSchema = ResourceRequestParamsSchema;
    ReadResourceRequestSchema = RequestSchema.extend({
      method: literal("resources/read"),
      params: ReadResourceRequestParamsSchema
    });
    ReadResourceResultSchema = ResultSchema.extend({
      contents: array(union([TextResourceContentsSchema, BlobResourceContentsSchema]))
    });
    ResourceListChangedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/resources/list_changed"),
      params: NotificationsParamsSchema.optional()
    });
    SubscribeRequestParamsSchema = ResourceRequestParamsSchema;
    SubscribeRequestSchema = RequestSchema.extend({
      method: literal("resources/subscribe"),
      params: SubscribeRequestParamsSchema
    });
    UnsubscribeRequestParamsSchema = ResourceRequestParamsSchema;
    UnsubscribeRequestSchema = RequestSchema.extend({
      method: literal("resources/unsubscribe"),
      params: UnsubscribeRequestParamsSchema
    });
    ResourceUpdatedNotificationParamsSchema = NotificationsParamsSchema.extend({
      /**
       * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
       */
      uri: string()
    });
    ResourceUpdatedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/resources/updated"),
      params: ResourceUpdatedNotificationParamsSchema
    });
    PromptArgumentSchema = object({
      /**
       * The name of the argument.
       */
      name: string(),
      /**
       * A human-readable description of the argument.
       */
      description: optional(string()),
      /**
       * Whether this argument must be provided.
       */
      required: optional(boolean())
    });
    PromptSchema = object({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      /**
       * An optional description of what this prompt provides
       */
      description: optional(string()),
      /**
       * A list of arguments to use for templating the prompt.
       */
      arguments: optional(array(PromptArgumentSchema)),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: optional(looseObject({}))
    });
    ListPromptsRequestSchema = PaginatedRequestSchema.extend({
      method: literal("prompts/list")
    });
    ListPromptsResultSchema = PaginatedResultSchema.extend({
      prompts: array(PromptSchema)
    });
    GetPromptRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * The name of the prompt or prompt template.
       */
      name: string(),
      /**
       * Arguments to use for templating the prompt.
       */
      arguments: record(string(), string()).optional()
    });
    GetPromptRequestSchema = RequestSchema.extend({
      method: literal("prompts/get"),
      params: GetPromptRequestParamsSchema
    });
    TextContentSchema = object({
      type: literal("text"),
      /**
       * The text content of the message.
       */
      text: string(),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    ImageContentSchema = object({
      type: literal("image"),
      /**
       * The base64-encoded image data.
       */
      data: Base64Schema,
      /**
       * The MIME type of the image. Different providers may support different image types.
       */
      mimeType: string(),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    AudioContentSchema = object({
      type: literal("audio"),
      /**
       * The base64-encoded audio data.
       */
      data: Base64Schema,
      /**
       * The MIME type of the audio. Different providers may support different audio types.
       */
      mimeType: string(),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    ToolUseContentSchema = object({
      type: literal("tool_use"),
      /**
       * The name of the tool to invoke.
       * Must match a tool name from the request's tools array.
       */
      name: string(),
      /**
       * Unique identifier for this tool call.
       * Used to correlate with ToolResultContent in subsequent messages.
       */
      id: string(),
      /**
       * Arguments to pass to the tool.
       * Must conform to the tool's inputSchema.
       */
      input: record(string(), unknown()),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    EmbeddedResourceSchema = object({
      type: literal("resource"),
      resource: union([TextResourceContentsSchema, BlobResourceContentsSchema]),
      /**
       * Optional annotations for the client.
       */
      annotations: AnnotationsSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    ResourceLinkSchema = ResourceSchema.extend({
      type: literal("resource_link")
    });
    ContentBlockSchema = union([
      TextContentSchema,
      ImageContentSchema,
      AudioContentSchema,
      ResourceLinkSchema,
      EmbeddedResourceSchema
    ]);
    PromptMessageSchema = object({
      role: RoleSchema,
      content: ContentBlockSchema
    });
    GetPromptResultSchema = ResultSchema.extend({
      /**
       * An optional description for the prompt.
       */
      description: string().optional(),
      messages: array(PromptMessageSchema)
    });
    PromptListChangedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema.optional()
    });
    ToolAnnotationsSchema = object({
      /**
       * A human-readable title for the tool.
       */
      title: string().optional(),
      /**
       * If true, the tool does not modify its environment.
       *
       * Default: false
       */
      readOnlyHint: boolean().optional(),
      /**
       * If true, the tool may perform destructive updates to its environment.
       * If false, the tool performs only additive updates.
       *
       * (This property is meaningful only when `readOnlyHint == false`)
       *
       * Default: true
       */
      destructiveHint: boolean().optional(),
      /**
       * If true, calling the tool repeatedly with the same arguments
       * will have no additional effect on the its environment.
       *
       * (This property is meaningful only when `readOnlyHint == false`)
       *
       * Default: false
       */
      idempotentHint: boolean().optional(),
      /**
       * If true, this tool may interact with an "open world" of external
       * entities. If false, the tool's domain of interaction is closed.
       * For example, the world of a web search tool is open, whereas that
       * of a memory tool is not.
       *
       * Default: true
       */
      openWorldHint: boolean().optional()
    });
    ToolExecutionSchema = object({
      /**
       * Indicates the tool's preference for task-augmented execution.
       * - "required": Clients MUST invoke the tool as a task
       * - "optional": Clients MAY invoke the tool as a task or normal request
       * - "forbidden": Clients MUST NOT attempt to invoke the tool as a task
       *
       * If not present, defaults to "forbidden".
       */
      taskSupport: _enum(["required", "optional", "forbidden"]).optional()
    });
    ToolSchema = object({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      /**
       * A human-readable description of the tool.
       */
      description: string().optional(),
      /**
       * A JSON Schema 2020-12 object defining the expected parameters for the tool.
       * Must have type: 'object' at the root level per MCP spec.
       */
      inputSchema: object({
        type: literal("object"),
        properties: record(string(), AssertObjectSchema).optional(),
        required: array(string()).optional()
      }).catchall(unknown()),
      /**
       * An optional JSON Schema 2020-12 object defining the structure of the tool's output
       * returned in the structuredContent field of a CallToolResult.
       * Must have type: 'object' at the root level per MCP spec.
       */
      outputSchema: object({
        type: literal("object"),
        properties: record(string(), AssertObjectSchema).optional(),
        required: array(string()).optional()
      }).catchall(unknown()).optional(),
      /**
       * Optional additional tool information.
       */
      annotations: ToolAnnotationsSchema.optional(),
      /**
       * Execution-related properties for this tool.
       */
      execution: ToolExecutionSchema.optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    ListToolsRequestSchema = PaginatedRequestSchema.extend({
      method: literal("tools/list")
    });
    ListToolsResultSchema = PaginatedResultSchema.extend({
      tools: array(ToolSchema)
    });
    CallToolResultSchema = ResultSchema.extend({
      /**
       * A list of content objects that represent the result of the tool call.
       *
       * If the Tool does not define an outputSchema, this field MUST be present in the result.
       * For backwards compatibility, this field is always present, but it may be empty.
       */
      content: array(ContentBlockSchema).default([]),
      /**
       * An object containing structured tool output.
       *
       * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
       */
      structuredContent: record(string(), unknown()).optional(),
      /**
       * Whether the tool call ended in an error.
       *
       * If not set, this is assumed to be false (the call was successful).
       *
       * Any errors that originate from the tool SHOULD be reported inside the result
       * object, with `isError` set to true, _not_ as an MCP protocol-level error
       * response. Otherwise, the LLM would not be able to see that an error occurred
       * and self-correct.
       *
       * However, any errors in _finding_ the tool, an error indicating that the
       * server does not support tool calls, or any other exceptional conditions,
       * should be reported as an MCP error response.
       */
      isError: boolean().optional()
    });
    CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
      toolResult: unknown()
    }));
    CallToolRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      /**
       * The name of the tool to call.
       */
      name: string(),
      /**
       * Arguments to pass to the tool.
       */
      arguments: record(string(), unknown()).optional()
    });
    CallToolRequestSchema = RequestSchema.extend({
      method: literal("tools/call"),
      params: CallToolRequestParamsSchema
    });
    ToolListChangedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/tools/list_changed"),
      params: NotificationsParamsSchema.optional()
    });
    ListChangedOptionsBaseSchema = object({
      /**
       * If true, the list will be refreshed automatically when a list changed notification is received.
       * The callback will be called with the updated list.
       *
       * If false, the callback will be called with null items, allowing manual refresh.
       *
       * @default true
       */
      autoRefresh: boolean().default(true),
      /**
       * Debounce time in milliseconds for list changed notification processing.
       *
       * Multiple notifications received within this timeframe will only trigger one refresh.
       * Set to 0 to disable debouncing.
       *
       * @default 300
       */
      debounceMs: number().int().nonnegative().default(300)
    });
    LoggingLevelSchema = _enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]);
    SetLevelRequestParamsSchema = BaseRequestParamsSchema.extend({
      /**
       * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
       */
      level: LoggingLevelSchema
    });
    SetLevelRequestSchema = RequestSchema.extend({
      method: literal("logging/setLevel"),
      params: SetLevelRequestParamsSchema
    });
    LoggingMessageNotificationParamsSchema = NotificationsParamsSchema.extend({
      /**
       * The severity of this log message.
       */
      level: LoggingLevelSchema,
      /**
       * An optional name of the logger issuing this message.
       */
      logger: string().optional(),
      /**
       * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
       */
      data: unknown()
    });
    LoggingMessageNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/message"),
      params: LoggingMessageNotificationParamsSchema
    });
    ModelHintSchema = object({
      /**
       * A hint for a model name.
       */
      name: string().optional()
    });
    ModelPreferencesSchema = object({
      /**
       * Optional hints to use for model selection.
       */
      hints: array(ModelHintSchema).optional(),
      /**
       * How much to prioritize cost when selecting a model.
       */
      costPriority: number().min(0).max(1).optional(),
      /**
       * How much to prioritize sampling speed (latency) when selecting a model.
       */
      speedPriority: number().min(0).max(1).optional(),
      /**
       * How much to prioritize intelligence and capabilities when selecting a model.
       */
      intelligencePriority: number().min(0).max(1).optional()
    });
    ToolChoiceSchema = object({
      /**
       * Controls when tools are used:
       * - "auto": Model decides whether to use tools (default)
       * - "required": Model MUST use at least one tool before completing
       * - "none": Model MUST NOT use any tools
       */
      mode: _enum(["auto", "required", "none"]).optional()
    });
    ToolResultContentSchema = object({
      type: literal("tool_result"),
      toolUseId: string().describe("The unique identifier for the corresponding tool call."),
      content: array(ContentBlockSchema).default([]),
      structuredContent: object({}).loose().optional(),
      isError: boolean().optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    SamplingContentSchema = discriminatedUnion("type", [TextContentSchema, ImageContentSchema, AudioContentSchema]);
    SamplingMessageContentBlockSchema = discriminatedUnion("type", [
      TextContentSchema,
      ImageContentSchema,
      AudioContentSchema,
      ToolUseContentSchema,
      ToolResultContentSchema
    ]);
    SamplingMessageSchema = object({
      role: RoleSchema,
      content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)]),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    CreateMessageRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      messages: array(SamplingMessageSchema),
      /**
       * The server's preferences for which model to select. The client MAY modify or omit this request.
       */
      modelPreferences: ModelPreferencesSchema.optional(),
      /**
       * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
       */
      systemPrompt: string().optional(),
      /**
       * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
       * The client MAY ignore this request.
       *
       * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
       * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
       */
      includeContext: _enum(["none", "thisServer", "allServers"]).optional(),
      temperature: number().optional(),
      /**
       * The requested maximum number of tokens to sample (to prevent runaway completions).
       *
       * The client MAY choose to sample fewer tokens than the requested maximum.
       */
      maxTokens: number().int(),
      stopSequences: array(string()).optional(),
      /**
       * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
       */
      metadata: AssertObjectSchema.optional(),
      /**
       * Tools that the model may use during generation.
       * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
       */
      tools: array(ToolSchema).optional(),
      /**
       * Controls how the model uses tools.
       * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
       * Default is `{ mode: "auto" }`.
       */
      toolChoice: ToolChoiceSchema.optional()
    });
    CreateMessageRequestSchema = RequestSchema.extend({
      method: literal("sampling/createMessage"),
      params: CreateMessageRequestParamsSchema
    });
    CreateMessageResultSchema = ResultSchema.extend({
      /**
       * The name of the model that generated the message.
       */
      model: string(),
      /**
       * The reason why sampling stopped, if known.
       *
       * Standard values:
       * - "endTurn": Natural end of the assistant's turn
       * - "stopSequence": A stop sequence was encountered
       * - "maxTokens": Maximum token limit was reached
       *
       * This field is an open string to allow for provider-specific stop reasons.
       */
      stopReason: optional(_enum(["endTurn", "stopSequence", "maxTokens"]).or(string())),
      role: RoleSchema,
      /**
       * Response content. Single content block (text, image, or audio).
       */
      content: SamplingContentSchema
    });
    CreateMessageResultWithToolsSchema = ResultSchema.extend({
      /**
       * The name of the model that generated the message.
       */
      model: string(),
      /**
       * The reason why sampling stopped, if known.
       *
       * Standard values:
       * - "endTurn": Natural end of the assistant's turn
       * - "stopSequence": A stop sequence was encountered
       * - "maxTokens": Maximum token limit was reached
       * - "toolUse": The model wants to use one or more tools
       *
       * This field is an open string to allow for provider-specific stop reasons.
       */
      stopReason: optional(_enum(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(string())),
      role: RoleSchema,
      /**
       * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
       */
      content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)])
    });
    BooleanSchemaSchema = object({
      type: literal("boolean"),
      title: string().optional(),
      description: string().optional(),
      default: boolean().optional()
    });
    StringSchemaSchema = object({
      type: literal("string"),
      title: string().optional(),
      description: string().optional(),
      minLength: number().optional(),
      maxLength: number().optional(),
      format: _enum(["email", "uri", "date", "date-time"]).optional(),
      default: string().optional()
    });
    NumberSchemaSchema = object({
      type: _enum(["number", "integer"]),
      title: string().optional(),
      description: string().optional(),
      minimum: number().optional(),
      maximum: number().optional(),
      default: number().optional()
    });
    UntitledSingleSelectEnumSchemaSchema = object({
      type: literal("string"),
      title: string().optional(),
      description: string().optional(),
      enum: array(string()),
      default: string().optional()
    });
    TitledSingleSelectEnumSchemaSchema = object({
      type: literal("string"),
      title: string().optional(),
      description: string().optional(),
      oneOf: array(object({
        const: string(),
        title: string()
      })),
      default: string().optional()
    });
    LegacyTitledEnumSchemaSchema = object({
      type: literal("string"),
      title: string().optional(),
      description: string().optional(),
      enum: array(string()),
      enumNames: array(string()).optional(),
      default: string().optional()
    });
    SingleSelectEnumSchemaSchema = union([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]);
    UntitledMultiSelectEnumSchemaSchema = object({
      type: literal("array"),
      title: string().optional(),
      description: string().optional(),
      minItems: number().optional(),
      maxItems: number().optional(),
      items: object({
        type: literal("string"),
        enum: array(string())
      }),
      default: array(string()).optional()
    });
    TitledMultiSelectEnumSchemaSchema = object({
      type: literal("array"),
      title: string().optional(),
      description: string().optional(),
      minItems: number().optional(),
      maxItems: number().optional(),
      items: object({
        anyOf: array(object({
          const: string(),
          title: string()
        }))
      }),
      default: array(string()).optional()
    });
    MultiSelectEnumSchemaSchema = union([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]);
    EnumSchemaSchema = union([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema]);
    PrimitiveSchemaDefinitionSchema = union([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema]);
    ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      /**
       * The elicitation mode.
       *
       * Optional for backward compatibility. Clients MUST treat missing mode as "form".
       */
      mode: literal("form").optional(),
      /**
       * The message to present to the user describing what information is being requested.
       */
      message: string(),
      /**
       * A restricted subset of JSON Schema.
       * Only top-level properties are allowed, without nesting.
       */
      requestedSchema: object({
        type: literal("object"),
        properties: record(string(), PrimitiveSchemaDefinitionSchema),
        required: array(string()).optional()
      })
    });
    ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      /**
       * The elicitation mode.
       */
      mode: literal("url"),
      /**
       * The message to present to the user explaining why the interaction is needed.
       */
      message: string(),
      /**
       * The ID of the elicitation, which must be unique within the context of the server.
       * The client MUST treat this ID as an opaque value.
       */
      elicitationId: string(),
      /**
       * The URL that the user should navigate to.
       */
      url: string().url()
    });
    ElicitRequestParamsSchema = union([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]);
    ElicitRequestSchema = RequestSchema.extend({
      method: literal("elicitation/create"),
      params: ElicitRequestParamsSchema
    });
    ElicitationCompleteNotificationParamsSchema = NotificationsParamsSchema.extend({
      /**
       * The ID of the elicitation that completed.
       */
      elicitationId: string()
    });
    ElicitationCompleteNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/elicitation/complete"),
      params: ElicitationCompleteNotificationParamsSchema
    });
    ElicitResultSchema = ResultSchema.extend({
      /**
       * The user action in response to the elicitation.
       * - "accept": User submitted the form/confirmed the action
       * - "decline": User explicitly decline the action
       * - "cancel": User dismissed without making an explicit choice
       */
      action: _enum(["accept", "decline", "cancel"]),
      /**
       * The submitted form data, only present when action is "accept".
       * Contains values matching the requested schema.
       * Per MCP spec, content is "typically omitted" for decline/cancel actions.
       * We normalize null to undefined for leniency while maintaining type compatibility.
       */
      content: preprocess((val) => val === null ? void 0 : val, record(string(), union([string(), number(), boolean(), array(string())])).optional())
    });
    ResourceTemplateReferenceSchema = object({
      type: literal("ref/resource"),
      /**
       * The URI or URI template of the resource.
       */
      uri: string()
    });
    PromptReferenceSchema = object({
      type: literal("ref/prompt"),
      /**
       * The name of the prompt or prompt template
       */
      name: string()
    });
    CompleteRequestParamsSchema = BaseRequestParamsSchema.extend({
      ref: union([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
      /**
       * The argument's information
       */
      argument: object({
        /**
         * The name of the argument
         */
        name: string(),
        /**
         * The value of the argument to use for completion matching.
         */
        value: string()
      }),
      context: object({
        /**
         * Previously-resolved variables in a URI template or prompt.
         */
        arguments: record(string(), string()).optional()
      }).optional()
    });
    CompleteRequestSchema = RequestSchema.extend({
      method: literal("completion/complete"),
      params: CompleteRequestParamsSchema
    });
    CompleteResultSchema = ResultSchema.extend({
      completion: looseObject({
        /**
         * An array of completion values. Must not exceed 100 items.
         */
        values: array(string()).max(100),
        /**
         * The total number of completion options available. This can exceed the number of values actually sent in the response.
         */
        total: optional(number().int()),
        /**
         * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
         */
        hasMore: optional(boolean())
      })
    });
    RootSchema = object({
      /**
       * The URI identifying the root. This *must* start with file:// for now.
       */
      uri: string().startsWith("file://"),
      /**
       * An optional name for the root.
       */
      name: string().optional(),
      /**
       * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
       * for notes on _meta usage.
       */
      _meta: record(string(), unknown()).optional()
    });
    ListRootsRequestSchema = RequestSchema.extend({
      method: literal("roots/list"),
      params: BaseRequestParamsSchema.optional()
    });
    ListRootsResultSchema = ResultSchema.extend({
      roots: array(RootSchema)
    });
    RootsListChangedNotificationSchema = NotificationSchema.extend({
      method: literal("notifications/roots/list_changed"),
      params: NotificationsParamsSchema.optional()
    });
    ClientRequestSchema = union([
      PingRequestSchema,
      InitializeRequestSchema,
      CompleteRequestSchema,
      SetLevelRequestSchema,
      GetPromptRequestSchema,
      ListPromptsRequestSchema,
      ListResourcesRequestSchema,
      ListResourceTemplatesRequestSchema,
      ReadResourceRequestSchema,
      SubscribeRequestSchema,
      UnsubscribeRequestSchema,
      CallToolRequestSchema,
      ListToolsRequestSchema,
      GetTaskRequestSchema,
      GetTaskPayloadRequestSchema,
      ListTasksRequestSchema,
      CancelTaskRequestSchema
    ]);
    ClientNotificationSchema = union([
      CancelledNotificationSchema,
      ProgressNotificationSchema,
      InitializedNotificationSchema,
      RootsListChangedNotificationSchema,
      TaskStatusNotificationSchema
    ]);
    ClientResultSchema = union([
      EmptyResultSchema,
      CreateMessageResultSchema,
      CreateMessageResultWithToolsSchema,
      ElicitResultSchema,
      ListRootsResultSchema,
      GetTaskResultSchema,
      ListTasksResultSchema,
      CreateTaskResultSchema
    ]);
    ServerRequestSchema = union([
      PingRequestSchema,
      CreateMessageRequestSchema,
      ElicitRequestSchema,
      ListRootsRequestSchema,
      GetTaskRequestSchema,
      GetTaskPayloadRequestSchema,
      ListTasksRequestSchema,
      CancelTaskRequestSchema
    ]);
    ServerNotificationSchema = union([
      CancelledNotificationSchema,
      ProgressNotificationSchema,
      LoggingMessageNotificationSchema,
      ResourceUpdatedNotificationSchema,
      ResourceListChangedNotificationSchema,
      ToolListChangedNotificationSchema,
      PromptListChangedNotificationSchema,
      TaskStatusNotificationSchema,
      ElicitationCompleteNotificationSchema
    ]);
    ServerResultSchema = union([
      EmptyResultSchema,
      InitializeResultSchema,
      CompleteResultSchema,
      GetPromptResultSchema,
      ListPromptsResultSchema,
      ListResourcesResultSchema,
      ListResourceTemplatesResultSchema,
      ReadResourceResultSchema,
      CallToolResultSchema,
      ListToolsResultSchema,
      GetTaskResultSchema,
      ListTasksResultSchema,
      CreateTaskResultSchema
    ]);
    McpError = class _McpError extends Error {
      constructor(code, message, data) {
        super(`MCP error ${code}: ${message}`);
        this.code = code;
        this.data = data;
        this.name = "McpError";
      }
      /**
       * Factory method to create the appropriate error type based on the error code and data
       */
      static fromError(code, message, data) {
        if (code === ErrorCode.UrlElicitationRequired && data) {
          const errorData = data;
          if (errorData.elicitations) {
            return new UrlElicitationRequiredError(errorData.elicitations, message);
          }
        }
        return new _McpError(code, message, data);
      }
    };
    UrlElicitationRequiredError = class extends McpError {
      constructor(elicitations, message = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
        super(ErrorCode.UrlElicitationRequired, message, {
          elicitations
        });
      }
      get elicitations() {
        return this.data?.elicitations ?? [];
      }
    };
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/util.js
var util, objectUtil, ZodParsedType, getParsedType;
var init_util2 = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/util.js"() {
    (function(util2) {
      util2.assertEqual = (_2) => {
      };
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object3) => {
        const keys = [];
        for (const key in object3) {
          if (Object.prototype.hasOwnProperty.call(object3, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array2, separator = " | ") {
        return array2.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_2, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (util = {}));
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/ZodError.js
var ZodIssueCode, ZodError;
var init_ZodError = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/ZodError.js"() {
    init_util2();
    ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = /* @__PURE__ */ Object.create(null);
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/locales/en.js
var errorMap, en_default;
var init_en = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/locales/en.js"() {
    init_ZodError();
    init_util2();
    errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    en_default = errorMap;
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/errors.js
function getErrorMap() {
  return overrideErrorMap;
}
var overrideErrorMap;
var init_errors = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/errors.js"() {
    init_en();
    overrideErrorMap = en_default;
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/parseUtil.js
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var makeIssue, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync;
var init_parseUtil = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/parseUtil.js"() {
    init_errors();
    init_en();
    makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return INVALID;
          if (value.status === "aborted")
            return INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    INVALID = Object.freeze({
      status: "aborted"
    });
    DIRTY = (value) => ({ status: "dirty", value });
    OK = (value) => ({ status: "valid", value });
    isAborted = (x) => x.status === "aborted";
    isDirty = (x) => x.status === "dirty";
    isValid = (x) => x.status === "valid";
    isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/typeAliases.js
var init_typeAliases = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/typeAliases.js"() {
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
var init_errorUtil = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/helpers/errorUtil.js"() {
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (errorUtil = {}));
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/types.js
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, nanoidRegex, jwtRegex, durationRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv4CidrRegex, ipv6Regex, ipv6CidrRegex, base64Regex, base64urlRegex, dateRegexSource, dateRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, ZodBranded, ZodPipeline, ZodReadonly, late, ZodFirstPartyTypeKind, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType;
var init_types2 = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/types.js"() {
    init_ZodError();
    init_errors();
    init_errorUtil();
    init_parseUtil();
    init_util2();
    ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[0-9a-z]+$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    nanoidRegex = /^[a-z0-9_-]{21}$/i;
    jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    dateRegex = new RegExp(`^${dateRegexSource}$`);
    ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "nanoid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "duration",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "jwt",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cidr",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    };
    ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return OK(async function(...args) {
            const error = new ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID;
              if (result.status === "dirty")
                return DIRTY(result.value);
              if (status.value === "dirty")
                return DIRTY(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base))
              return INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid(base))
                return INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util.assertNever(effect);
      }
    };
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess2, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess2 },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    late = {
      object: ZodObject.lazycreate
    };
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    stringType = ZodString.create;
    numberType = ZodNumber.create;
    nanType = ZodNaN.create;
    bigIntType = ZodBigInt.create;
    booleanType = ZodBoolean.create;
    dateType = ZodDate.create;
    symbolType = ZodSymbol.create;
    undefinedType = ZodUndefined.create;
    nullType = ZodNull.create;
    anyType = ZodAny.create;
    unknownType = ZodUnknown.create;
    neverType = ZodNever.create;
    voidType = ZodVoid.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    strictObjectType = ZodObject.strictCreate;
    unionType = ZodUnion.create;
    discriminatedUnionType = ZodDiscriminatedUnion.create;
    intersectionType = ZodIntersection.create;
    tupleType = ZodTuple.create;
    recordType = ZodRecord.create;
    mapType = ZodMap.create;
    setType = ZodSet.create;
    functionType = ZodFunction.create;
    lazyType = ZodLazy.create;
    literalType = ZodLiteral.create;
    enumType = ZodEnum.create;
    nativeEnumType = ZodNativeEnum.create;
    promiseType = ZodPromise.create;
    effectsType = ZodEffects.create;
    optionalType = ZodOptional.create;
    nullableType = ZodNullable.create;
    preprocessType = ZodEffects.createWithPreprocess;
    pipelineType = ZodPipeline.create;
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/external.js
var init_external = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/external.js"() {
    init_errors();
    init_parseUtil();
    init_typeAliases();
    init_util2();
    init_types2();
    init_ZodError();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/index.js
var init_v3 = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v3/index.js"() {
    init_external();
    init_external();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/parse.js
var init_parse = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/parse.js"() {
    init_core();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/schemas.js
var init_schemas = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/schemas.js"() {
    init_core();
    init_util();
    init_parse();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/checks.js
var init_checks = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/checks.js"() {
    init_core();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/iso.js
var init_iso = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/iso.js"() {
    init_core();
    init_schemas();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/coerce.js
var init_coerce = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/coerce.js"() {
    init_core();
    init_schemas();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/external.js
var init_external2 = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/mini/external.js"() {
    init_core();
    init_parse();
    init_schemas();
    init_checks();
    init_core();
    init_json_schema_processors();
    init_locales();
    init_iso();
    init_iso();
    init_coerce();
  }
});

// node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4-mini/index.js
var init_v4_mini = __esm({
  "node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4-mini/index.js"() {
    init_external2();
    init_external2();
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
function isZ4Schema(s) {
  const schema = s;
  return !!schema._zod;
}
function safeParse2(schema, data) {
  if (isZ4Schema(schema)) {
    const result2 = safeParse(schema, data);
    return result2;
  }
  const v3Schema = schema;
  const result = v3Schema.safeParse(data);
  return result;
}
function getObjectShape(schema) {
  if (!schema)
    return void 0;
  let rawShape;
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    rawShape = v4Schema._zod?.def?.shape;
  } else {
    const v3Schema = schema;
    rawShape = v3Schema.shape;
  }
  if (!rawShape)
    return void 0;
  if (typeof rawShape === "function") {
    try {
      return rawShape();
    } catch {
      return void 0;
    }
  }
  return rawShape;
}
function getLiteralValue(schema) {
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    const def2 = v4Schema._zod?.def;
    if (def2) {
      if (def2.value !== void 0)
        return def2.value;
      if (Array.isArray(def2.values) && def2.values.length > 0) {
        return def2.values[0];
      }
    }
  }
  const v3Schema = schema;
  const def = v3Schema._def;
  if (def) {
    if (def.value !== void 0)
      return def.value;
    if (Array.isArray(def.values) && def.values.length > 0) {
      return def.values[0];
    }
  }
  const directValue = schema.value;
  if (directValue !== void 0)
    return directValue;
  return void 0;
}
var init_zod_compat = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js"() {
    init_v3();
    init_v4_mini();
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js
function isTerminal(status) {
  return status === "completed" || status === "failed" || status === "cancelled";
}
var init_interfaces = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/Options.js
var init_Options = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/Options.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/Refs.js
var init_Refs = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/Refs.js"() {
    init_Options();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/errorMessages.js
var init_errorMessages = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/errorMessages.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
var init_getRelativePath = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/any.js
var init_any = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/any.js"() {
    init_getRelativePath();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/array.js
var init_array = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/array.js"() {
    init_v3();
    init_errorMessages();
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
var init_bigint = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js"() {
    init_errorMessages();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
var init_boolean = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
var init_branded = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
var init_catch = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/date.js
var init_date = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/date.js"() {
    init_errorMessages();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/default.js
var init_default = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/default.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
var init_effects = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js"() {
    init_parseDef();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
var init_enum = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
var init_intersection = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
var init_literal = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var ALPHA_NUMERIC;
var init_string = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/string.js"() {
    init_errorMessages();
    ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/record.js
var init_record = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/record.js"() {
    init_v3();
    init_parseDef();
    init_string();
    init_branded();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/map.js
var init_map = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/map.js"() {
    init_parseDef();
    init_record();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
var init_nativeEnum = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/never.js
var init_never = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/never.js"() {
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/null.js
var init_null = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/null.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/union.js
var init_union = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/union.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
var init_nullable = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js"() {
    init_parseDef();
    init_union();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/number.js
var init_number = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/number.js"() {
    init_errorMessages();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/object.js
var init_object = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/object.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
var init_optional = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js"() {
    init_parseDef();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
var init_pipeline = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
var init_promise = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/set.js
var init_set = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/set.js"() {
    init_errorMessages();
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
var init_tuple = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
var init_undefined = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js"() {
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
var init_unknown = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js"() {
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
var init_readonly = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js"() {
    init_parseDef();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/selectParser.js
var init_selectParser = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/selectParser.js"() {
    init_v3();
    init_any();
    init_array();
    init_bigint();
    init_boolean();
    init_branded();
    init_catch();
    init_date();
    init_default();
    init_effects();
    init_enum();
    init_intersection();
    init_literal();
    init_map();
    init_nativeEnum();
    init_never();
    init_null();
    init_nullable();
    init_number();
    init_object();
    init_optional();
    init_pipeline();
    init_promise();
    init_record();
    init_set();
    init_string();
    init_tuple();
    init_undefined();
    init_union();
    init_unknown();
    init_readonly();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parseDef.js
var init_parseDef = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parseDef.js"() {
    init_Options();
    init_selectParser();
    init_getRelativePath();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parseTypes.js
var init_parseTypes = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/parseTypes.js"() {
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
var init_zodToJsonSchema = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js"() {
    init_parseDef();
    init_Refs();
    init_any();
  }
});

// node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/index.js
var init_esm = __esm({
  "node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@4.3.6/node_modules/zod-to-json-schema/dist/esm/index.js"() {
    init_Options();
    init_Refs();
    init_errorMessages();
    init_getRelativePath();
    init_parseDef();
    init_parseTypes();
    init_any();
    init_array();
    init_bigint();
    init_boolean();
    init_branded();
    init_catch();
    init_date();
    init_default();
    init_effects();
    init_enum();
    init_intersection();
    init_literal();
    init_map();
    init_nativeEnum();
    init_never();
    init_null();
    init_nullable();
    init_number();
    init_object();
    init_optional();
    init_pipeline();
    init_promise();
    init_readonly();
    init_record();
    init_set();
    init_string();
    init_tuple();
    init_undefined();
    init_union();
    init_unknown();
    init_selectParser();
    init_zodToJsonSchema();
    init_zodToJsonSchema();
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js
function getMethodLiteral(schema) {
  const shape = getObjectShape(schema);
  const methodSchema = shape?.method;
  if (!methodSchema) {
    throw new Error("Schema is missing a method literal");
  }
  const value = getLiteralValue(methodSchema);
  if (typeof value !== "string") {
    throw new Error("Schema method literal must be a string");
  }
  return value;
}
function parseWithCompat(schema, data) {
  const result = safeParse2(schema, data);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
}
var init_zod_json_schema_compat = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js"() {
    init_v4_mini();
    init_zod_compat();
    init_esm();
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function mergeCapabilities(base, additional) {
  const result = { ...base };
  for (const key in additional) {
    const k = key;
    const addValue = additional[k];
    if (addValue === void 0)
      continue;
    const baseValue = result[k];
    if (isPlainObject(baseValue) && isPlainObject(addValue)) {
      result[k] = { ...baseValue, ...addValue };
    } else {
      result[k] = addValue;
    }
  }
  return result;
}
var DEFAULT_REQUEST_TIMEOUT_MSEC, Protocol;
var init_protocol = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js"() {
    init_zod_compat();
    init_types();
    init_interfaces();
    init_zod_json_schema_compat();
    DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
    Protocol = class {
      constructor(_options) {
        this._options = _options;
        this._requestMessageId = 0;
        this._requestHandlers = /* @__PURE__ */ new Map();
        this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
        this._notificationHandlers = /* @__PURE__ */ new Map();
        this._responseHandlers = /* @__PURE__ */ new Map();
        this._progressHandlers = /* @__PURE__ */ new Map();
        this._timeoutInfo = /* @__PURE__ */ new Map();
        this._pendingDebouncedNotifications = /* @__PURE__ */ new Set();
        this._taskProgressTokens = /* @__PURE__ */ new Map();
        this._requestResolvers = /* @__PURE__ */ new Map();
        this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
          this._oncancel(notification);
        });
        this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
          this._onprogress(notification);
        });
        this.setRequestHandler(
          PingRequestSchema,
          // Automatic pong by default.
          (_request) => ({})
        );
        this._taskStore = _options?.taskStore;
        this._taskMessageQueue = _options?.taskMessageQueue;
        if (this._taskStore) {
          this.setRequestHandler(GetTaskRequestSchema, async (request, extra) => {
            const task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
            if (!task) {
              throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
            }
            return {
              ...task
            };
          });
          this.setRequestHandler(GetTaskPayloadRequestSchema, async (request, extra) => {
            const handleTaskResult = async () => {
              const taskId = request.params.taskId;
              if (this._taskMessageQueue) {
                let queuedMessage;
                while (queuedMessage = await this._taskMessageQueue.dequeue(taskId, extra.sessionId)) {
                  if (queuedMessage.type === "response" || queuedMessage.type === "error") {
                    const message = queuedMessage.message;
                    const requestId = message.id;
                    const resolver = this._requestResolvers.get(requestId);
                    if (resolver) {
                      this._requestResolvers.delete(requestId);
                      if (queuedMessage.type === "response") {
                        resolver(message);
                      } else {
                        const errorMessage = message;
                        const error = new McpError(errorMessage.error.code, errorMessage.error.message, errorMessage.error.data);
                        resolver(error);
                      }
                    } else {
                      const messageType = queuedMessage.type === "response" ? "Response" : "Error";
                      this._onerror(new Error(`${messageType} handler missing for request ${requestId}`));
                    }
                    continue;
                  }
                  await this._transport?.send(queuedMessage.message, { relatedRequestId: extra.requestId });
                }
              }
              const task = await this._taskStore.getTask(taskId, extra.sessionId);
              if (!task) {
                throw new McpError(ErrorCode.InvalidParams, `Task not found: ${taskId}`);
              }
              if (!isTerminal(task.status)) {
                await this._waitForTaskUpdate(taskId, extra.signal);
                return await handleTaskResult();
              }
              if (isTerminal(task.status)) {
                const result = await this._taskStore.getTaskResult(taskId, extra.sessionId);
                this._clearTaskQueue(taskId);
                return {
                  ...result,
                  _meta: {
                    ...result._meta,
                    [RELATED_TASK_META_KEY]: {
                      taskId
                    }
                  }
                };
              }
              return await handleTaskResult();
            };
            return await handleTaskResult();
          });
          this.setRequestHandler(ListTasksRequestSchema, async (request, extra) => {
            try {
              const { tasks, nextCursor } = await this._taskStore.listTasks(request.params?.cursor, extra.sessionId);
              return {
                tasks,
                nextCursor,
                _meta: {}
              };
            } catch (error) {
              throw new McpError(ErrorCode.InvalidParams, `Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`);
            }
          });
          this.setRequestHandler(CancelTaskRequestSchema, async (request, extra) => {
            try {
              const task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
              if (!task) {
                throw new McpError(ErrorCode.InvalidParams, `Task not found: ${request.params.taskId}`);
              }
              if (isTerminal(task.status)) {
                throw new McpError(ErrorCode.InvalidParams, `Cannot cancel task in terminal status: ${task.status}`);
              }
              await this._taskStore.updateTaskStatus(request.params.taskId, "cancelled", "Client cancelled task execution.", extra.sessionId);
              this._clearTaskQueue(request.params.taskId);
              const cancelledTask = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
              if (!cancelledTask) {
                throw new McpError(ErrorCode.InvalidParams, `Task not found after cancellation: ${request.params.taskId}`);
              }
              return {
                _meta: {},
                ...cancelledTask
              };
            } catch (error) {
              if (error instanceof McpError) {
                throw error;
              }
              throw new McpError(ErrorCode.InvalidRequest, `Failed to cancel task: ${error instanceof Error ? error.message : String(error)}`);
            }
          });
        }
      }
      async _oncancel(notification) {
        if (!notification.params.requestId) {
          return;
        }
        const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
        controller?.abort(notification.params.reason);
      }
      _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
        this._timeoutInfo.set(messageId, {
          timeoutId: setTimeout(onTimeout, timeout),
          startTime: Date.now(),
          timeout,
          maxTotalTimeout,
          resetTimeoutOnProgress,
          onTimeout
        });
      }
      _resetTimeout(messageId) {
        const info = this._timeoutInfo.get(messageId);
        if (!info)
          return false;
        const totalElapsed = Date.now() - info.startTime;
        if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
          this._timeoutInfo.delete(messageId);
          throw McpError.fromError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
            maxTotalTimeout: info.maxTotalTimeout,
            totalElapsed
          });
        }
        clearTimeout(info.timeoutId);
        info.timeoutId = setTimeout(info.onTimeout, info.timeout);
        return true;
      }
      _cleanupTimeout(messageId) {
        const info = this._timeoutInfo.get(messageId);
        if (info) {
          clearTimeout(info.timeoutId);
          this._timeoutInfo.delete(messageId);
        }
      }
      /**
       * Attaches to the given transport, starts it, and starts listening for messages.
       *
       * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
       */
      async connect(transport) {
        if (this._transport) {
          throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
        }
        this._transport = transport;
        const _onclose = this.transport?.onclose;
        this._transport.onclose = () => {
          _onclose?.();
          this._onclose();
        };
        const _onerror = this.transport?.onerror;
        this._transport.onerror = (error) => {
          _onerror?.(error);
          this._onerror(error);
        };
        const _onmessage = this._transport?.onmessage;
        this._transport.onmessage = (message, extra) => {
          _onmessage?.(message, extra);
          if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) {
            this._onresponse(message);
          } else if (isJSONRPCRequest(message)) {
            this._onrequest(message, extra);
          } else if (isJSONRPCNotification(message)) {
            this._onnotification(message);
          } else {
            this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
          }
        };
        await this._transport.start();
      }
      _onclose() {
        const responseHandlers = this._responseHandlers;
        this._responseHandlers = /* @__PURE__ */ new Map();
        this._progressHandlers.clear();
        this._taskProgressTokens.clear();
        this._pendingDebouncedNotifications.clear();
        for (const info of this._timeoutInfo.values()) {
          clearTimeout(info.timeoutId);
        }
        this._timeoutInfo.clear();
        for (const controller of this._requestHandlerAbortControllers.values()) {
          controller.abort();
        }
        this._requestHandlerAbortControllers.clear();
        const error = McpError.fromError(ErrorCode.ConnectionClosed, "Connection closed");
        this._transport = void 0;
        this.onclose?.();
        for (const handler of responseHandlers.values()) {
          handler(error);
        }
      }
      _onerror(error) {
        this.onerror?.(error);
      }
      _onnotification(notification) {
        const handler = this._notificationHandlers.get(notification.method) ?? this.fallbackNotificationHandler;
        if (handler === void 0) {
          return;
        }
        Promise.resolve().then(() => handler(notification)).catch((error) => this._onerror(new Error(`Uncaught error in notification handler: ${error}`)));
      }
      _onrequest(request, extra) {
        const handler = this._requestHandlers.get(request.method) ?? this.fallbackRequestHandler;
        const capturedTransport = this._transport;
        const relatedTaskId = request.params?._meta?.[RELATED_TASK_META_KEY]?.taskId;
        if (handler === void 0) {
          const errorResponse = {
            jsonrpc: "2.0",
            id: request.id,
            error: {
              code: ErrorCode.MethodNotFound,
              message: "Method not found"
            }
          };
          if (relatedTaskId && this._taskMessageQueue) {
            this._enqueueTaskMessage(relatedTaskId, {
              type: "error",
              message: errorResponse,
              timestamp: Date.now()
            }, capturedTransport?.sessionId).catch((error) => this._onerror(new Error(`Failed to enqueue error response: ${error}`)));
          } else {
            capturedTransport?.send(errorResponse).catch((error) => this._onerror(new Error(`Failed to send an error response: ${error}`)));
          }
          return;
        }
        const abortController = new AbortController();
        this._requestHandlerAbortControllers.set(request.id, abortController);
        const taskCreationParams = isTaskAugmentedRequestParams(request.params) ? request.params.task : void 0;
        const taskStore = this._taskStore ? this.requestTaskStore(request, capturedTransport?.sessionId) : void 0;
        const fullExtra = {
          signal: abortController.signal,
          sessionId: capturedTransport?.sessionId,
          _meta: request.params?._meta,
          sendNotification: async (notification) => {
            if (abortController.signal.aborted)
              return;
            const notificationOptions = { relatedRequestId: request.id };
            if (relatedTaskId) {
              notificationOptions.relatedTask = { taskId: relatedTaskId };
            }
            await this.notification(notification, notificationOptions);
          },
          sendRequest: async (r, resultSchema, options) => {
            if (abortController.signal.aborted) {
              throw new McpError(ErrorCode.ConnectionClosed, "Request was cancelled");
            }
            const requestOptions = { ...options, relatedRequestId: request.id };
            if (relatedTaskId && !requestOptions.relatedTask) {
              requestOptions.relatedTask = { taskId: relatedTaskId };
            }
            const effectiveTaskId = requestOptions.relatedTask?.taskId ?? relatedTaskId;
            if (effectiveTaskId && taskStore) {
              await taskStore.updateTaskStatus(effectiveTaskId, "input_required");
            }
            return await this.request(r, resultSchema, requestOptions);
          },
          authInfo: extra?.authInfo,
          requestId: request.id,
          requestInfo: extra?.requestInfo,
          taskId: relatedTaskId,
          taskStore,
          taskRequestedTtl: taskCreationParams?.ttl,
          closeSSEStream: extra?.closeSSEStream,
          closeStandaloneSSEStream: extra?.closeStandaloneSSEStream
        };
        Promise.resolve().then(() => {
          if (taskCreationParams) {
            this.assertTaskHandlerCapability(request.method);
          }
        }).then(() => handler(request, fullExtra)).then(async (result) => {
          if (abortController.signal.aborted) {
            return;
          }
          const response = {
            result,
            jsonrpc: "2.0",
            id: request.id
          };
          if (relatedTaskId && this._taskMessageQueue) {
            await this._enqueueTaskMessage(relatedTaskId, {
              type: "response",
              message: response,
              timestamp: Date.now()
            }, capturedTransport?.sessionId);
          } else {
            await capturedTransport?.send(response);
          }
        }, async (error) => {
          if (abortController.signal.aborted) {
            return;
          }
          const errorResponse = {
            jsonrpc: "2.0",
            id: request.id,
            error: {
              code: Number.isSafeInteger(error["code"]) ? error["code"] : ErrorCode.InternalError,
              message: error.message ?? "Internal error",
              ...error["data"] !== void 0 && { data: error["data"] }
            }
          };
          if (relatedTaskId && this._taskMessageQueue) {
            await this._enqueueTaskMessage(relatedTaskId, {
              type: "error",
              message: errorResponse,
              timestamp: Date.now()
            }, capturedTransport?.sessionId);
          } else {
            await capturedTransport?.send(errorResponse);
          }
        }).catch((error) => this._onerror(new Error(`Failed to send response: ${error}`))).finally(() => {
          if (this._requestHandlerAbortControllers.get(request.id) === abortController) {
            this._requestHandlerAbortControllers.delete(request.id);
          }
        });
      }
      _onprogress(notification) {
        const { progressToken, ...params } = notification.params;
        const messageId = Number(progressToken);
        const handler = this._progressHandlers.get(messageId);
        if (!handler) {
          this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
          return;
        }
        const responseHandler = this._responseHandlers.get(messageId);
        const timeoutInfo = this._timeoutInfo.get(messageId);
        if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) {
          try {
            this._resetTimeout(messageId);
          } catch (error) {
            this._responseHandlers.delete(messageId);
            this._progressHandlers.delete(messageId);
            this._cleanupTimeout(messageId);
            responseHandler(error);
            return;
          }
        }
        handler(params);
      }
      _onresponse(response) {
        const messageId = Number(response.id);
        const resolver = this._requestResolvers.get(messageId);
        if (resolver) {
          this._requestResolvers.delete(messageId);
          if (isJSONRPCResultResponse(response)) {
            resolver(response);
          } else {
            const error = new McpError(response.error.code, response.error.message, response.error.data);
            resolver(error);
          }
          return;
        }
        const handler = this._responseHandlers.get(messageId);
        if (handler === void 0) {
          this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
          return;
        }
        this._responseHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        let isTaskResponse = false;
        if (isJSONRPCResultResponse(response) && response.result && typeof response.result === "object") {
          const result = response.result;
          if (result.task && typeof result.task === "object") {
            const task = result.task;
            if (typeof task.taskId === "string") {
              isTaskResponse = true;
              this._taskProgressTokens.set(task.taskId, messageId);
            }
          }
        }
        if (!isTaskResponse) {
          this._progressHandlers.delete(messageId);
        }
        if (isJSONRPCResultResponse(response)) {
          handler(response);
        } else {
          const error = McpError.fromError(response.error.code, response.error.message, response.error.data);
          handler(error);
        }
      }
      get transport() {
        return this._transport;
      }
      /**
       * Closes the connection.
       */
      async close() {
        await this._transport?.close();
      }
      /**
       * Sends a request and returns an AsyncGenerator that yields response messages.
       * The generator is guaranteed to end with either a 'result' or 'error' message.
       *
       * @example
       * ```typescript
       * const stream = protocol.requestStream(request, resultSchema, options);
       * for await (const message of stream) {
       *   switch (message.type) {
       *     case 'taskCreated':
       *       console.log('Task created:', message.task.taskId);
       *       break;
       *     case 'taskStatus':
       *       console.log('Task status:', message.task.status);
       *       break;
       *     case 'result':
       *       console.log('Final result:', message.result);
       *       break;
       *     case 'error':
       *       console.error('Error:', message.error);
       *       break;
       *   }
       * }
       * ```
       *
       * @experimental Use `client.experimental.tasks.requestStream()` to access this method.
       */
      async *requestStream(request, resultSchema, options) {
        const { task } = options ?? {};
        if (!task) {
          try {
            const result = await this.request(request, resultSchema, options);
            yield { type: "result", result };
          } catch (error) {
            yield {
              type: "error",
              error: error instanceof McpError ? error : new McpError(ErrorCode.InternalError, String(error))
            };
          }
          return;
        }
        let taskId;
        try {
          const createResult = await this.request(request, CreateTaskResultSchema, options);
          if (createResult.task) {
            taskId = createResult.task.taskId;
            yield { type: "taskCreated", task: createResult.task };
          } else {
            throw new McpError(ErrorCode.InternalError, "Task creation did not return a task");
          }
          while (true) {
            const task2 = await this.getTask({ taskId }, options);
            yield { type: "taskStatus", task: task2 };
            if (isTerminal(task2.status)) {
              if (task2.status === "completed") {
                const result = await this.getTaskResult({ taskId }, resultSchema, options);
                yield { type: "result", result };
              } else if (task2.status === "failed") {
                yield {
                  type: "error",
                  error: new McpError(ErrorCode.InternalError, `Task ${taskId} failed`)
                };
              } else if (task2.status === "cancelled") {
                yield {
                  type: "error",
                  error: new McpError(ErrorCode.InternalError, `Task ${taskId} was cancelled`)
                };
              }
              return;
            }
            if (task2.status === "input_required") {
              const result = await this.getTaskResult({ taskId }, resultSchema, options);
              yield { type: "result", result };
              return;
            }
            const pollInterval = task2.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
            await new Promise((resolve) => setTimeout(resolve, pollInterval));
            options?.signal?.throwIfAborted();
          }
        } catch (error) {
          yield {
            type: "error",
            error: error instanceof McpError ? error : new McpError(ErrorCode.InternalError, String(error))
          };
        }
      }
      /**
       * Sends a request and waits for a response.
       *
       * Do not use this method to emit notifications! Use notification() instead.
       */
      request(request, resultSchema, options) {
        const { relatedRequestId, resumptionToken, onresumptiontoken, task, relatedTask } = options ?? {};
        return new Promise((resolve, reject) => {
          const earlyReject = (error) => {
            reject(error);
          };
          if (!this._transport) {
            earlyReject(new Error("Not connected"));
            return;
          }
          if (this._options?.enforceStrictCapabilities === true) {
            try {
              this.assertCapabilityForMethod(request.method);
              if (task) {
                this.assertTaskCapability(request.method);
              }
            } catch (e) {
              earlyReject(e);
              return;
            }
          }
          options?.signal?.throwIfAborted();
          const messageId = this._requestMessageId++;
          const jsonrpcRequest = {
            ...request,
            jsonrpc: "2.0",
            id: messageId
          };
          if (options?.onprogress) {
            this._progressHandlers.set(messageId, options.onprogress);
            jsonrpcRequest.params = {
              ...request.params,
              _meta: {
                ...request.params?._meta || {},
                progressToken: messageId
              }
            };
          }
          if (task) {
            jsonrpcRequest.params = {
              ...jsonrpcRequest.params,
              task
            };
          }
          if (relatedTask) {
            jsonrpcRequest.params = {
              ...jsonrpcRequest.params,
              _meta: {
                ...jsonrpcRequest.params?._meta || {},
                [RELATED_TASK_META_KEY]: relatedTask
              }
            };
          }
          const cancel = (reason) => {
            this._responseHandlers.delete(messageId);
            this._progressHandlers.delete(messageId);
            this._cleanupTimeout(messageId);
            this._transport?.send({
              jsonrpc: "2.0",
              method: "notifications/cancelled",
              params: {
                requestId: messageId,
                reason: String(reason)
              }
            }, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error2) => this._onerror(new Error(`Failed to send cancellation: ${error2}`)));
            const error = reason instanceof McpError ? reason : new McpError(ErrorCode.RequestTimeout, String(reason));
            reject(error);
          };
          this._responseHandlers.set(messageId, (response) => {
            if (options?.signal?.aborted) {
              return;
            }
            if (response instanceof Error) {
              return reject(response);
            }
            try {
              const parseResult = safeParse2(resultSchema, response.result);
              if (!parseResult.success) {
                reject(parseResult.error);
              } else {
                resolve(parseResult.data);
              }
            } catch (error) {
              reject(error);
            }
          });
          options?.signal?.addEventListener("abort", () => {
            cancel(options?.signal?.reason);
          });
          const timeout = options?.timeout ?? DEFAULT_REQUEST_TIMEOUT_MSEC;
          const timeoutHandler = () => cancel(McpError.fromError(ErrorCode.RequestTimeout, "Request timed out", { timeout }));
          this._setupTimeout(messageId, timeout, options?.maxTotalTimeout, timeoutHandler, options?.resetTimeoutOnProgress ?? false);
          const relatedTaskId = relatedTask?.taskId;
          if (relatedTaskId) {
            const responseResolver = (response) => {
              const handler = this._responseHandlers.get(messageId);
              if (handler) {
                handler(response);
              } else {
                this._onerror(new Error(`Response handler missing for side-channeled request ${messageId}`));
              }
            };
            this._requestResolvers.set(messageId, responseResolver);
            this._enqueueTaskMessage(relatedTaskId, {
              type: "request",
              message: jsonrpcRequest,
              timestamp: Date.now()
            }).catch((error) => {
              this._cleanupTimeout(messageId);
              reject(error);
            });
          } else {
            this._transport.send(jsonrpcRequest, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => {
              this._cleanupTimeout(messageId);
              reject(error);
            });
          }
        });
      }
      /**
       * Gets the current status of a task.
       *
       * @experimental Use `client.experimental.tasks.getTask()` to access this method.
       */
      async getTask(params, options) {
        return this.request({ method: "tasks/get", params }, GetTaskResultSchema, options);
      }
      /**
       * Retrieves the result of a completed task.
       *
       * @experimental Use `client.experimental.tasks.getTaskResult()` to access this method.
       */
      async getTaskResult(params, resultSchema, options) {
        return this.request({ method: "tasks/result", params }, resultSchema, options);
      }
      /**
       * Lists tasks, optionally starting from a pagination cursor.
       *
       * @experimental Use `client.experimental.tasks.listTasks()` to access this method.
       */
      async listTasks(params, options) {
        return this.request({ method: "tasks/list", params }, ListTasksResultSchema, options);
      }
      /**
       * Cancels a specific task.
       *
       * @experimental Use `client.experimental.tasks.cancelTask()` to access this method.
       */
      async cancelTask(params, options) {
        return this.request({ method: "tasks/cancel", params }, CancelTaskResultSchema, options);
      }
      /**
       * Emits a notification, which is a one-way message that does not expect a response.
       */
      async notification(notification, options) {
        if (!this._transport) {
          throw new Error("Not connected");
        }
        this.assertNotificationCapability(notification.method);
        const relatedTaskId = options?.relatedTask?.taskId;
        if (relatedTaskId) {
          const jsonrpcNotification2 = {
            ...notification,
            jsonrpc: "2.0",
            params: {
              ...notification.params,
              _meta: {
                ...notification.params?._meta || {},
                [RELATED_TASK_META_KEY]: options.relatedTask
              }
            }
          };
          await this._enqueueTaskMessage(relatedTaskId, {
            type: "notification",
            message: jsonrpcNotification2,
            timestamp: Date.now()
          });
          return;
        }
        const debouncedMethods = this._options?.debouncedNotificationMethods ?? [];
        const canDebounce = debouncedMethods.includes(notification.method) && !notification.params && !options?.relatedRequestId && !options?.relatedTask;
        if (canDebounce) {
          if (this._pendingDebouncedNotifications.has(notification.method)) {
            return;
          }
          this._pendingDebouncedNotifications.add(notification.method);
          Promise.resolve().then(() => {
            this._pendingDebouncedNotifications.delete(notification.method);
            if (!this._transport) {
              return;
            }
            let jsonrpcNotification2 = {
              ...notification,
              jsonrpc: "2.0"
            };
            if (options?.relatedTask) {
              jsonrpcNotification2 = {
                ...jsonrpcNotification2,
                params: {
                  ...jsonrpcNotification2.params,
                  _meta: {
                    ...jsonrpcNotification2.params?._meta || {},
                    [RELATED_TASK_META_KEY]: options.relatedTask
                  }
                }
              };
            }
            this._transport?.send(jsonrpcNotification2, options).catch((error) => this._onerror(error));
          });
          return;
        }
        let jsonrpcNotification = {
          ...notification,
          jsonrpc: "2.0"
        };
        if (options?.relatedTask) {
          jsonrpcNotification = {
            ...jsonrpcNotification,
            params: {
              ...jsonrpcNotification.params,
              _meta: {
                ...jsonrpcNotification.params?._meta || {},
                [RELATED_TASK_META_KEY]: options.relatedTask
              }
            }
          };
        }
        await this._transport.send(jsonrpcNotification, options);
      }
      /**
       * Registers a handler to invoke when this protocol object receives a request with the given method.
       *
       * Note that this will replace any previous request handler for the same method.
       */
      setRequestHandler(requestSchema, handler) {
        const method = getMethodLiteral(requestSchema);
        this.assertRequestHandlerCapability(method);
        this._requestHandlers.set(method, (request, extra) => {
          const parsed = parseWithCompat(requestSchema, request);
          return Promise.resolve(handler(parsed, extra));
        });
      }
      /**
       * Removes the request handler for the given method.
       */
      removeRequestHandler(method) {
        this._requestHandlers.delete(method);
      }
      /**
       * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
       */
      assertCanSetRequestHandler(method) {
        if (this._requestHandlers.has(method)) {
          throw new Error(`A request handler for ${method} already exists, which would be overridden`);
        }
      }
      /**
       * Registers a handler to invoke when this protocol object receives a notification with the given method.
       *
       * Note that this will replace any previous notification handler for the same method.
       */
      setNotificationHandler(notificationSchema, handler) {
        const method = getMethodLiteral(notificationSchema);
        this._notificationHandlers.set(method, (notification) => {
          const parsed = parseWithCompat(notificationSchema, notification);
          return Promise.resolve(handler(parsed));
        });
      }
      /**
       * Removes the notification handler for the given method.
       */
      removeNotificationHandler(method) {
        this._notificationHandlers.delete(method);
      }
      /**
       * Cleans up the progress handler associated with a task.
       * This should be called when a task reaches a terminal status.
       */
      _cleanupTaskProgressHandler(taskId) {
        const progressToken = this._taskProgressTokens.get(taskId);
        if (progressToken !== void 0) {
          this._progressHandlers.delete(progressToken);
          this._taskProgressTokens.delete(taskId);
        }
      }
      /**
       * Enqueues a task-related message for side-channel delivery via tasks/result.
       * @param taskId The task ID to associate the message with
       * @param message The message to enqueue
       * @param sessionId Optional session ID for binding the operation to a specific session
       * @throws Error if taskStore is not configured or if enqueue fails (e.g., queue overflow)
       *
       * Note: If enqueue fails, it's the TaskMessageQueue implementation's responsibility to handle
       * the error appropriately (e.g., by failing the task, logging, etc.). The Protocol layer
       * simply propagates the error.
       */
      async _enqueueTaskMessage(taskId, message, sessionId) {
        if (!this._taskStore || !this._taskMessageQueue) {
          throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
        }
        const maxQueueSize = this._options?.maxTaskQueueSize;
        await this._taskMessageQueue.enqueue(taskId, message, sessionId, maxQueueSize);
      }
      /**
       * Clears the message queue for a task and rejects any pending request resolvers.
       * @param taskId The task ID whose queue should be cleared
       * @param sessionId Optional session ID for binding the operation to a specific session
       */
      async _clearTaskQueue(taskId, sessionId) {
        if (this._taskMessageQueue) {
          const messages = await this._taskMessageQueue.dequeueAll(taskId, sessionId);
          for (const message of messages) {
            if (message.type === "request" && isJSONRPCRequest(message.message)) {
              const requestId = message.message.id;
              const resolver = this._requestResolvers.get(requestId);
              if (resolver) {
                resolver(new McpError(ErrorCode.InternalError, "Task cancelled or completed"));
                this._requestResolvers.delete(requestId);
              } else {
                this._onerror(new Error(`Resolver missing for request ${requestId} during task ${taskId} cleanup`));
              }
            }
          }
        }
      }
      /**
       * Waits for a task update (new messages or status change) with abort signal support.
       * Uses polling to check for updates at the task's configured poll interval.
       * @param taskId The task ID to wait for
       * @param signal Abort signal to cancel the wait
       * @returns Promise that resolves when an update occurs or rejects if aborted
       */
      async _waitForTaskUpdate(taskId, signal) {
        let interval = this._options?.defaultTaskPollInterval ?? 1e3;
        try {
          const task = await this._taskStore?.getTask(taskId);
          if (task?.pollInterval) {
            interval = task.pollInterval;
          }
        } catch {
        }
        return new Promise((resolve, reject) => {
          if (signal.aborted) {
            reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
            return;
          }
          const timeoutId = setTimeout(resolve, interval);
          signal.addEventListener("abort", () => {
            clearTimeout(timeoutId);
            reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
          }, { once: true });
        });
      }
      requestTaskStore(request, sessionId) {
        const taskStore = this._taskStore;
        if (!taskStore) {
          throw new Error("No task store configured");
        }
        return {
          createTask: async (taskParams) => {
            if (!request) {
              throw new Error("No request provided");
            }
            return await taskStore.createTask(taskParams, request.id, {
              method: request.method,
              params: request.params
            }, sessionId);
          },
          getTask: async (taskId) => {
            const task = await taskStore.getTask(taskId, sessionId);
            if (!task) {
              throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
            }
            return task;
          },
          storeTaskResult: async (taskId, status, result) => {
            await taskStore.storeTaskResult(taskId, status, result, sessionId);
            const task = await taskStore.getTask(taskId, sessionId);
            if (task) {
              const notification = TaskStatusNotificationSchema.parse({
                method: "notifications/tasks/status",
                params: task
              });
              await this.notification(notification);
              if (isTerminal(task.status)) {
                this._cleanupTaskProgressHandler(taskId);
              }
            }
          },
          getTaskResult: (taskId) => {
            return taskStore.getTaskResult(taskId, sessionId);
          },
          updateTaskStatus: async (taskId, status, statusMessage) => {
            const task = await taskStore.getTask(taskId, sessionId);
            if (!task) {
              throw new McpError(ErrorCode.InvalidParams, `Task "${taskId}" not found - it may have been cleaned up`);
            }
            if (isTerminal(task.status)) {
              throw new McpError(ErrorCode.InvalidParams, `Cannot update task "${taskId}" from terminal status "${task.status}" to "${status}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
            }
            await taskStore.updateTaskStatus(taskId, status, statusMessage, sessionId);
            const updatedTask = await taskStore.getTask(taskId, sessionId);
            if (updatedTask) {
              const notification = TaskStatusNotificationSchema.parse({
                method: "notifications/tasks/status",
                params: updatedTask
              });
              await this.notification(notification);
              if (isTerminal(updatedTask.status)) {
                this._cleanupTaskProgressHandler(taskId);
              }
            }
          },
          listTasks: (cursor) => {
            return taskStore.listTasks(cursor, sessionId);
          }
        };
      }
    };
  }
});

// scripts/shims/ajv.mjs
var ajv_exports = {};
__export(ajv_exports, {
  Ajv: () => Ajv,
  CodeGen: () => CodeGen,
  KeywordCxt: () => KeywordCxt,
  MissingRefError: () => MissingRefError,
  Name: () => Name,
  ValidationError: () => ValidationError,
  _: () => _,
  default: () => ajv_default,
  nil: () => nil,
  str: () => str,
  stringify: () => stringify
});
import { createRequire } from "module";
var require2, ajv, Ajv, CodeGen, KeywordCxt, MissingRefError, Name, ValidationError, _, nil, str, stringify, ajv_default;
var init_ajv = __esm({
  "scripts/shims/ajv.mjs"() {
    require2 = createRequire(import.meta.url);
    ajv = require2("ajv");
    Ajv = ajv.Ajv ?? ajv.default ?? ajv;
    CodeGen = ajv.CodeGen;
    KeywordCxt = ajv.KeywordCxt;
    MissingRefError = ajv.MissingRefError;
    Name = ajv.Name;
    ValidationError = ajv.ValidationError;
    _ = ajv._;
    nil = ajv.nil;
    str = ajv.str;
    stringify = ajv.stringify;
    ajv_default = ajv.default ?? ajv;
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/formats.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return { validate, compare };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = {
      ...exports.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str2) {
      const matches = DATE.exec(str2);
      if (!matches)
        return false;
      const year = +matches[1];
      const month = +matches[2];
      const day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2))
        return void 0;
      if (d1 > d2)
        return 1;
      if (d1 < d2)
        return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str2) {
        const matches = TIME.exec(str2);
        if (!matches)
          return false;
        const hr = +matches[1];
        const min = +matches[2];
        const sec = +matches[3];
        const tz = matches[4];
        const tzSign = matches[5] === "-" ? -1 : 1;
        const tzH = +(matches[6] || 0);
        const tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return false;
        if (hr <= 23 && min <= 59 && sec < 60)
          return true;
        const utcMin = min - tzM * tzSign;
        const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2))
        return void 0;
      const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
      const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
      if (!(t1 && t2))
        return void 0;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return void 0;
      const a1 = TIME.exec(t1);
      const a2 = TIME.exec(t2);
      if (!(a1 && a2))
        return void 0;
      t1 = a1[1] + a1[2] + a1[3];
      t2 = a2[1] + a2[2] + a2[3];
      if (t1 > t2)
        return 1;
      if (t1 < t2)
        return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      const time = getTime(strictTimeZone);
      return function date_time(str2) {
        const dateTime = str2.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const d1 = new Date(dt1).valueOf();
      const d2 = new Date(dt2).valueOf();
      if (!(d1 && d2))
        return void 0;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
      const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
      const res = compareDate(d1, d2);
      if (res === void 0)
        return void 0;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str2) {
      return NOT_URI_FRAGMENT.test(str2) && URI.test(str2);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str2) {
      BYTE.lastIndex = 0;
      return BYTE.test(str2);
    }
    var MIN_INT32 = -(2 ** 31);
    var MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str2) {
      if (Z_ANCHOR.test(str2))
        return false;
      try {
        new RegExp(str2);
        return true;
      } catch (e) {
        return false;
      }
    }
  }
});

// node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS({
  "node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/code.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = class {
    };
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name2 = class extends _CodeOrName {
      constructor(s) {
        super();
        if (!exports.IDENTIFIER.test(s))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = s;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    exports.Name = Name2;
    var _Code = class extends _CodeOrName {
      constructor(code) {
        super();
        this._items = typeof code === "string" ? [code] : code;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return false;
        const item = this._items[0];
        return item === "" || item === '""';
      }
      get str() {
        var _a;
        return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
      }
      get names() {
        var _a;
        return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names, c) => {
          if (c instanceof Name2)
            names[c.str] = (names[c.str] || 0) + 1;
          return names;
        }, {});
      }
    };
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _2(strs, ...args) {
      const code = [strs[0]];
      let i = 0;
      while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
      }
      return new _Code(code);
    }
    exports._ = _2;
    var plus = new _Code("+");
    function str2(strs, ...args) {
      const expr = [safeStringify(strs[0])];
      let i = 0;
      while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str2;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code)
        code.push(...arg._items);
      else if (arg instanceof Name2)
        code.push(arg);
      else
        code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      let i = 1;
      while (i < expr.length - 1) {
        if (expr[i] === plus) {
          const res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== void 0) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""')
        return a;
      if (a === '""')
        return b;
      if (typeof a == "string") {
        if (b instanceof Name2 || a[a.length - 1] !== '"')
          return;
        if (typeof b != "string")
          return `${a.slice(0, -1)}${b}"`;
        if (b[0] === '"')
          return a.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name2))
        return `"${a}${b.slice(1)}`;
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str2`${c1}${c2}`;
    }
    exports.strConcat = strConcat;
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify2(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify2;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _2`[${key}]`;
    }
    exports.getProperty = getProperty;
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
      }
      throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  }
});

// node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS({
  "node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = require_code();
    var ValueError = class extends Error {
      constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
      }
    };
    var UsedValueState;
    (function(UsedValueState2) {
      UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
      UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
    })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
    exports.varKinds = {
      const: new code_1.Name("const"),
      let: new code_1.Name("let"),
      var: new code_1.Name("var")
    };
    var Scope = class {
      constructor({ prefixes, parent } = {}) {
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
      }
      name(prefix) {
        return new code_1.Name(this._newName(prefix));
      }
      _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
      }
      _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
          throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return this._names[prefix] = { prefix, index: 0 };
      }
    };
    exports.Scope = Scope;
    var ValueScopeName = class extends code_1.Name {
      constructor(prefix, nameStr) {
        super(nameStr);
        this.prefix = prefix;
      }
      setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
      }
    };
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)`\n`;
    var ValueScope = class extends Scope {
      constructor(opts) {
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
      }
      get() {
        return this._scope;
      }
      name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
      }
      value(nameOrPrefix, value) {
        var _a;
        if (value.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
          const _name = vs.get(valueKey);
          if (_name)
            return _name;
        } else {
          vs = this._values[prefix] = /* @__PURE__ */ new Map();
        }
        vs.set(valueKey, name);
        const s = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s.length;
        s[itemIndex] = value.ref;
        name.setValue(value, { property: prefix, itemIndex });
        return name;
      }
      getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs)
          return;
        return vs.get(keyOrRef);
      }
      scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
          if (name.scopePath === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return (0, code_1._)`${scopeName}${name.scopePath}`;
        });
      }
      scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
          if (name.value === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return name.value.code;
        }, usedValues, getCode);
      }
      _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (const prefix in values) {
          const vs = values[prefix];
          if (!vs)
            continue;
          const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
          vs.forEach((name) => {
            if (nameSet.has(name))
              return;
            nameSet.set(name, UsedValueState.Started);
            let c = valueCode(name);
            if (c) {
              const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
              code = (0, code_1._)`${code}${def} ${name} = ${c};${this.opts._n}`;
            } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
              code = (0, code_1._)`${code}${c}${this.opts._n}`;
            } else {
              throw new ValueError(name);
            }
            nameSet.set(name, UsedValueState.Completed);
          });
        }
        return code;
      }
    };
    exports.ValueScope = ValueScope;
  }
});

// node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/.pnpm/ajv@8.18.0/node_modules/ajv/dist/compile/codegen/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = require_code();
    var scope_1 = require_scope();
    var code_2 = require_code();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return code_2._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return code_2.str;
    } });
    Object.defineProperty(exports, "strConcat", { enumerable: true, get: function() {
      return code_2.strConcat;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return code_2.nil;
    } });
    Object.defineProperty(exports, "getProperty", { enumerable: true, get: function() {
      return code_2.getProperty;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return code_2.stringify;
    } });
    Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function() {
      return code_2.regexpCode;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return code_2.Name;
    } });
    var scope_2 = require_scope();
    Object.defineProperty(exports, "Scope", { enumerable: true, get: function() {
      return scope_2.Scope;
    } });
    Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function() {
      return scope_2.ValueScope;
    } });
    Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function() {
      return scope_2.ValueScopeName;
    } });
    Object.defineProperty(exports, "varKinds", { enumerable: true, get: function() {
      return scope_2.varKinds;
    } });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_names, _constants) {
        return this;
      }
    };
    var Def = class extends Node {
      constructor(varKind, name, rhs) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
      }
      render({ es5, _n }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (!names[this.name.str])
          return;
        if (this.rhs)
          this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
      }
    };
    var Assign = class extends Node {
      constructor(lhs, rhs, sideEffects) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
      }
      render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
          return;
        this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
      }
    };
    var AssignOp = class extends Assign {
      constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects);
        this.op = op;
      }
      render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
      }
    };
    var Label = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        return `${this.label}:` + _n;
      }
    };
    var Break = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
      }
    };
    var Throw = class extends Node {
      constructor(error) {
        super();
        this.error = error;
      }
      render({ _n }) {
        return `throw ${this.error};` + _n;
      }
      get names() {
        return this.error.names;
      }
    };
    var AnyCode = class extends Node {
      constructor(code) {
        super();
        this.code = code;
      }
      render({ _n }) {
        return `${this.code};` + _n;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(names, constants) {
        this.code = optimizeExpr(this.code, names, constants);
        return this;
      }
      get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
      }
    };
    var ParentNode = class extends Node {
      constructor(nodes = []) {
        super();
        this.nodes = nodes;
      }
      render(opts) {
        return this.nodes.reduce((code, n) => code + n.render(opts), "");
      }
      optimizeNodes() {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
          const n = nodes[i].optimizeNodes();
          if (Array.isArray(n))
            nodes.splice(i, 1, ...n);
          else if (n)
            nodes[i] = n;
          else
            nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      optimizeNames(names, constants) {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
          const n = nodes[i];
          if (n.optimizeNames(names, constants))
            continue;
          subtractNames(names, n.names);
          nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((names, n) => addNames(names, n.names), {});
      }
    };
    var BlockNode = class extends ParentNode {
      render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
      }
    };
    var Root = class extends ParentNode {
    };
    var Else = class extends BlockNode {
    };
    Else.kind = "else";
    var If = class _If extends BlockNode {
      constructor(condition, nodes) {
        super(nodes);
        this.condition = condition;
      }
      render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else)
          code += "else " + this.else.render(opts);
        return code;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true)
          return this.nodes;
        let e = this.else;
        if (e) {
          const ns = e.optimizeNodes();
          e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e) {
          if (cond === false)
            return e instanceof _If ? e : e.nodes;
          if (this.nodes.length)
            return this;
          return new _If(not(cond), e instanceof _If ? [e] : e.nodes);
        }
        if (cond === false || !this.nodes.length)
          return void 0;
        return this;
      }
      optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else))
          return;
        this.condition = optimizeExpr(this.condition, names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        addExprNames(names, this.condition);
        if (this.else)
          addNames(names, this.else.names);
        return names;
      }
    };
    If.kind = "if";
    var For = class extends BlockNode {
    };
    For.kind = "for";
    var ForLoop = class extends For {
      constructor(iteration) {
        super();
        this.iteration = iteration;
      }
      render(opts) {
        return `for(${this.iteration})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iteration = optimizeExpr(this.iteration, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iteration.names);
      }
    };
    var ForRange = class extends For {
      constructor(varKind, name, from, to) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
      }
      render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
      }
      get names() {
        const names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
      }
    };
    var ForIter = class extends For {
      constructor(loop, varKind, name, iterable) {
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
      }
      render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iterable = optimizeExpr(this.iterable, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iterable.names);
      }
    };
    var Func = class extends BlockNode {
      constructor(name, args, async) {
        super();
        this.name = name;
        this.args = args;
        this.async = async;
      }
      render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
      }
    };
    Func.kind = "func";
    var Return = class extends ParentNode {
      render(opts) {
        return "return " + super.render(opts);
      }
    };
    Return.kind = "return";
    var Try = class extends BlockNode {
      render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch)
          code += this.catch.render(opts);
        if (this.finally)
          code += this.finally.render(opts);
        return code;
      }
      optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
        return this;
      }
      optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        if (this.catch)
          addNames(names, this.catch.names);
        if (this.finally)
          addNames(names, this.finally.names);
        return names;
      }
    };
    var Catch = class extends BlockNode {
      constructor(error) {
        super();
        this.error = error;
      }
      render(opts) {
        return `catch(${this.error})` + super.render(opts);
      }
    };
    Catch.kind = "catch";
    var Finally = class extends BlockNode {
      render(opts) {
        return "finally" + super.render(opts);
      }
    };
    Finally.kind = "finally";
    var CodeGen2 = class {
      constructor(extScope, opts = {}) {
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({ parent: extScope });
        this._nodes = [new Root()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(prefix) {
        return this._scope.name(prefix);
      }
      // reserves unique name in the external scope
      scopeName(prefix) {
        return this._extScope.name(prefix);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
        vs.add(name);
        return name;
      }
      getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== void 0 && constant)
          this._constants[name.str] = rhs;
        this._leafNode(new Def(varKind, name, rhs));
        return name;
      }
      // `const` declaration (`var` in es5 mode)
      const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
      }
      // `var` declaration with optional assignment
      var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
      }
      // assignment code
      assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
      }
      // `+=` code
      add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
      }
      // appends passed SafeExpr to code or executes Block
      code(c) {
        if (typeof c == "function")
          c();
        else if (c !== code_1.nil)
          this._leafNode(new AnyCode(c));
        return this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...keyValues) {
        const code = ["{"];
        for (const [key, value] of keyValues) {
          if (code.length > 1)
            code.push(",");
          code.push(key);
          if (key !== value || this.opts.es5) {
            code.push(":");
            (0, code_1.addCodeArg)(code, value);
          }
        }
        code.push("}");
        return new code_1._Code(code);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
          this.code(thenBody).else().code(elseBody).endIf();
        } else if (thenBody) {
          this.code(thenBody).endIf();
        } else if (elseBody) {
          throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(condition) {
        return this._elseNode(new If(condition));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new Else());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(If, Else);
      }
      _for(node, forBody) {
        this._blockNode(node);
        if (forBody)
          this.code(forBody).endFor();
        return this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
      }
      // `for` statement for a range of values
      forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
          const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
          return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i) => {
            this.var(name, (0, code_1._)`${arr}[${i}]`);
            forBody(name);
          });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
          return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        }
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(For);
      }
      // `label` statement
      label(label) {
        return this._leafNode(new Label(label));
      }
      // `break` statement
      break(label) {
        return this._leafNode(new Break(label));
      }
      // `return` statement
      return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
      }
      // `try` statement
      try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
          const error = this.name("e");
          this._currNode = node.catch = new Catch(error);
          catchCode(error);
        }
        if (finallyCode) {
          this._currNode = node.finally = new Finally();
          this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
      }
      // `throw` statement
      throw(error) {
        return this._leafNode(new Throw(error));
      }
      // start self-balancing block
      block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body)
          this.code(body).endBlock(nodeCount);
        return this;
      }
      // end the current self-balancing block
      endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
          throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(name, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name, args, async));
        if (funcBody)
          this.code(funcBody).endFunc();
        return this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(Func);
      }
      optimize(n = 1) {
        while (n-- > 0) {
          this._root.optimizeNodes();
          this._root.optimizeNames(this._root.names, this._constants);
        }
      }
      _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
      }
      _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
      }
      _endBlockNode(N1, N2) {
        const n = this._currNode;
        if (n instanceof N1 || N2 && n instanceof N2) {
          this._nodes.pop();
          return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
      }
      _elseNode(node) {
        const n = this._currNode;
        if (!(n instanceof If)) {
          throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n.else = node;
        return this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
      }
      set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
      }
    };
    exports.CodeGen = CodeGen2;
    function addNames(names, from) {
      for (const n in from)
        names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name)
        return replaceName(expr);
      if (!canOptimize(expr))
        return expr;
      return new code_1._Code(expr._items.reduce((items, c) => {
        if (c instanceof code_1.Name)
          c = replaceName(c);
        if (c instanceof code_1._Code)
          items.push(...c._items);
        else
          items.push(c);
        return items;
      }, []));
      function replaceName(n) {
        const c = constants[n.str];
        if (c === void 0 || names[n.str] !== 1)
          return n;
        delete names[n.str];
        return c;
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some((c) => c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== void 0);
      }
    }
    function subtractNames(names, from) {
      for (const n in from)
        names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    function and(...args) {
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    function or(...args) {
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return (x, y) => x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
    }
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/limit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = (init_ajv(), __toCommonJS(ajv_exports));
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, keyword, it } = cxt;
        const { opts, self } = it;
        if (!opts.validateFormats)
          return;
        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
          const format = fCxt.schema;
          const fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true)
            return;
          if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          }
          const fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : void 0
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = (ajv2) => {
      ajv2.addKeyword(exports.formatLimitDefinition);
      return ajv2;
    };
    exports.default = formatLimitPlugin;
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.18.0/node_modules/ajv-formats/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var formats_1 = require_formats();
    var limit_1 = require_limit();
    var codegen_1 = require_codegen();
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = (ajv2, opts = { keywords: true }) => {
      if (Array.isArray(opts)) {
        addFormats(ajv2, opts, formats_1.fullFormats, fullName);
        return ajv2;
      }
      const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
      const list = opts.formats || formats_1.formatNames;
      addFormats(ajv2, list, formats, exportName);
      if (opts.keywords)
        (0, limit_1.default)(ajv2);
      return ajv2;
    };
    formatsPlugin.get = (name, mode = "full") => {
      const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      const f = formats[name];
      if (!f)
        throw new Error(`Unknown format "${name}"`);
      return f;
    };
    function addFormats(ajv2, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv2.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`;
      for (const f of list)
        ajv2.addFormat(f, fs[f]);
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = formatsPlugin;
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js
function createDefaultAjvInstance() {
  const ajv2 = new ajv_default({
    strict: false,
    validateFormats: true,
    validateSchema: false,
    allErrors: true
  });
  const addFormats = import_ajv_formats.default;
  addFormats(ajv2);
  return ajv2;
}
var import_ajv_formats, AjvJsonSchemaValidator;
var init_ajv_provider = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js"() {
    init_ajv();
    import_ajv_formats = __toESM(require_dist());
    AjvJsonSchemaValidator = class {
      /**
       * Create an AJV validator
       *
       * @param ajv - Optional pre-configured AJV instance. If not provided, a default instance will be created.
       *
       * @example
       * ```typescript
       * // Use default configuration (recommended for most cases)
       * import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
       * const validator = new AjvJsonSchemaValidator();
       *
       * // Or provide custom AJV instance for advanced configuration
       * import { Ajv } from 'ajv';
       * import addFormats from 'ajv-formats';
       *
       * const ajv = new Ajv({ validateFormats: true });
       * addFormats(ajv);
       * const validator = new AjvJsonSchemaValidator(ajv);
       * ```
       */
      constructor(ajv2) {
        this._ajv = ajv2 ?? createDefaultAjvInstance();
      }
      /**
       * Create a validator for the given JSON Schema
       *
       * The validator is compiled once and can be reused multiple times.
       * If the schema has an $id, it will be cached by AJV automatically.
       *
       * @param schema - Standard JSON Schema object
       * @returns A validator function that validates input data
       */
      getValidator(schema) {
        const ajvValidator = "$id" in schema && typeof schema.$id === "string" ? this._ajv.getSchema(schema.$id) ?? this._ajv.compile(schema) : this._ajv.compile(schema);
        return (input) => {
          const valid = ajvValidator(input);
          if (valid) {
            return {
              valid: true,
              data: input,
              errorMessage: void 0
            };
          } else {
            return {
              valid: false,
              data: void 0,
              errorMessage: this._ajv.errorsText(ajvValidator.errors)
            };
          }
        };
      }
    };
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/server.js
var ExperimentalServerTasks;
var init_server = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/server.js"() {
    init_types();
    ExperimentalServerTasks = class {
      constructor(_server) {
        this._server = _server;
      }
      /**
       * Sends a request and returns an AsyncGenerator that yields response messages.
       * The generator is guaranteed to end with either a 'result' or 'error' message.
       *
       * This method provides streaming access to request processing, allowing you to
       * observe intermediate task status updates for task-augmented requests.
       *
       * @param request - The request to send
       * @param resultSchema - Zod schema for validating the result
       * @param options - Optional request options (timeout, signal, task creation params, etc.)
       * @returns AsyncGenerator that yields ResponseMessage objects
       *
       * @experimental
       */
      requestStream(request, resultSchema, options) {
        return this._server.requestStream(request, resultSchema, options);
      }
      /**
       * Sends a sampling request and returns an AsyncGenerator that yields response messages.
       * The generator is guaranteed to end with either a 'result' or 'error' message.
       *
       * For task-augmented requests, yields 'taskCreated' and 'taskStatus' messages
       * before the final result.
       *
       * @example
       * ```typescript
       * const stream = server.experimental.tasks.createMessageStream({
       *     messages: [{ role: 'user', content: { type: 'text', text: 'Hello' } }],
       *     maxTokens: 100
       * }, {
       *     onprogress: (progress) => {
       *         // Handle streaming tokens via progress notifications
       *         console.log('Progress:', progress.message);
       *     }
       * });
       *
       * for await (const message of stream) {
       *     switch (message.type) {
       *         case 'taskCreated':
       *             console.log('Task created:', message.task.taskId);
       *             break;
       *         case 'taskStatus':
       *             console.log('Task status:', message.task.status);
       *             break;
       *         case 'result':
       *             console.log('Final result:', message.result);
       *             break;
       *         case 'error':
       *             console.error('Error:', message.error);
       *             break;
       *     }
       * }
       * ```
       *
       * @param params - The sampling request parameters
       * @param options - Optional request options (timeout, signal, task creation params, onprogress, etc.)
       * @returns AsyncGenerator that yields ResponseMessage objects
       *
       * @experimental
       */
      createMessageStream(params, options) {
        const clientCapabilities = this._server.getClientCapabilities();
        if ((params.tools || params.toolChoice) && !clientCapabilities?.sampling?.tools) {
          throw new Error("Client does not support sampling tools capability.");
        }
        if (params.messages.length > 0) {
          const lastMessage = params.messages[params.messages.length - 1];
          const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
          const hasToolResults = lastContent.some((c) => c.type === "tool_result");
          const previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0;
          const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
          const hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
          if (hasToolResults) {
            if (lastContent.some((c) => c.type !== "tool_result")) {
              throw new Error("The last message must contain only tool_result content if any is present");
            }
            if (!hasPreviousToolUse) {
              throw new Error("tool_result blocks are not matching any tool_use from the previous message");
            }
          }
          if (hasPreviousToolUse) {
            const toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id));
            const toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
            if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) {
              throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
            }
          }
        }
        return this.requestStream({
          method: "sampling/createMessage",
          params
        }, CreateMessageResultSchema, options);
      }
      /**
       * Sends an elicitation request and returns an AsyncGenerator that yields response messages.
       * The generator is guaranteed to end with either a 'result' or 'error' message.
       *
       * For task-augmented requests (especially URL-based elicitation), yields 'taskCreated'
       * and 'taskStatus' messages before the final result.
       *
       * @example
       * ```typescript
       * const stream = server.experimental.tasks.elicitInputStream({
       *     mode: 'url',
       *     message: 'Please authenticate',
       *     elicitationId: 'auth-123',
       *     url: 'https://example.com/auth'
       * }, {
       *     task: { ttl: 300000 } // Task-augmented for long-running auth flow
       * });
       *
       * for await (const message of stream) {
       *     switch (message.type) {
       *         case 'taskCreated':
       *             console.log('Task created:', message.task.taskId);
       *             break;
       *         case 'taskStatus':
       *             console.log('Task status:', message.task.status);
       *             break;
       *         case 'result':
       *             console.log('User action:', message.result.action);
       *             break;
       *         case 'error':
       *             console.error('Error:', message.error);
       *             break;
       *     }
       * }
       * ```
       *
       * @param params - The elicitation request parameters
       * @param options - Optional request options (timeout, signal, task creation params, etc.)
       * @returns AsyncGenerator that yields ResponseMessage objects
       *
       * @experimental
       */
      elicitInputStream(params, options) {
        const clientCapabilities = this._server.getClientCapabilities();
        const mode = params.mode ?? "form";
        switch (mode) {
          case "url": {
            if (!clientCapabilities?.elicitation?.url) {
              throw new Error("Client does not support url elicitation.");
            }
            break;
          }
          case "form": {
            if (!clientCapabilities?.elicitation?.form) {
              throw new Error("Client does not support form elicitation.");
            }
            break;
          }
        }
        const normalizedParams = mode === "form" && params.mode === void 0 ? { ...params, mode: "form" } : params;
        return this.requestStream({
          method: "elicitation/create",
          params: normalizedParams
        }, ElicitResultSchema, options);
      }
      /**
       * Gets the current status of a task.
       *
       * @param taskId - The task identifier
       * @param options - Optional request options
       * @returns The task status
       *
       * @experimental
       */
      async getTask(taskId, options) {
        return this._server.getTask({ taskId }, options);
      }
      /**
       * Retrieves the result of a completed task.
       *
       * @param taskId - The task identifier
       * @param resultSchema - Zod schema for validating the result
       * @param options - Optional request options
       * @returns The task result
       *
       * @experimental
       */
      async getTaskResult(taskId, resultSchema, options) {
        return this._server.getTaskResult({ taskId }, resultSchema, options);
      }
      /**
       * Lists tasks with optional pagination.
       *
       * @param cursor - Optional pagination cursor
       * @param options - Optional request options
       * @returns List of tasks with optional next cursor
       *
       * @experimental
       */
      async listTasks(cursor, options) {
        return this._server.listTasks(cursor ? { cursor } : void 0, options);
      }
      /**
       * Cancels a running task.
       *
       * @param taskId - The task identifier
       * @param options - Optional request options
       *
       * @experimental
       */
      async cancelTask(taskId, options) {
        return this._server.cancelTask({ taskId }, options);
      }
    };
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/helpers.js
function assertToolsCallTaskCapability(requests, method, entityName) {
  if (!requests) {
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  }
  switch (method) {
    case "tools/call":
      if (!requests.tools?.call) {
        throw new Error(`${entityName} does not support task creation for tools/call (required for ${method})`);
      }
      break;
    default:
      break;
  }
}
function assertClientRequestTaskCapability(requests, method, entityName) {
  if (!requests) {
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  }
  switch (method) {
    case "sampling/createMessage":
      if (!requests.sampling?.createMessage) {
        throw new Error(`${entityName} does not support task creation for sampling/createMessage (required for ${method})`);
      }
      break;
    case "elicitation/create":
      if (!requests.elicitation?.create) {
        throw new Error(`${entityName} does not support task creation for elicitation/create (required for ${method})`);
      }
      break;
    default:
      break;
  }
}
var init_helpers = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/helpers.js"() {
  }
});

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
var Server;
var init_server2 = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js"() {
    init_protocol();
    init_types();
    init_ajv_provider();
    init_zod_compat();
    init_server();
    init_helpers();
    Server = class extends Protocol {
      /**
       * Initializes this server with the given name and version information.
       */
      constructor(_serverInfo, options) {
        super(options);
        this._serverInfo = _serverInfo;
        this._loggingLevels = /* @__PURE__ */ new Map();
        this.LOG_LEVEL_SEVERITY = new Map(LoggingLevelSchema.options.map((level, index) => [level, index]));
        this.isMessageIgnored = (level, sessionId) => {
          const currentLevel = this._loggingLevels.get(sessionId);
          return currentLevel ? this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(currentLevel) : false;
        };
        this._capabilities = options?.capabilities ?? {};
        this._instructions = options?.instructions;
        this._jsonSchemaValidator = options?.jsonSchemaValidator ?? new AjvJsonSchemaValidator();
        this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request));
        this.setNotificationHandler(InitializedNotificationSchema, () => this.oninitialized?.());
        if (this._capabilities.logging) {
          this.setRequestHandler(SetLevelRequestSchema, async (request, extra) => {
            const transportSessionId = extra.sessionId || extra.requestInfo?.headers["mcp-session-id"] || void 0;
            const { level } = request.params;
            const parseResult = LoggingLevelSchema.safeParse(level);
            if (parseResult.success) {
              this._loggingLevels.set(transportSessionId, parseResult.data);
            }
            return {};
          });
        }
      }
      /**
       * Access experimental features.
       *
       * WARNING: These APIs are experimental and may change without notice.
       *
       * @experimental
       */
      get experimental() {
        if (!this._experimental) {
          this._experimental = {
            tasks: new ExperimentalServerTasks(this)
          };
        }
        return this._experimental;
      }
      /**
       * Registers new capabilities. This can only be called before connecting to a transport.
       *
       * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
       */
      registerCapabilities(capabilities) {
        if (this.transport) {
          throw new Error("Cannot register capabilities after connecting to transport");
        }
        this._capabilities = mergeCapabilities(this._capabilities, capabilities);
      }
      /**
       * Override request handler registration to enforce server-side validation for tools/call.
       */
      setRequestHandler(requestSchema, handler) {
        const shape = getObjectShape(requestSchema);
        const methodSchema = shape?.method;
        if (!methodSchema) {
          throw new Error("Schema is missing a method literal");
        }
        let methodValue;
        if (isZ4Schema(methodSchema)) {
          const v4Schema = methodSchema;
          const v4Def = v4Schema._zod?.def;
          methodValue = v4Def?.value ?? v4Schema.value;
        } else {
          const v3Schema = methodSchema;
          const legacyDef = v3Schema._def;
          methodValue = legacyDef?.value ?? v3Schema.value;
        }
        if (typeof methodValue !== "string") {
          throw new Error("Schema method literal must be a string");
        }
        const method = methodValue;
        if (method === "tools/call") {
          const wrappedHandler = async (request, extra) => {
            const validatedRequest = safeParse2(CallToolRequestSchema, request);
            if (!validatedRequest.success) {
              const errorMessage = validatedRequest.error instanceof Error ? validatedRequest.error.message : String(validatedRequest.error);
              throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call request: ${errorMessage}`);
            }
            const { params } = validatedRequest.data;
            const result = await Promise.resolve(handler(request, extra));
            if (params.task) {
              const taskValidationResult = safeParse2(CreateTaskResultSchema, result);
              if (!taskValidationResult.success) {
                const errorMessage = taskValidationResult.error instanceof Error ? taskValidationResult.error.message : String(taskValidationResult.error);
                throw new McpError(ErrorCode.InvalidParams, `Invalid task creation result: ${errorMessage}`);
              }
              return taskValidationResult.data;
            }
            const validationResult = safeParse2(CallToolResultSchema, result);
            if (!validationResult.success) {
              const errorMessage = validationResult.error instanceof Error ? validationResult.error.message : String(validationResult.error);
              throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call result: ${errorMessage}`);
            }
            return validationResult.data;
          };
          return super.setRequestHandler(requestSchema, wrappedHandler);
        }
        return super.setRequestHandler(requestSchema, handler);
      }
      assertCapabilityForMethod(method) {
        switch (method) {
          case "sampling/createMessage":
            if (!this._clientCapabilities?.sampling) {
              throw new Error(`Client does not support sampling (required for ${method})`);
            }
            break;
          case "elicitation/create":
            if (!this._clientCapabilities?.elicitation) {
              throw new Error(`Client does not support elicitation (required for ${method})`);
            }
            break;
          case "roots/list":
            if (!this._clientCapabilities?.roots) {
              throw new Error(`Client does not support listing roots (required for ${method})`);
            }
            break;
          case "ping":
            break;
        }
      }
      assertNotificationCapability(method) {
        switch (method) {
          case "notifications/message":
            if (!this._capabilities.logging) {
              throw new Error(`Server does not support logging (required for ${method})`);
            }
            break;
          case "notifications/resources/updated":
          case "notifications/resources/list_changed":
            if (!this._capabilities.resources) {
              throw new Error(`Server does not support notifying about resources (required for ${method})`);
            }
            break;
          case "notifications/tools/list_changed":
            if (!this._capabilities.tools) {
              throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
            }
            break;
          case "notifications/prompts/list_changed":
            if (!this._capabilities.prompts) {
              throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
            }
            break;
          case "notifications/elicitation/complete":
            if (!this._clientCapabilities?.elicitation?.url) {
              throw new Error(`Client does not support URL elicitation (required for ${method})`);
            }
            break;
          case "notifications/cancelled":
            break;
          case "notifications/progress":
            break;
        }
      }
      assertRequestHandlerCapability(method) {
        if (!this._capabilities) {
          return;
        }
        switch (method) {
          case "completion/complete":
            if (!this._capabilities.completions) {
              throw new Error(`Server does not support completions (required for ${method})`);
            }
            break;
          case "logging/setLevel":
            if (!this._capabilities.logging) {
              throw new Error(`Server does not support logging (required for ${method})`);
            }
            break;
          case "prompts/get":
          case "prompts/list":
            if (!this._capabilities.prompts) {
              throw new Error(`Server does not support prompts (required for ${method})`);
            }
            break;
          case "resources/list":
          case "resources/templates/list":
          case "resources/read":
            if (!this._capabilities.resources) {
              throw new Error(`Server does not support resources (required for ${method})`);
            }
            break;
          case "tools/call":
          case "tools/list":
            if (!this._capabilities.tools) {
              throw new Error(`Server does not support tools (required for ${method})`);
            }
            break;
          case "tasks/get":
          case "tasks/list":
          case "tasks/result":
          case "tasks/cancel":
            if (!this._capabilities.tasks) {
              throw new Error(`Server does not support tasks capability (required for ${method})`);
            }
            break;
          case "ping":
          case "initialize":
            break;
        }
      }
      assertTaskCapability(method) {
        assertClientRequestTaskCapability(this._clientCapabilities?.tasks?.requests, method, "Client");
      }
      assertTaskHandlerCapability(method) {
        if (!this._capabilities) {
          return;
        }
        assertToolsCallTaskCapability(this._capabilities.tasks?.requests, method, "Server");
      }
      async _oninitialize(request) {
        const requestedVersion = request.params.protocolVersion;
        this._clientCapabilities = request.params.capabilities;
        this._clientVersion = request.params.clientInfo;
        const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION;
        return {
          protocolVersion,
          capabilities: this.getCapabilities(),
          serverInfo: this._serverInfo,
          ...this._instructions && { instructions: this._instructions }
        };
      }
      /**
       * After initialization has completed, this will be populated with the client's reported capabilities.
       */
      getClientCapabilities() {
        return this._clientCapabilities;
      }
      /**
       * After initialization has completed, this will be populated with information about the client's name and version.
       */
      getClientVersion() {
        return this._clientVersion;
      }
      getCapabilities() {
        return this._capabilities;
      }
      async ping() {
        return this.request({ method: "ping" }, EmptyResultSchema);
      }
      // Implementation
      async createMessage(params, options) {
        if (params.tools || params.toolChoice) {
          if (!this._clientCapabilities?.sampling?.tools) {
            throw new Error("Client does not support sampling tools capability.");
          }
        }
        if (params.messages.length > 0) {
          const lastMessage = params.messages[params.messages.length - 1];
          const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
          const hasToolResults = lastContent.some((c) => c.type === "tool_result");
          const previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0;
          const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
          const hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
          if (hasToolResults) {
            if (lastContent.some((c) => c.type !== "tool_result")) {
              throw new Error("The last message must contain only tool_result content if any is present");
            }
            if (!hasPreviousToolUse) {
              throw new Error("tool_result blocks are not matching any tool_use from the previous message");
            }
          }
          if (hasPreviousToolUse) {
            const toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id));
            const toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
            if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) {
              throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
            }
          }
        }
        if (params.tools) {
          return this.request({ method: "sampling/createMessage", params }, CreateMessageResultWithToolsSchema, options);
        }
        return this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
      }
      /**
       * Creates an elicitation request for the given parameters.
       * For backwards compatibility, `mode` may be omitted for form requests and will default to `'form'`.
       * @param params The parameters for the elicitation request.
       * @param options Optional request options.
       * @returns The result of the elicitation request.
       */
      async elicitInput(params, options) {
        const mode = params.mode ?? "form";
        switch (mode) {
          case "url": {
            if (!this._clientCapabilities?.elicitation?.url) {
              throw new Error("Client does not support url elicitation.");
            }
            const urlParams = params;
            return this.request({ method: "elicitation/create", params: urlParams }, ElicitResultSchema, options);
          }
          case "form": {
            if (!this._clientCapabilities?.elicitation?.form) {
              throw new Error("Client does not support form elicitation.");
            }
            const formParams = params.mode === "form" ? params : { ...params, mode: "form" };
            const result = await this.request({ method: "elicitation/create", params: formParams }, ElicitResultSchema, options);
            if (result.action === "accept" && result.content && formParams.requestedSchema) {
              try {
                const validator = this._jsonSchemaValidator.getValidator(formParams.requestedSchema);
                const validationResult = validator(result.content);
                if (!validationResult.valid) {
                  throw new McpError(ErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${validationResult.errorMessage}`);
                }
              } catch (error) {
                if (error instanceof McpError) {
                  throw error;
                }
                throw new McpError(ErrorCode.InternalError, `Error validating elicitation response: ${error instanceof Error ? error.message : String(error)}`);
              }
            }
            return result;
          }
        }
      }
      /**
       * Creates a reusable callback that, when invoked, will send a `notifications/elicitation/complete`
       * notification for the specified elicitation ID.
       *
       * @param elicitationId The ID of the elicitation to mark as complete.
       * @param options Optional notification options. Useful when the completion notification should be related to a prior request.
       * @returns A function that emits the completion notification when awaited.
       */
      createElicitationCompletionNotifier(elicitationId, options) {
        if (!this._clientCapabilities?.elicitation?.url) {
          throw new Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
        }
        return () => this.notification({
          method: "notifications/elicitation/complete",
          params: {
            elicitationId
          }
        }, options);
      }
      async listRoots(params, options) {
        return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
      }
      /**
       * Sends a logging message to the client, if connected.
       * Note: You only need to send the parameters object, not the entire JSON RPC message
       * @see LoggingMessageNotification
       * @param params
       * @param sessionId optional for stateless and backward compatibility
       */
      async sendLoggingMessage(params, sessionId) {
        if (this._capabilities.logging) {
          if (!this.isMessageIgnored(params.level, sessionId)) {
            return this.notification({ method: "notifications/message", params });
          }
        }
      }
      async sendResourceUpdated(params) {
        return this.notification({
          method: "notifications/resources/updated",
          params
        });
      }
      async sendResourceListChanged() {
        return this.notification({
          method: "notifications/resources/list_changed"
        });
      }
      async sendToolListChanged() {
        return this.notification({ method: "notifications/tools/list_changed" });
      }
      async sendPromptListChanged() {
        return this.notification({ method: "notifications/prompts/list_changed" });
      }
    };
  }
});

export {
  isZ4Schema,
  safeParse2 as safeParse,
  getObjectShape,
  init_zod_compat,
  LATEST_PROTOCOL_VERSION,
  SUPPORTED_PROTOCOL_VERSIONS,
  isJSONRPCRequest,
  isJSONRPCResultResponse,
  ErrorCode,
  JSONRPCMessageSchema,
  EmptyResultSchema,
  InitializeResultSchema,
  isInitializedNotification,
  CreateTaskResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  ResourceListChangedNotificationSchema,
  ListPromptsResultSchema,
  GetPromptResultSchema,
  PromptListChangedNotificationSchema,
  ListToolsRequestSchema,
  ListToolsResultSchema,
  CallToolResultSchema,
  CallToolRequestSchema,
  ToolListChangedNotificationSchema,
  ListChangedOptionsBaseSchema,
  CreateMessageRequestSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  ElicitRequestSchema,
  ElicitationCompleteNotificationSchema,
  ElicitResultSchema,
  CompleteResultSchema,
  ListRootsRequestSchema,
  McpError,
  init_types,
  Protocol,
  mergeCapabilities,
  init_protocol,
  Ajv,
  init_ajv,
  AjvJsonSchemaValidator,
  init_ajv_provider,
  assertToolsCallTaskCapability,
  assertClientRequestTaskCapability,
  init_helpers,
  Server,
  init_server2 as init_server
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvdHlwZXMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvdXRpbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QvdjMvWm9kRXJyb3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2xvY2FsZXMvZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2Vycm9ycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QvdjMvaGVscGVycy9wYXJzZVV0aWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvdHlwZUFsaWFzZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvZXJyb3JVdGlsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC92My90eXBlcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QvdjMvZXh0ZXJuYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3YzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC92NC9taW5pL3BhcnNlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC92NC9taW5pL3NjaGVtYXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3Y0L21pbmkvY2hlY2tzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC92NC9taW5pL2lzby5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QvdjQvbWluaS9jb2VyY2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3Y0L21pbmkvZXh0ZXJuYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kL3Y0LW1pbmkvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvc2VydmVyL3pvZC1jb21wYXQudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvZXhwZXJpbWVudGFsL3Rhc2tzL2ludGVyZmFjZXMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vT3B0aW9ucy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9SZWZzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL2Vycm9yTWVzc2FnZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vZ2V0UmVsYXRpdmVQYXRoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvYW55LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvYXJyYXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9iaWdpbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9ib29sZWFuLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvYnJhbmRlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL2NhdGNoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvZGF0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL2RlZmF1bHQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9lZmZlY3RzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvZW51bS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL2ludGVyc2VjdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL2xpdGVyYWwuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9zdHJpbmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9yZWNvcmQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9tYXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9uYXRpdmVFbnVtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvbmV2ZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9udWxsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvdW5pb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9udWxsYWJsZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL251bWJlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL29iamVjdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vem9kLXRvLWpzb24tc2NoZW1hQDMuMjUuMl96b2RANC4zLjYvbm9kZV9tb2R1bGVzL3pvZC10by1qc29uLXNjaGVtYS9kaXN0L2VzbS9wYXJzZXJzL29wdGlvbmFsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvcGlwZWxpbmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy9wcm9taXNlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvc2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvdHVwbGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy91bmRlZmluZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vcGFyc2Vycy91bmtub3duLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlcnMvcmVhZG9ubHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vc2VsZWN0UGFyc2VyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlRGVmLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL3BhcnNlVHlwZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3pvZC10by1qc29uLXNjaGVtYUAzLjI1LjJfem9kQDQuMy42L25vZGVfbW9kdWxlcy96b2QtdG8tanNvbi1zY2hlbWEvZGlzdC9lc20vem9kVG9Kc29uU2NoZW1hLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS96b2QtdG8tanNvbi1zY2hlbWFAMy4yNS4yX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvem9kLXRvLWpzb24tc2NoZW1hL2Rpc3QvZXNtL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9kZWxjb250ZXh0cHJvdG9jb2wrc2RrQDEuMjkuMF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc3JjL3NlcnZlci96b2QtanNvbi1zY2hlbWEtY29tcGF0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9kZWxjb250ZXh0cHJvdG9jb2wrc2RrQDEuMjkuMF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc3JjL3NoYXJlZC9wcm90b2NvbC50cyIsICIuLi8uLi9zY3JpcHRzL3NoaW1zL2Fqdi5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Fqdi1mb3JtYXRzQDMuMC4xX2FqdkA4LjE4LjAvbm9kZV9tb2R1bGVzL2Fqdi1mb3JtYXRzL3NyYy9mb3JtYXRzLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hanZAOC4xOC4wL25vZGVfbW9kdWxlcy9hanYvbGliL2NvbXBpbGUvY29kZWdlbi9jb2RlLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hanZAOC4xOC4wL25vZGVfbW9kdWxlcy9hanYvbGliL2NvbXBpbGUvY29kZWdlbi9zY29wZS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYWp2QDguMTguMC9ub2RlX21vZHVsZXMvYWp2L2xpYi9jb21waWxlL2NvZGVnZW4vaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Fqdi1mb3JtYXRzQDMuMC4xX2FqdkA4LjE4LjAvbm9kZV9tb2R1bGVzL2Fqdi1mb3JtYXRzL3NyYy9saW1pdC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYWp2LWZvcm1hdHNAMy4wLjFfYWp2QDguMTguMC9ub2RlX21vZHVsZXMvYWp2LWZvcm1hdHMvc3JjL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9kZWxjb250ZXh0cHJvdG9jb2wrc2RrQDEuMjkuMF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc3JjL3ZhbGlkYXRpb24vYWp2LXByb3ZpZGVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9kZWxjb250ZXh0cHJvdG9jb2wrc2RrQDEuMjkuMF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0Btb2RlbGNvbnRleHRwcm90b2NvbC9zZGsvc3JjL2V4cGVyaW1lbnRhbC90YXNrcy9zZXJ2ZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvZXhwZXJpbWVudGFsL3Rhc2tzL2hlbHBlcnMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvc2VydmVyL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsICJleHBvcnQgdmFyIHV0aWw7XG4oZnVuY3Rpb24gKHV0aWwpIHtcbiAgICB1dGlsLmFzc2VydEVxdWFsID0gKF8pID0+IHsgfTtcbiAgICBmdW5jdGlvbiBhc3NlcnRJcyhfYXJnKSB7IH1cbiAgICB1dGlsLmFzc2VydElzID0gYXNzZXJ0SXM7XG4gICAgZnVuY3Rpb24gYXNzZXJ0TmV2ZXIoX3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHV0aWwuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbiAgICB1dGlsLmFycmF5VG9FbnVtID0gKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIG9ialtpdGVtXSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZEtleXMgPSB1dGlsLm9iamVjdEtleXMob2JqKS5maWx0ZXIoKGspID0+IHR5cGVvZiBvYmpbb2JqW2tdXSAhPT0gXCJudW1iZXJcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBvZiB2YWxpZEtleXMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyhmaWx0ZXJlZCk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdFZhbHVlcyA9IChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0S2V5cyhvYmopLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtlXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1dGlsLm9iamVjdEtleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09IFwiZnVuY3Rpb25cIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgPyAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6IChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9O1xuICAgIHV0aWwuZmluZCA9IChhcnIsIGNoZWNrZXIpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGNoZWNrZXIoaXRlbSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHV0aWwuaXNJbnRlZ2VyID0gdHlwZW9mIE51bWJlci5pc0ludGVnZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/ICh2YWwpID0+IE51bWJlci5pc0ludGVnZXIodmFsKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJhbi9iYW5cbiAgICAgICAgOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWwpICYmIE1hdGguZmxvb3IodmFsKSA9PT0gdmFsO1xuICAgIGZ1bmN0aW9uIGpvaW5WYWx1ZXMoYXJyYXksIHNlcGFyYXRvciA9IFwiIHwgXCIpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcCgodmFsKSA9PiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IGAnJHt2YWx9J2AgOiB2YWwpKS5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIHV0aWwuam9pblZhbHVlcyA9IGpvaW5WYWx1ZXM7XG4gICAgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIgPSAoXywgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJiaWdpbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59KSh1dGlsIHx8ICh1dGlsID0ge30pKTtcbmV4cG9ydCB2YXIgb2JqZWN0VXRpbDtcbihmdW5jdGlvbiAob2JqZWN0VXRpbCkge1xuICAgIG9iamVjdFV0aWwubWVyZ2VTaGFwZXMgPSAoZmlyc3QsIHNlY29uZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZmlyc3QsXG4gICAgICAgICAgICAuLi5zZWNvbmQsIC8vIHNlY29uZCBvdmVyd3JpdGVzIGZpcnN0XG4gICAgICAgIH07XG4gICAgfTtcbn0pKG9iamVjdFV0aWwgfHwgKG9iamVjdFV0aWwgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IFpvZFBhcnNlZFR5cGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmFuXCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcImludGVnZXJcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJiaWdpbnRcIixcbiAgICBcInN5bWJvbFwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcInVuZGVmaW5lZFwiLFxuICAgIFwibnVsbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwidW5rbm93blwiLFxuICAgIFwicHJvbWlzZVwiLFxuICAgIFwidm9pZFwiLFxuICAgIFwibmV2ZXJcIixcbiAgICBcIm1hcFwiLFxuICAgIFwic2V0XCIsXG5dKTtcbmV4cG9ydCBjb25zdCBnZXRQYXJzZWRUeXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIGRhdGE7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3RyaW5nO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGRhdGEpID8gWm9kUGFyc2VkVHlwZS5uYW4gOiBab2RQYXJzZWRUeXBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJvb2xlYW47XG4gICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZnVuY3Rpb247XG4gICAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmJpZ2ludDtcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc3ltYm9sO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLmFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5udWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGhlbiAmJiB0eXBlb2YgZGF0YS50aGVuID09PSBcImZ1bmN0aW9uXCIgJiYgZGF0YS5jYXRjaCAmJiB0eXBlb2YgZGF0YS5jYXRjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUucHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5tYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkYXRhIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBEYXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm9iamVjdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLnVua25vd247XG4gICAgfVxufTtcbiIsICJpbXBvcnQgeyB1dGlsIH0gZnJvbSBcIi4vaGVscGVycy91dGlsLmpzXCI7XG5leHBvcnQgY29uc3QgWm9kSXNzdWVDb2RlID0gdXRpbC5hcnJheVRvRW51bShbXG4gICAgXCJpbnZhbGlkX3R5cGVcIixcbiAgICBcImludmFsaWRfbGl0ZXJhbFwiLFxuICAgIFwiY3VzdG9tXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uXCIsXG4gICAgXCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3JcIixcbiAgICBcImludmFsaWRfZW51bV92YWx1ZVwiLFxuICAgIFwidW5yZWNvZ25pemVkX2tleXNcIixcbiAgICBcImludmFsaWRfYXJndW1lbnRzXCIsXG4gICAgXCJpbnZhbGlkX3JldHVybl90eXBlXCIsXG4gICAgXCJpbnZhbGlkX2RhdGVcIixcbiAgICBcImludmFsaWRfc3RyaW5nXCIsXG4gICAgXCJ0b29fc21hbGxcIixcbiAgICBcInRvb19iaWdcIixcbiAgICBcImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzXCIsXG4gICAgXCJub3RfbXVsdGlwbGVfb2ZcIixcbiAgICBcIm5vdF9maW5pdGVcIixcbl0pO1xuZXhwb3J0IGNvbnN0IHF1b3RlbGVzc0pzb24gPSAob2JqKSA9PiB7XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvXCIoW15cIl0rKVwiOi9nLCBcIiQxOlwiKTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZ2V0IGVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRJc3N1ZSA9IChzdWIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCBzdWJdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZElzc3VlcyA9IChzdWJzID0gW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNzdWVzID0gWy4uLnRoaXMuaXNzdWVzLCAuLi5zdWJzXTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYWN0dWFsUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGJhbi9iYW5cbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBhY3R1YWxQcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IGFjdHVhbFByb3RvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWm9kRXJyb3JcIjtcbiAgICAgICAgdGhpcy5pc3N1ZXMgPSBpc3N1ZXM7XG4gICAgfVxuICAgIGZvcm1hdChfbWFwcGVyKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlciA9IF9tYXBwZXIgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpc3N1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc3N1ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmllbGRFcnJvcnMgPSB7IF9lcnJvcnM6IFtdIH07XG4gICAgICAgIGNvbnN0IHByb2Nlc3NFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpc3N1ZSBvZiBlcnJvci5pc3N1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3VuaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWUudW5pb25FcnJvcnMubWFwKHByb2Nlc3NFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9yZXR1cm5fdHlwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NFcnJvcihpc3N1ZS5yZXR1cm5UeXBlRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfYXJndW1lbnRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLmFyZ3VtZW50c0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRFcnJvcnMuX2Vycm9ycy5wdXNoKG1hcHBlcihpc3N1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnIgPSBmaWVsZEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGlzc3VlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGlzc3VlLnBhdGhbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtaW5hbCA9IGkgPT09IGlzc3VlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgZXJyb3JBcnJheTogYW55ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBlcnJvckFycmF5Ll9lcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgZXJyb3JBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXSA9IGN1cnJbZWxdIHx8IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyW2VsXS5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyID0gY3VycltlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByb2Nlc3NFcnJvcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzO1xuICAgIH1cbiAgICBzdGF0aWMgYXNzZXJ0KHZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgWm9kRXJyb3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIFpvZEVycm9yOiAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXNzdWVzLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciwgMik7XG4gICAgfVxuICAgIGdldCBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXMubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmbGF0dGVuKG1hcHBlciA9IChpc3N1ZSkgPT4gaXNzdWUubWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RFbCA9IHN1Yi5wYXRoWzBdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdID0gZmllbGRFcnJvcnNbZmlyc3RFbF0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcbiIsICJpbXBvcnQgeyBab2RJc3N1ZUNvZGUgfSBmcm9tIFwiLi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUgfSBmcm9tIFwiLi4vaGVscGVycy91dGlsLmpzXCI7XG5jb25zdCBlcnJvck1hcCA9IChpc3N1ZSwgX2N0eCkgPT4ge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIHN3aXRjaCAoaXNzdWUuY29kZSkge1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGU6XG4gICAgICAgICAgICBpZiAoaXNzdWUucmVjZWl2ZWQgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiUmVxdWlyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRXhwZWN0ZWQgJHtpc3N1ZS5leHBlY3RlZH0sIHJlY2VpdmVkICR7aXNzdWUucmVjZWl2ZWR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWw6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgbGl0ZXJhbCB2YWx1ZSwgZXhwZWN0ZWQgJHtKU09OLnN0cmluZ2lmeShpc3N1ZS5leHBlY3RlZCwgdXRpbC5qc29uU3RyaW5naWZ5UmVwbGFjZXIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYFVucmVjb2duaXplZCBrZXkocykgaW4gb2JqZWN0OiAke3V0aWwuam9pblZhbHVlcyhpc3N1ZS5rZXlzLCBcIiwgXCIpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGRpc2NyaW1pbmF0b3IgdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9lbnVtX3ZhbHVlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGVudW0gdmFsdWUuIEV4cGVjdGVkICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLm9wdGlvbnMpfSwgcmVjZWl2ZWQgJyR7aXNzdWUucmVjZWl2ZWR9J2A7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gYXJndW1lbnRzYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGZ1bmN0aW9uIHJldHVybiB0eXBlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGF0ZWA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJpbmNsdWRlc1wiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGluY2x1ZGUgXCIke2lzc3VlLnZhbGlkYXRpb24uaW5jbHVkZXN9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlzc3VlLnZhbGlkYXRpb24ucG9zaXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgJHttZXNzYWdlfSBhdCBvbmUgb3IgbW9yZSBwb3NpdGlvbnMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7aXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbn1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwic3RhcnRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IHN0YXJ0IHdpdGggXCIke2lzc3VlLnZhbGlkYXRpb24uc3RhcnRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwiZW5kc1dpdGhcIiBpbiBpc3N1ZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dDogbXVzdCBlbmQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5lbmRzV2l0aH1cImA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGlzc3VlLnZhbGlkYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnZhbGlkYXRpb24gIT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCAke2lzc3VlLnZhbGlkYXRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fc21hbGw6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgbW9yZSB0aGFuYH0gJHtpc3N1ZS5taW5pbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBcImV4YWN0bHlcIiA6IGlzc3VlLmluY2x1c2l2ZSA/IGBhdCBsZWFzdGAgOiBgb3ZlcmB9ICR7aXNzdWUubWluaW11bX0gY2hhcmFjdGVyKHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHkgZXF1YWwgdG8gYCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYCA6IGBncmVhdGVyIHRoYW4gYH0ke2lzc3VlLm1pbmltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7bmV3IERhdGUoTnVtYmVyKGlzc3VlLm1pbmltdW0pKX1gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS50b29fYmlnOlxuICAgICAgICAgICAgaWYgKGlzc3VlLnR5cGUgPT09IFwiYXJyYXlcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEFycmF5IG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX0gZWxlbWVudChzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgU3RyaW5nIG11c3QgY29udGFpbiAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IG1vc3RgIDogYHVuZGVyYH0gJHtpc3N1ZS5tYXhpbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiYmlnaW50XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBCaWdJbnQgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYGxlc3MgdGhhbiBvciBlcXVhbCB0b2AgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcImRhdGVcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYERhdGUgbXVzdCBiZSAke2lzc3VlLmV4YWN0ID8gYGV4YWN0bHlgIDogaXNzdWUuaW5jbHVzaXZlID8gYHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0b2AgOiBgc21hbGxlciB0aGFuYH0gJHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWF4aW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmN1c3RvbTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBpbnB1dGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXM6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludGVyc2VjdGlvbiByZXN1bHRzIGNvdWxkIG5vdCBiZSBtZXJnZWRgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZjpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2lzc3VlLm11bHRpcGxlT2Z9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5ub3RfZmluaXRlOlxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTnVtYmVyIG11c3QgYmUgZmluaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBfY3R4LmRlZmF1bHRFcnJvcjtcbiAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUpO1xuICAgIH1cbiAgICByZXR1cm4geyBtZXNzYWdlIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZXJyb3JNYXA7XG4iLCAiaW1wb3J0IGRlZmF1bHRFcnJvck1hcCBmcm9tIFwiLi9sb2NhbGVzL2VuLmpzXCI7XG5sZXQgb3ZlcnJpZGVFcnJvck1hcCA9IGRlZmF1bHRFcnJvck1hcDtcbmV4cG9ydCB7IGRlZmF1bHRFcnJvck1hcCB9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVycm9yTWFwKG1hcCkge1xuICAgIG92ZXJyaWRlRXJyb3JNYXAgPSBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JNYXAoKSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlRXJyb3JNYXA7XG59XG4iLCAiaW1wb3J0IHsgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuLi9sb2NhbGVzL2VuLmpzXCI7XG5leHBvcnQgY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBFTVBUWV9QQVRIID0gW107XG5leHBvcnQgZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZGVmYXVsdEVycm9yTWFwID8gdW5kZWZpbmVkIDogZGVmYXVsdEVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmV4cG9ydCBjbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5leHBvcnQgY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5leHBvcnQgY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmV4cG9ydCBjb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuIiwgImV4cG9ydCB7fTtcbiIsICJleHBvcnQgdmFyIGVycm9yVXRpbDtcbihmdW5jdGlvbiAoZXJyb3JVdGlsKSB7XG4gICAgZXJyb3JVdGlsLmVyclRvT2JqID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlIH0gOiBtZXNzYWdlIHx8IHt9O1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50OlxuICAgIGVycm9yVXRpbC50b1N0cmluZyA9IChtZXNzYWdlKSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBtZXNzYWdlPy5tZXNzYWdlO1xufSkoZXJyb3JVdGlsIHx8IChlcnJvclV0aWwgPSB7fSkpO1xuIiwgImltcG9ydCB7IFpvZEVycm9yLCBab2RJc3N1ZUNvZGUsIH0gZnJvbSBcIi4vWm9kRXJyb3IuanNcIjtcbmltcG9ydCB7IGRlZmF1bHRFcnJvck1hcCwgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCB7IGVycm9yVXRpbCB9IGZyb20gXCIuL2hlbHBlcnMvZXJyb3JVdGlsLmpzXCI7XG5pbXBvcnQgeyBESVJUWSwgSU5WQUxJRCwgT0ssIFBhcnNlU3RhdHVzLCBhZGRJc3N1ZVRvQ29udGV4dCwgaXNBYm9ydGVkLCBpc0FzeW5jLCBpc0RpcnR5LCBpc1ZhbGlkLCBtYWtlSXNzdWUsIH0gZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmltcG9ydCB7IHV0aWwsIFpvZFBhcnNlZFR5cGUsIGdldFBhcnNlZFR5cGUgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNsYXNzIFBhcnNlSW5wdXRMYXp5UGF0aCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB2YWx1ZSwgcGF0aCwga2V5KSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZFBhdGggPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgIH1cbiAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFBhdGgucHVzaCguLi50aGlzLl9wYXRoLCAuLi50aGlzLl9rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIHRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhdGg7XG4gICAgfVxufVxuY29uc3QgaGFuZGxlUmVzdWx0ID0gKGN0eCwgcmVzdWx0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQudmFsdWUgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWxpZGF0aW9uIGZhaWxlZCBidXQgbm8gaXNzdWVzIGRldGVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgWm9kRXJyb3IoY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gcHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IHsgZXJyb3JNYXAsIGludmFsaWRfdHlwZV9lcnJvciwgcmVxdWlyZWRfZXJyb3IsIGRlc2NyaXB0aW9uIH0gPSBwYXJhbXM7XG4gICAgaWYgKGVycm9yTWFwICYmIChpbnZhbGlkX3R5cGVfZXJyb3IgfHwgcmVxdWlyZWRfZXJyb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIFwiaW52YWxpZF90eXBlX2Vycm9yXCIgb3IgXCJyZXF1aXJlZF9lcnJvclwiIGluIGNvbmp1bmN0aW9uIHdpdGggY3VzdG9tIGVycm9yIG1hcC5gKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTWFwKVxuICAgICAgICByZXR1cm4geyBlcnJvck1hcDogZXJyb3JNYXAsIGRlc2NyaXB0aW9uIH07XG4gICAgY29uc3QgY3VzdG9tTWFwID0gKGlzcywgY3R4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gcGFyYW1zO1xuICAgICAgICBpZiAoaXNzLmNvZGUgPT09IFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gcmVxdWlyZWRfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc3MuY29kZSAhPT0gXCJpbnZhbGlkX3R5cGVcIilcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IGN0eC5kZWZhdWx0RXJyb3IgfTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBpbnZhbGlkX3R5cGVfZXJyb3IgPz8gY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgIH07XG4gICAgcmV0dXJuIHsgZXJyb3JNYXA6IGN1c3RvbU1hcCwgZGVzY3JpcHRpb24gfTtcbn1cbmV4cG9ydCBjbGFzcyBab2RUeXBlIHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIF9nZXRUeXBlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBfZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCkge1xuICAgICAgICByZXR1cm4gKGN0eCB8fCB7XG4gICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICBkYXRhOiBpbnB1dC5kYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXRoOiBpbnB1dC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IG5ldyBQYXJzZVN0YXR1cygpLFxuICAgICAgICAgICAgY3R4OiB7XG4gICAgICAgICAgICAgICAgY29tbW9uOiBpbnB1dC5wYXJlbnQuY29tbW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShpbnB1dC5kYXRhKSxcbiAgICAgICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBpbnB1dC5wYXJlbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcGFyc2VTeW5jKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKGlzQXN5bmMocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3luY2hyb25vdXMgcGFyc2UgZW5jb3VudGVyZWQgcHJvbWlzZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgX3BhcnNlQXN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxuICAgIHBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNhZmVQYXJzZShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgc2FmZVBhcnNlKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXM/LmFzeW5jID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIFwifnZhbGlkYXRlXCIoZGF0YSkge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFzeW5jOiAhIXRoaXNbXCJ+c3RhbmRhcmRcIl0uYXN5bmMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZVN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2U/LnRvTG93ZXJDYXNlKCk/LmluY2x1ZGVzKFwiZW5jb3VudGVyZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5jb21tb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXN5bmMoeyBkYXRhLCBwYXRoOiBbXSwgcGFyZW50OiBjdHggfSkudGhlbigocmVzdWx0KSA9PiBpc1ZhbGlkKHJlc3VsdClcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQudmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IGN0eC5jb21tb24uaXNzdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgfVxuICAgIGFzeW5jIHNhZmVQYXJzZUFzeW5jKGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHR1YWxFcnJvck1hcDogcGFyYW1zPy5lcnJvck1hcCxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBwYXJhbXM/LnBhdGggfHwgW10sXG4gICAgICAgICAgICBzY2hlbWFFcnJvck1hcDogdGhpcy5fZGVmLmVycm9yTWFwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhcnNlZFR5cGU6IGdldFBhcnNlZFR5cGUoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heWJlQXN5bmNSZXN1bHQgPSB0aGlzLl9wYXJzZSh7IGRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGlzQXN5bmMobWF5YmVBc3luY1Jlc3VsdCkgPyBtYXliZUFzeW5jUmVzdWx0IDogUHJvbWlzZS5yZXNvbHZlKG1heWJlQXN5bmNSZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3VsdChjdHgsIHJlc3VsdCk7XG4gICAgfVxuICAgIHJlZmluZShjaGVjaywgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBnZXRJc3N1ZVByb3BlcnRpZXMgPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1lc3NhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVmaW5lbWVudCgodmFsLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBzZXRFcnJvciA9ICgpID0+IGN0eC5hZGRJc3N1ZSh7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAuLi5nZXRJc3N1ZVByb3BlcnRpZXModmFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZmluZW1lbnQoY2hlY2ssIHJlZmluZW1lbnREYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayh2YWwpKSB7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHR5cGVvZiByZWZpbmVtZW50RGF0YSA9PT0gXCJmdW5jdGlvblwiID8gcmVmaW5lbWVudERhdGEodmFsLCBjdHgpIDogcmVmaW5lbWVudERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlZmluZW1lbnQocmVmaW5lbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicmVmaW5lbWVudFwiLCByZWZpbmVtZW50IH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdXBlclJlZmluZShyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KHJlZmluZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWYpIHtcbiAgICAgICAgLyoqIEFsaWFzIG9mIHNhZmVQYXJzZUFzeW5jICovXG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zYWZlUGFyc2VBc3luYztcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xuICAgICAgICB0aGlzLnBhcnNlID0gdGhpcy5wYXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZSA9IHRoaXMuc2FmZVBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGFyc2VBc3luYyA9IHRoaXMucGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhZmVQYXJzZUFzeW5jID0gdGhpcy5zYWZlUGFyc2VBc3luYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNwYSA9IHRoaXMuc3BhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVmaW5lID0gdGhpcy5yZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmVtZW50ID0gdGhpcy5yZWZpbmVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VwZXJSZWZpbmUgPSB0aGlzLnN1cGVyUmVmaW5lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSB0aGlzLm9wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGFibGUgPSB0aGlzLm51bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVsbGlzaCA9IHRoaXMubnVsbGlzaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vciA9IHRoaXMub3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbmQgPSB0aGlzLmFuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhdGNoID0gdGhpcy5jYXRjaC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gdGhpcy5kZXNjcmliZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBpcGUgPSB0aGlzLnBpcGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc051bGxhYmxlID0gdGhpcy5pc051bGxhYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHRoaXMuaXNPcHRpb25hbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogMSxcbiAgICAgICAgICAgIHZlbmRvcjogXCJ6b2RcIixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoZGF0YSkgPT4gdGhpc1tcIn52YWxpZGF0ZVwiXShkYXRhKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgbnVsbGlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVsbGFibGUoKS5vcHRpb25hbCgpO1xuICAgIH1cbiAgICBhcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZEFycmF5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFByb21pc2UuY3JlYXRlKHRoaXMsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIG9yKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gWm9kVW5pb24uY3JlYXRlKFt0aGlzLCBvcHRpb25dLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBhbmQoaW5jb21pbmcpIHtcbiAgICAgICAgcmV0dXJuIFpvZEludGVyc2VjdGlvbi5jcmVhdGUodGhpcywgaW5jb21pbmcsIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlZmF1bHQoZGVmKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGVmYXVsdCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicmFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCcmFuZGVkKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChkZWYpIHtcbiAgICAgICAgY29uc3QgY2F0Y2hWYWx1ZUZ1bmMgPSB0eXBlb2YgZGVmID09PSBcImZ1bmN0aW9uXCIgPyBkZWYgOiAoKSA9PiBkZWY7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgaW5uZXJUeXBlOiB0aGlzLFxuICAgICAgICAgICAgY2F0Y2hWYWx1ZTogY2F0Y2hWYWx1ZUZ1bmMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzY3JpYmUoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgVGhpcyA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHJldHVybiBuZXcgVGhpcyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpcGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBab2RQaXBlbGluZS5jcmVhdGUodGhpcywgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmVhZG9ubHkoKSB7XG4gICAgICAgIHJldHVybiBab2RSZWFkb25seS5jcmVhdGUodGhpcyk7XG4gICAgfVxuICAgIGlzT3B0aW9uYWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZSh1bmRlZmluZWQpLnN1Y2Nlc3M7XG4gICAgfVxuICAgIGlzTnVsbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmVQYXJzZShudWxsKS5zdWNjZXNzO1xuICAgIH1cbn1cbmNvbnN0IGN1aWRSZWdleCA9IC9eY1teXFxzLV17OCx9JC9pO1xuY29uc3QgY3VpZDJSZWdleCA9IC9eWzAtOWEtel0rJC87XG5jb25zdCB1bGlkUmVnZXggPSAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kL2k7XG4vLyBjb25zdCB1dWlkUmVnZXggPVxuLy8gICAvXihbYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bMS01XVthLWYwLTldezN9LVthLWYwLTldezR9LVthLWYwLTldezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuY29uc3QgdXVpZFJlZ2V4ID0gL15bMC05YS1mQS1GXXs4fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXs0fVxcYi1bMC05YS1mQS1GXXsxMn0kL2k7XG5jb25zdCBuYW5vaWRSZWdleCA9IC9eW2EtejAtOV8tXXsyMX0kL2k7XG5jb25zdCBqd3RSZWdleCA9IC9eW0EtWmEtejAtOS1fXStcXC5bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10qJC87XG5jb25zdCBkdXJhdGlvblJlZ2V4ID0gL15bLStdP1AoPyEkKSg/Oig/OlstK10/XFxkK1kpfCg/OlstK10/XFxkK1suLF1cXGQrWSQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86KD86Wy0rXT9cXGQrVyl8KD86Wy0rXT9cXGQrWy4sXVxcZCtXJCkpPyg/Oig/OlstK10/XFxkK0QpfCg/OlstK10/XFxkK1suLF1cXGQrRCQpKT8oPzpUKD89W1xcZCstXSkoPzooPzpbLStdP1xcZCtIKXwoPzpbLStdP1xcZCtbLixdXFxkK0gkKSk/KD86KD86Wy0rXT9cXGQrTSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtNJCkpPyg/OlstK10/XFxkKyg/OlsuLF1cXGQrKT9TKT8pPz8kLztcbi8vIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MTgxLzE1NTAxNTVcbi8vIG9sZCB2ZXJzaW9uOiB0b28gc2xvdywgZGlkbid0IHN1cHBvcnQgdW5pY29kZVxuLy8gY29uc3QgZW1haWxSZWdleCA9IC9eKCgoW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQvaTtcbi8vb2xkIGVtYWlsIHJlZ2V4XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF0uLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKCg/IS0pKFtePD4oKVtcXF0uLDs6XFxzQFwiXStcXC4pK1tePD4oKVtcXF0uLDs6XFxzQFwiXXsxLH0pW14tPD4oKVtcXF0uLDs6XFxzQFwiXSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcWygoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcXSl8KFxcW0lQdjY6KChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKVxcXSl8KFtBLVphLXowLTldKFtBLVphLXowLTktXSpbQS1aYS16MC05XSkqKFxcLltBLVphLXpdezIsfSkrKSkkLztcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXpBLVowLTlcXC5cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC9cXD1cXD9cXF5cXF9cXGBcXHtcXHxcXH1cXH5cXC1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5jb25zdCBlbWFpbFJlZ2V4ID0gL14oPyFcXC4pKD8hLipcXC5cXC4pKFtBLVowLTlfJytcXC1cXC5dKilbQS1aMC05XystXUAoW0EtWjAtOV1bQS1aMC05XFwtXSpcXC4pK1tBLVpdezIsfSQvaTtcbi8vIGNvbnN0IGVtYWlsUmVnZXggPVxuLy8gICAvXlthLXowLTkuISMkJSZcdTIwMTkqKy89P15fYHt8fX4tXStAW2EtejAtOS1dKyg/OlxcLlthLXowLTlcXC1dKykqJC9pO1xuLy8gZnJvbSBodHRwczovL3RoZWtldmluc2NvdHQuY29tL2Vtb2ppcy1pbi1qYXZhc2NyaXB0LyN3cml0aW5nLWEtcmVndWxhci1leHByZXNzaW9uXG5jb25zdCBfZW1vamlSZWdleCA9IGBeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJGA7XG5sZXQgZW1vamlSZWdleDtcbi8vIGZhc3Rlciwgc2ltcGxlciwgc2FmZXJcbmNvbnN0IGlwdjRSZWdleCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC87XG5jb25zdCBpcHY0Q2lkclJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC8oM1swLTJdfFsxMl0/WzAtOV0pJC87XG4vLyBjb25zdCBpcHY2UmVnZXggPVxuLy8gL14oKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpJC87XG5jb25zdCBpcHY2UmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSkkLztcbmNvbnN0IGlwdjZDaWRyUmVnZXggPSAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvO1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzg2MDM5Mi9kZXRlcm1pbmUtaWYtc3RyaW5nLWlzLWluLWJhc2U2NC11c2luZy1qYXZhc2NyaXB0XG5jb25zdCBiYXNlNjRSZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbi8vIGh0dHBzOi8vYmFzZTY0Lmd1cnUvc3RhbmRhcmRzL2Jhc2U2NHVybFxuY29uc3QgYmFzZTY0dXJsUmVnZXggPSAvXihbMC05YS16QS1aLV9dezR9KSooKFswLTlhLXpBLVotX117Mn0oPT0pPyl8KFswLTlhLXpBLVotX117M30oPSk/KSk/JC87XG4vLyBzaW1wbGVcbi8vIGNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGBcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfWA7XG4vLyBubyBsZWFwIHllYXIgdmFsaWRhdGlvblxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LSgoMFsxMzU3OF18MTB8MTIpLTMxfCgwWzEzLTldfDFbMC0yXSktMzB8KDBbMS05XXwxWzAtMl0pLSgwWzEtOV18MVxcXFxkfDJcXFxcZCkpYDtcbi8vIHdpdGggbGVhcCB5ZWFyIHZhbGlkYXRpb25cbmNvbnN0IGRhdGVSZWdleFNvdXJjZSA9IGAoKFxcXFxkXFxcXGRbMjQ2OF1bMDQ4XXxcXFxcZFxcXFxkWzEzNTc5XVsyNl18XFxcXGRcXFxcZDBbNDhdfFswMjQ2OF1bMDQ4XTAwfFsxMzU3OV1bMjZdMDApLTAyLTI5fFxcXFxkezR9LSgoMFsxMzU3OF18MVswMl0pLSgwWzEtOV18WzEyXVxcXFxkfDNbMDFdKXwoMFs0NjldfDExKS0oMFsxLTldfFsxMl1cXFxcZHwzMCl8KDAyKS0oMFsxLTldfDFcXFxcZHwyWzAtOF0pKSlgO1xuY29uc3QgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7ZGF0ZVJlZ2V4U291cmNlfSRgKTtcbmZ1bmN0aW9uIHRpbWVSZWdleFNvdXJjZShhcmdzKSB7XG4gICAgbGV0IHNlY29uZHNSZWdleFNvdXJjZSA9IGBbMC01XVxcXFxkYDtcbiAgICBpZiAoYXJncy5wcmVjaXNpb24pIHtcbiAgICAgICAgc2Vjb25kc1JlZ2V4U291cmNlID0gYCR7c2Vjb25kc1JlZ2V4U291cmNlfVxcXFwuXFxcXGR7JHthcmdzLnByZWNpc2lvbn19YDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5wcmVjaXNpb24gPT0gbnVsbCkge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9KFxcXFwuXFxcXGQrKT9gO1xuICAgIH1cbiAgICBjb25zdCBzZWNvbmRzUXVhbnRpZmllciA9IGFyZ3MucHJlY2lzaW9uID8gXCIrXCIgOiBcIj9cIjsgLy8gcmVxdWlyZSBzZWNvbmRzIGlmIHByZWNpc2lvbiBpcyBub256ZXJvXG4gICAgcmV0dXJuIGAoWzAxXVxcXFxkfDJbMC0zXSk6WzAtNV1cXFxcZCg6JHtzZWNvbmRzUmVnZXhTb3VyY2V9KSR7c2Vjb25kc1F1YW50aWZpZXJ9YDtcbn1cbmZ1bmN0aW9uIHRpbWVSZWdleChhcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RpbWVSZWdleFNvdXJjZShhcmdzKX0kYCk7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNDMyMzFcbmV4cG9ydCBmdW5jdGlvbiBkYXRldGltZVJlZ2V4KGFyZ3MpIHtcbiAgICBsZXQgcmVnZXggPSBgJHtkYXRlUmVnZXhTb3VyY2V9VCR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfWA7XG4gICAgY29uc3Qgb3B0cyA9IFtdO1xuICAgIG9wdHMucHVzaChhcmdzLmxvY2FsID8gYFo/YCA6IGBaYCk7XG4gICAgaWYgKGFyZ3Mub2Zmc2V0KVxuICAgICAgICBvcHRzLnB1c2goYChbKy1dXFxcXGR7Mn06P1xcXFxkezJ9KWApO1xuICAgIHJlZ2V4ID0gYCR7cmVnZXh9KCR7b3B0cy5qb2luKFwifFwiKX0pYDtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApO1xufVxuZnVuY3Rpb24gaXNWYWxpZElQKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY2XCIgfHwgIXZlcnNpb24pICYmIGlwdjZSZWdleC50ZXN0KGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNWYWxpZEpXVChqd3QsIGFsZykge1xuICAgIGlmICghand0UmVnZXgudGVzdChqd3QpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2hlYWRlcl0gPSBqd3Quc3BsaXQoXCIuXCIpO1xuICAgICAgICBpZiAoIWhlYWRlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gQ29udmVydCBiYXNlNjR1cmwgdG8gYmFzZTY0XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGhlYWRlclxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgXCIrXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXy9nLCBcIi9cIilcbiAgICAgICAgICAgIC5wYWRFbmQoaGVhZGVyLmxlbmd0aCArICgoNCAtIChoZWFkZXIubGVuZ3RoICUgNCkpICUgNCksIFwiPVwiKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBkZWNvZGVkID0gSlNPTi5wYXJzZShhdG9iKGJhc2U2NCkpO1xuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQgIT09IFwib2JqZWN0XCIgfHwgZGVjb2RlZCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFwidHlwXCIgaW4gZGVjb2RlZCAmJiBkZWNvZGVkPy50eXAgIT09IFwiSldUXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghZGVjb2RlZC5hbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhbGcgJiYgZGVjb2RlZC5hbGcgIT09IGFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRDaWRyKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMKGlucHV0LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sucmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzdWx0ID0gY2hlY2sucmVnZXgudGVzdChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidHJpbVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpbmNsdWRlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLmluY2x1ZGVzKGNoZWNrLnZhbHVlLCBjaGVjay5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBpbmNsdWRlczogY2hlY2sudmFsdWUsIHBvc2l0aW9uOiBjaGVjay5wb3NpdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidG9Mb3dlckNhc2VcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvVXBwZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJzdGFydHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuc3RhcnRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBzdGFydHNXaXRoOiBjaGVjay52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW5kc1dpdGhcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5lbmRzV2l0aChjaGVjay52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogeyBlbmRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGV0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGRhdGVSZWdleDtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHRpbWVSZWdleChjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZHVyYXRpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICghZHVyYXRpb25SZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImlwXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRJUChpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJqd3RcIikge1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEpXVChpbnB1dC5kYXRhLCBjaGVjay5hbGcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiand0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjaWRyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRDaWRyKGlucHV0LmRhdGEsIGNoZWNrLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiY2lkclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJiYXNlNjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NHVybFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjR1cmxSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0dXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIF9yZWdleChyZWdleCwgdmFsaWRhdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZpbmVtZW50KChkYXRhKSA9PiByZWdleC50ZXN0KGRhdGEpLCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLFxuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtYWlsKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbWFpbFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVybChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXJsXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgZW1vamkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImVtb2ppXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgdXVpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwidXVpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIG5hbm9pZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwibmFub2lkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgY3VpZChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQyKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjdWlkMlwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHVsaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVsaWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImJhc2U2NFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGJhc2U2NHVybChtZXNzYWdlKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgand0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJqd3RcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBpcChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiaXBcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnMpIH0pO1xuICAgIH1cbiAgICBjaWRyKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJjaWRyXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgZGF0ZXRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIG9wdGlvbnM/LnByZWNpc2lvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zPy5wcmVjaXNpb24sXG4gICAgICAgICAgICBvZmZzZXQ6IG9wdGlvbnM/Lm9mZnNldCA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsOiBvcHRpb25zPy5sb2NhbCA/PyBmYWxzZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImRhdGVcIiwgbWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGltZShvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInRpbWVcIixcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHlwZW9mIG9wdGlvbnM/LnByZWNpc2lvbiA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBvcHRpb25zPy5wcmVjaXNpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkdXJhdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZHVyYXRpb25cIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICByZWdleChyZWdleCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJyZWdleFwiLFxuICAgICAgICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5jbHVkZXModmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW5jbHVkZXNcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBvcHRpb25zPy5wb3NpdGlvbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zPy5tZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0c1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwic3RhcnRzV2l0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW5kc1dpdGgodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZW5kc1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5MZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogbWluTGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiBtYXhMZW5ndGgsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImxlbmd0aFwiLFxuICAgICAgICAgICAgdmFsdWU6IGxlbixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVxdWl2YWxlbnQgdG8gYC5taW4oMSlgXG4gICAgICovXG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgdHJpbSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRyaW1cIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvTG93ZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9Mb3dlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvVXBwZXJDYXNlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCB7IGtpbmQ6IFwidG9VcHBlckNhc2VcIiB9XSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBpc0RhdGV0aW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGV0aW1lXCIpO1xuICAgIH1cbiAgICBnZXQgaXNEYXRlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImRhdGVcIik7XG4gICAgfVxuICAgIGdldCBpc1RpbWUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZHVyYXRpb25cIik7XG4gICAgfVxuICAgIGdldCBpc0VtYWlsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImVtYWlsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVUkwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXJsXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbW9qaSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbW9qaVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVVJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1dWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNOQU5PSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwibmFub2lkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWRcIik7XG4gICAgfVxuICAgIGdldCBpc0NVSUQyKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImN1aWQyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNVTElEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVsaWRcIik7XG4gICAgfVxuICAgIGdldCBpc0lQKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImlwXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDSURSKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImNpZHJcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjRcIik7XG4gICAgfVxuICAgIGdldCBpc0Jhc2U2NHVybCgpIHtcbiAgICAgICAgLy8gYmFzZTY0dXJsIGVuY29kaW5nIGlzIGEgbW9kaWZpY2F0aW9uIG9mIGJhc2U2NCB0aGF0IGNhbiBzYWZlbHkgYmUgdXNlZCBpbiBVUkxzIGFuZCBmaWxlbmFtZXNcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJiYXNlNjR1cmxcIik7XG4gICAgfVxuICAgIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heExlbmd0aCgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZFN0cmluZy5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZyxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSA/PyBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NjY0ODQvd2h5LWRvZXMtbW9kdWx1cy1vcGVyYXRvci1yZXR1cm4tZnJhY3Rpb25hbC1udW1iZXItaW4tamF2YXNjcmlwdC8zMTcxMTAzNCMzMTcxMTAzNFxuZnVuY3Rpb24gZmxvYXRTYWZlUmVtYWluZGVyKHZhbCwgc3RlcCkge1xuICAgIGNvbnN0IHZhbERlY0NvdW50ID0gKHZhbC50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGg7XG4gICAgY29uc3Qgc3RlcERlY0NvdW50ID0gKHN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IGRlY0NvdW50ID0gdmFsRGVjQ291bnQgPiBzdGVwRGVjQ291bnQgPyB2YWxEZWNDb3VudCA6IHN0ZXBEZWNDb3VudDtcbiAgICBjb25zdCB2YWxJbnQgPSBOdW1iZXIucGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICBjb25zdCBzdGVwSW50ID0gTnVtYmVyLnBhcnNlSW50KHN0ZXAudG9GaXhlZChkZWNDb3VudCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xuICAgIHJldHVybiAodmFsSW50ICUgc3RlcEludCkgLyAxMCAqKiBkZWNDb3VudDtcbn1cbmV4cG9ydCBjbGFzcyBab2ROdW1iZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5tdWx0aXBsZU9mO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBOdW1iZXIoaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWwuaXNJbnRlZ2VyKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlZDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmxvYXRTYWZlUmVtYWluZGVyKGlucHV0LmRhdGEsIGNoZWNrLnZhbHVlKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVPZjogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJmaW5pdGVcIikge1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJpbnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ucG9zaXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5pdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJmaW5pdGVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNhZmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSkuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluVmFsdWUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgZ2V0IG1heFZhbHVlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGdldCBpc0ludCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpbnRcIiB8fCAoY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIgJiYgdXRpbC5pc0ludGVnZXIoY2gudmFsdWUpKSk7XG4gICAgfVxuICAgIGdldCBpc0Zpbml0ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcImZpbml0ZVwiIHx8IGNoLmtpbmQgPT09IFwiaW50XCIgfHwgY2gua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG1pbikgJiYgTnVtYmVyLmlzRmluaXRlKG1heCk7XG4gICAgfVxufVxuWm9kTnVtYmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bWJlcih7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVtYmVyLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEJpZ0ludCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbiA9IHRoaXMuZ3RlO1xuICAgICAgICB0aGlzLm1heCA9IHRoaXMubHRlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJpZ0ludChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW52YWxpZElucHV0KGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJpZ2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFBhcnNlU3RhdHVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgY2hlY2sgb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoZWNrLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPCBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPD0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJpZ2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IGNoZWNrLmluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY2hlY2suaW5jbHVzaXZlID8gaW5wdXQuZGF0YSA+IGNoZWNrLnZhbHVlIDogaW5wdXQuZGF0YSA+PSBjaGVjay52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9vQmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtdWx0aXBsZU9mXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YSAlIGNoZWNrLnZhbHVlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfZ2V0SW52YWxpZElucHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYmlnaW50LFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxuICAgIGd0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZ3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2V0TGltaXQoa2luZCwgdmFsdWUsIGluY2x1c2l2ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuY2hlY2tzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbm9ubmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBCaWdJbnQoMCksXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtdWx0aXBsZU9mKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbn1cblpvZEJpZ0ludC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludCxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSA/PyBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RCb29sZWFuIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gQm9vbGVhbihpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYm9vbGVhbixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RCb29sZWFuLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEJvb2xlYW4oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJvb2xlYW4sXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRGF0ZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IG5ldyBEYXRlKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5kYXRlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihpbnB1dC5kYXRhLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2RhdGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEuZ2V0VGltZSgpIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA+IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoaW5wdXQuZGF0YS5nZXRUaW1lKCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIGNoZWNrXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1pbihtaW5EYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heERhdGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4RGF0ZS5nZXRUaW1lKCksXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgbWluRGF0ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluICE9IG51bGwgPyBuZXcgRGF0ZShtaW4pIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0IG1heERhdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heCAhPSBudWxsID8gbmV3IERhdGUobWF4KSA6IG51bGw7XG4gICAgfVxufVxuWm9kRGF0ZS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REYXRlKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REYXRlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFN5bWJvbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnN5bWJvbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kU3ltYm9sLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFN5bWJvbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3ltYm9sLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVuZGVmaW5lZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS51bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVW5kZWZpbmVkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuZGVmaW5lZCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5kZWZpbmVkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE51bGwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5udWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bGwsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kTnVsbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdWxsKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEFueSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyB0byBwcmV2ZW50IGluc3RhbmNlcyBvZiBvdGhlciBjbGFzc2VzIGZyb20gZXh0ZW5kaW5nIFpvZEFueS4gdGhpcyBjYXVzZXMgaXNzdWVzIHdpdGggY2F0Y2hhbGwgaW4gWm9kT2JqZWN0LlxuICAgICAgICB0aGlzLl9hbnkgPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZEFueS5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RBbnkoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEFueSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmtub3duIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIHRoaXMuX3Vua25vd24gPSB0cnVlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVua25vd24uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kVW5rbm93bih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5rbm93bixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROZXZlciBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm5ldmVyLFxuICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgfVxufVxuWm9kTmV2ZXIuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmV2ZXIoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE5ldmVyLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFZvaWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudm9pZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RWb2lkLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFZvaWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFZvaWQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQXJyYXkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHgsIHN0YXR1cyB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGVmID0gdGhpcy5fZGVmO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b29CaWcgPSBjdHguZGF0YS5sZW5ndGggPiBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b29TbWFsbCA9IGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5leGFjdExlbmd0aC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdG9vQmlnID8gWm9kSXNzdWVDb2RlLnRvb19iaWcgOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiAodG9vU21hbGwgPyBkZWYuZXhhY3RMZW5ndGgudmFsdWUgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiAodG9vQmlnID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWYuZXhhY3RMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1pbkxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA8IGRlZi5taW5MZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogZGVmLm1pbkxlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pbkxlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWYubWF4TGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoID4gZGVmLm1heExlbmd0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogZGVmLm1heExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heExlbmd0aC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlQXN5bmMobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSk7XG4gICAgICAgICAgICB9KSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLmN0eC5kYXRhXS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZWYudHlwZS5fcGFyc2VTeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHQpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7IHZhbHVlOiBtaW5MZW5ndGgsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heExlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogbWF4TGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxlbmd0aChsZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBleGFjdExlbmd0aDogeyB2YWx1ZTogbGVuLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblpvZEFycmF5LmNyZWF0ZSA9IChzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIG1pbkxlbmd0aDogbnVsbCxcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxuICAgICAgICBleGFjdExlbmd0aDogbnVsbCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBcnJheSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hLnNoYXBlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHNjaGVtYS5zaGFwZVtrZXldO1xuICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IFpvZE9wdGlvbmFsLmNyZWF0ZShkZWVwUGFydGlhbGlmeShmaWVsZFNjaGVtYSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnNjaGVtYS5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHR5cGU6IGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS5lbGVtZW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZE51bGxhYmxlKSB7XG4gICAgICAgIHJldHVybiBab2ROdWxsYWJsZS5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoc2NoZW1hLnVud3JhcCgpKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZFR1cGxlKSB7XG4gICAgICAgIHJldHVybiBab2RUdXBsZS5jcmVhdGUoc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSkgPT4gZGVlcFBhcnRpYWxpZnkoaXRlbSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZE9iamVjdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9jYWNoZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgSW4gbW9zdCBjYXNlcywgdGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIC0gdW5rbm93biBwcm9wZXJ0aWVzIGFyZSBub3cgc2lsZW50bHkgc3RyaXBwZWQuXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIHBhc3MgdGhyb3VnaCB1bmtub3duIHByb3BlcnRpZXMsIHVzZSBgLnBhc3N0aHJvdWdoKClgIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5vbnN0cmljdCA9IHRoaXMucGFzc3Rocm91Z2g7XG4gICAgICAgIC8vIGV4dGVuZDxcbiAgICAgICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZSxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9vdXRwdXRcIl1cbiAgICAgICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT4sXG4gICAgICAgIC8vICAgTmV3SW5wdXQgZXh0ZW5kcyB1dGlsLmZsYXR0ZW48e1xuICAgICAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX2lucHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAgICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAgICAgLy8gICB9PlxuICAgICAgICAvLyA+KFxuICAgICAgICAvLyAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAgICAgLy8gICBleHRlbmRTaGFwZTxULCBBdWdtZW50YXRpb24+LFxuICAgICAgICAvLyAgIFVua25vd25LZXlzLFxuICAgICAgICAvLyAgIENhdGNoYWxsLFxuICAgICAgICAvLyAgIE5ld091dHB1dCxcbiAgICAgICAgLy8gICBOZXdJbnB1dFxuICAgICAgICAvLyA+IHtcbiAgICAgICAgLy8gICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIC8vICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgIC8vICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgLy8gICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgIC8vICAgICAgIC4uLmF1Z21lbnRhdGlvbixcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgVXNlIGAuZXh0ZW5kYCBpbnN0ZWFkXG4gICAgICAgICAqICAqL1xuICAgICAgICB0aGlzLmF1Z21lbnQgPSB0aGlzLmV4dGVuZDtcbiAgICB9XG4gICAgX2dldENhY2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlZCAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gICAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgICAgIGNvbnN0IGtleXMgPSB1dGlsLm9iamVjdEtleXMoc2hhcGUpO1xuICAgICAgICB0aGlzLl9jYWNoZWQgPSB7IHNoYXBlLCBrZXlzIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBrZXlzOiBzaGFwZUtleXMgfSA9IHRoaXMuX2dldENhY2hlZCgpO1xuICAgICAgICBjb25zdCBleHRyYUtleXMgPSBbXTtcbiAgICAgICAgaWYgKCEodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIgJiYgdGhpcy5fZGVmLnVua25vd25LZXlzID09PSBcInN0cmlwXCIpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghc2hhcGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygc2hhcGVLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWxpZGF0b3IgPSBzaGFwZVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVZhbGlkYXRvci5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBrZXkgaW4gY3R4LmRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGVmLmNhdGNoYWxsIGluc3RhbmNlb2YgWm9kTmV2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdGhpcy5fZGVmLnVua25vd25LZXlzO1xuICAgICAgICAgICAgaWYgKHVua25vd25LZXlzID09PSBcInBhc3N0aHJvdWdoXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBleHRyYUtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZTogY3R4LmRhdGFba2V5XSB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChleHRyYUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6IGV4dHJhS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHVua25vd25LZXlzID09PSBcInN0cmlwXCIpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgWm9kT2JqZWN0IGVycm9yOiBpbnZhbGlkIHVua25vd25LZXlzIHZhbHVlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcnVuIGNhdGNoYWxsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGNhdGNoYWxsID0gdGhpcy5fZGVmLmNhdGNoYWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdHguZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBrZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGNoYWxsLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgdmFsdWUsIGN0eC5wYXRoLCBrZXkpIC8vLCBjdHguY2hpbGQoa2V5KSwgdmFsdWUsIGdldFBhcnNlZFR5cGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3luY1BhaXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2V0OiBwYWlyLmFsd2F5c1NldCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jUGFpcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChzeW5jUGFpcnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2hhcGUoKTtcbiAgICB9XG4gICAgc3RyaWN0KG1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3JVdGlsLmVyclRvT2JqO1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgICAgIC4uLihtZXNzYWdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNYXA6IChpc3N1ZSwgY3R4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RXJyb3IgPSB0aGlzLl9kZWYuZXJyb3JNYXA/Lihpc3N1ZSwgY3R4KS5tZXNzYWdlID8/IGN0eC5kZWZhdWx0RXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29kZSA9PT0gXCJ1bnJlY29nbml6ZWRfa2V5c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKS5tZXNzYWdlID8/IGRlZmF1bHRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0cmlwKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFzc3Rocm91Z2goKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHVua25vd25LZXlzOiBcInBhc3N0aHJvdWdoXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zdCBBdWdtZW50RmFjdG9yeSA9XG4gICAgLy8gICA8RGVmIGV4dGVuZHMgWm9kT2JqZWN0RGVmPihkZWY6IERlZikgPT5cbiAgICAvLyAgIDxBdWdtZW50YXRpb24gZXh0ZW5kcyBab2RSYXdTaGFwZT4oXG4gICAgLy8gICAgIGF1Z21lbnRhdGlvbjogQXVnbWVudGF0aW9uXG4gICAgLy8gICApOiBab2RPYmplY3Q8XG4gICAgLy8gICAgIGV4dGVuZFNoYXBlPFJldHVyblR5cGU8RGVmW1wic2hhcGVcIl0+LCBBdWdtZW50YXRpb24+LFxuICAgIC8vICAgICBEZWZbXCJ1bmtub3duS2V5c1wiXSxcbiAgICAvLyAgICAgRGVmW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyAgID4gPT4ge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgLy8gICAgICAgLi4uZGVmLFxuICAgIC8vICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgIC8vICAgICAgICAgLi4uZGVmLnNoYXBlKCksXG4gICAgLy8gICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgIH0pIGFzIGFueTtcbiAgICAvLyAgIH07XG4gICAgZXh0ZW5kKGF1Z21lbnRhdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW9yIHRvIHpvZEAxLjAuMTIgdGhlcmUgd2FzIGEgYnVnIGluIHRoZVxuICAgICAqIGluZmVycmVkIHR5cGUgb2YgbWVyZ2VkIG9iamVjdHMuIFBsZWFzZVxuICAgICAqIHVwZ3JhZGUgaWYgeW91IGFyZSBleHBlcmllbmNpbmcgaXNzdWVzLlxuICAgICAqL1xuICAgIG1lcmdlKG1lcmdpbmcpIHtcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgICAgIC4uLm1lcmdpbmcuX2RlZi5zaGFwZSgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuICAgIC8vIG1lcmdlPFxuICAgIC8vICAgSW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3QsXG4gICAgLy8gICBBdWdtZW50YXRpb24gZXh0ZW5kcyBJbmNvbWluZ1tcInNoYXBlXCJdLFxuICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBPdXRwdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgLy8gICAgICAgOiBrIGV4dGVuZHMga2V5b2YgT3V0cHV0XG4gICAgLy8gICAgICAgPyBPdXRwdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMge1xuICAgIC8vICAgICBbayBpbiBrZXlvZiBBdWdtZW50YXRpb24gfCBrZXlvZiBJbnB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIElucHV0XG4gICAgLy8gICAgICAgPyBJbnB1dFtrXVxuICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgLy8gICB9XG4gICAgLy8gPihcbiAgICAvLyAgIG1lcmdpbmc6IEluY29taW5nXG4gICAgLy8gKTogWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXSxcbiAgICAvLyAgIE5ld091dHB1dCxcbiAgICAvLyAgIE5ld0lucHV0XG4gICAgLy8gPiB7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgc2V0S2V5KGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1Z21lbnQoeyBba2V5XTogc2NoZW1hIH0pO1xuICAgIH1cbiAgICAvLyBtZXJnZTxJbmNvbWluZyBleHRlbmRzIEFueVpvZE9iamVjdD4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IC8vWm9kT2JqZWN0PFQgJiBJbmNvbWluZ1tcIl9zaGFwZVwiXSwgVW5rbm93bktleXMsIENhdGNoYWxsPiA9IChtZXJnaW5nKSA9PiB7XG4gICAgLy8gWm9kT2JqZWN0PFxuICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgUmV0dXJuVHlwZTxJbmNvbWluZ1tcIl9kZWZcIl1bXCJzaGFwZVwiXT4+LFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICBJbmNvbWluZ1tcIl9kZWZcIl1bXCJjYXRjaGFsbFwiXVxuICAgIC8vID4ge1xuICAgIC8vICAgLy8gY29uc3QgbWVyZ2VkU2hhcGUgPSBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKFxuICAgIC8vICAgLy8gICB0aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAvLyAgIC8vICAgbWVyZ2luZy5fZGVmLnNoYXBlKClcbiAgICAvLyAgIC8vICk7XG4gICAgLy8gICBjb25zdCBtZXJnZWQ6IGFueSA9IG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICB1bmtub3duS2V5czogbWVyZ2luZy5fZGVmLnVua25vd25LZXlzLFxuICAgIC8vICAgICBjYXRjaGFsbDogbWVyZ2luZy5fZGVmLmNhdGNoYWxsLFxuICAgIC8vICAgICBzaGFwZTogKCkgPT5cbiAgICAvLyAgICAgICBvYmplY3RVdGlsLm1lcmdlU2hhcGVzKHRoaXMuX2RlZi5zaGFwZSgpLCBtZXJnaW5nLl9kZWYuc2hhcGUoKSksXG4gICAgLy8gICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgIC8vICAgfSkgYXMgYW55O1xuICAgIC8vICAgcmV0dXJuIG1lcmdlZDtcbiAgICAvLyB9XG4gICAgY2F0Y2hhbGwoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2F0Y2hhbGw6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGljayhtYXNrKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyhtYXNrKSkge1xuICAgICAgICAgICAgaWYgKG1hc2tba2V5XSAmJiB0aGlzLnNoYXBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzaGFwZVtrZXldID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9taXQobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGlmICghbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGRlZXBQYXJ0aWFsKCkge1xuICAgICAgICByZXR1cm4gZGVlcFBhcnRpYWxpZnkodGhpcyk7XG4gICAgfVxuICAgIHBhcnRpYWwobWFzaykge1xuICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXModGhpcy5zaGFwZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBmaWVsZFNjaGVtYS5vcHRpb25hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVpcmVkKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBpZiAobWFzayAmJiAhbWFza1trZXldKSB7XG4gICAgICAgICAgICAgICAgbmV3U2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gdGhpcy5zaGFwZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZCA9IGZpZWxkU2NoZW1hO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdGaWVsZCBpbnN0YW5jZW9mIFpvZE9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkID0gbmV3RmllbGQuX2RlZi5pbm5lclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBuZXdGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlvZigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVpvZEVudW0odXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKTtcbiAgICB9XG59XG5ab2RPYmplY3QuY3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5zdHJpY3RDcmVhdGUgPSAoc2hhcGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpY3RcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZE9iamVjdC5sYXp5Y3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlLFxuICAgICAgICB1bmtub3duS2V5czogXCJzdHJpcFwiLFxuICAgICAgICBjYXRjaGFsbDogWm9kTmV2ZXIuY3JlYXRlKCksXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3VsdHMocmVzdWx0cykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZpcnN0IGlzc3VlLWZyZWUgdmFsaWRhdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGlzc3VlcyBmcm9tIGRpcnR5IG9wdGlvblxuICAgICAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLnJlc3VsdC5jdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiBpbnZhbGlkXG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IHJlc3VsdHMubWFwKChyZXN1bHQpID0+IG5ldyBab2RFcnJvcihyZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wdGlvbnMubWFwKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN0eC5jb21tb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGF3YWl0IG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGlsZEN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGN0eDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKS50aGVuKGhhbmRsZVJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXNzdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIgJiYgIWRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcnR5ID0geyByZXN1bHQsIGN0eDogY2hpbGRDdHggfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3Vlcy5wdXNoKGNoaWxkQ3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgICAgIGN0eC5jb21tb24uaXNzdWVzLnB1c2goLi4uZGlydHkuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJ0eS5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1bmlvbkVycm9ycyA9IGlzc3Vlcy5tYXAoKGlzc3VlcykgPT4gbmV3IFpvZEVycm9yKGlzc3VlcykpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdW5pb24sXG4gICAgICAgICAgICAgICAgdW5pb25FcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxufVxuWm9kVW5pb24uY3JlYXRlID0gKHR5cGVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVuaW9uKHtcbiAgICAgICAgb3B0aW9uczogdHlwZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVW5pb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgWm9kRGlzY3JpbWluYXRlZFVuaW9uICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgZ2V0RGlzY3JpbWluYXRvciA9ICh0eXBlKSA9PiB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMYXp5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2NoZW1hKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEVmZmVjdHMpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5pbm5lclR5cGUoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RMaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBbdHlwZS52YWx1ZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFbnVtKSB7XG4gICAgICAgIHJldHVybiB0eXBlLm9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROYXRpdmVFbnVtKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBiYW4vYmFuXG4gICAgICAgIHJldHVybiB1dGlsLm9iamVjdFZhbHVlcyh0eXBlLmVudW0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLl9kZWYuaW5uZXJUeXBlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsKSB7XG4gICAgICAgIHJldHVybiBbbnVsbF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgLi4uZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gW251bGwsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQnJhbmRlZCkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZFJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kQ2F0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufTtcbmV4cG9ydCBjbGFzcyBab2REaXNjcmltaW5hdGVkVW5pb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvciA9IHRoaXMuZGlzY3JpbWluYXRvcjtcbiAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlID0gY3R4LmRhdGFbZGlzY3JpbWluYXRvcl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9uc01hcC5nZXQoZGlzY3JpbWluYXRvclZhbHVlKTtcbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNNYXAua2V5cygpKSxcbiAgICAgICAgICAgICAgICBwYXRoOiBbZGlzY3JpbWluYXRvcl0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmRpc2NyaW1pbmF0b3I7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zTWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm9wdGlvbnNNYXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZGlzY3JpbWluYXRlZCB1bmlvbiBzY2hlbWEuIEl0cyBiZWhhdmlvdXIgaXMgdmVyeSBzaW1pbGFyIHRvIHRoYXQgb2YgdGhlIG5vcm1hbCB6LnVuaW9uKCkgY29uc3RydWN0b3IuXG4gICAgICogSG93ZXZlciwgaXQgb25seSBhbGxvd3MgYSB1bmlvbiBvZiBvYmplY3RzLCBhbGwgb2Ygd2hpY2ggbmVlZCB0byBzaGFyZSBhIGRpc2NyaW1pbmF0b3IgcHJvcGVydHkuIFRoaXMgcHJvcGVydHkgbXVzdFxuICAgICAqIGhhdmUgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSB1bmlvbi5cbiAgICAgKiBAcGFyYW0gZGlzY3JpbWluYXRvciB0aGUgbmFtZSBvZiB0aGUgZGlzY3JpbWluYXRvciBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB0eXBlcyBhbiBhcnJheSBvZiBvYmplY3Qgc2NoZW1hc1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRpc2NyaW1pbmF0b3IsIG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgICAvLyBHZXQgYWxsIHRoZSB2YWxpZCBkaXNjcmltaW5hdG9yIHZhbHVlc1xuICAgICAgICBjb25zdCBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGlzY3JpbWluYXRvclZhbHVlcyA9IGdldERpc2NyaW1pbmF0b3IodHlwZS5zaGFwZVtkaXNjcmltaW5hdG9yXSk7XG4gICAgICAgICAgICBpZiAoIWRpc2NyaW1pbmF0b3JWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGRpc2NyaW1pbmF0b3IgdmFsdWUgZm9yIGtleSBcXGAke2Rpc2NyaW1pbmF0b3J9XFxgIGNvdWxkIG5vdCBiZSBleHRyYWN0ZWQgZnJvbSBhbGwgc2NoZW1hIG9wdGlvbnNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZGlzY3JpbWluYXRvclZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaXNjcmltaW5hdG9yIHByb3BlcnR5ICR7U3RyaW5nKGRpc2NyaW1pbmF0b3IpfSBoYXMgZHVwbGljYXRlIHZhbHVlICR7U3RyaW5nKHZhbHVlKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc01hcC5zZXQodmFsdWUsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGlzY3JpbWluYXRlZFVuaW9uKHtcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGlzY3JpbWluYXRlZFVuaW9uLFxuICAgICAgICAgICAgZGlzY3JpbWluYXRvcixcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zTWFwLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtZXJnZVZhbHVlcyhhLCBiKSB7XG4gICAgY29uc3QgYVR5cGUgPSBnZXRQYXJzZWRUeXBlKGEpO1xuICAgIGNvbnN0IGJUeXBlID0gZ2V0UGFyc2VkVHlwZShiKTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogYSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5vYmplY3QgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGJLZXlzID0gdXRpbC5vYmplY3RLZXlzKGIpO1xuICAgICAgICBjb25zdCBzaGFyZWRLZXlzID0gdXRpbC5vYmplY3RLZXlzKGEpLmZpbHRlcigoa2V5KSA9PiBiS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0geyAuLi5hLCAuLi5iIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXJlZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRWYWx1ZS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBzaGFyZWRWYWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdPYmogfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQSA9IGFbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgaXRlbUIgPSBiW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZFZhbHVlID0gbWVyZ2VWYWx1ZXMoaXRlbUEsIGl0ZW1CKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2hhcmVkVmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IG5ld0FycmF5IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiYgYlR5cGUgPT09IFpvZFBhcnNlZFR5cGUuZGF0ZSAmJiArYSA9PT0gK2IpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RJbnRlcnNlY3Rpb24gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgaGFuZGxlUGFyc2VkID0gKHBhcnNlZExlZnQsIHBhcnNlZFJpZ2h0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBYm9ydGVkKHBhcnNlZExlZnQpIHx8IGlzQWJvcnRlZChwYXJzZWRSaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlVmFsdWVzKHBhcnNlZExlZnQudmFsdWUsIHBhcnNlZFJpZ2h0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghbWVyZ2VkLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RpcnR5KHBhcnNlZExlZnQpIHx8IGlzRGlydHkocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IG1lcmdlZC5kYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYucmlnaHQuX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSkudGhlbigoW2xlZnQsIHJpZ2h0XSkgPT4gaGFuZGxlUGFyc2VkKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUGFyc2VkKHRoaXMuX2RlZi5sZWZ0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSksIHRoaXMuX2RlZi5yaWdodC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblpvZEludGVyc2VjdGlvbi5jcmVhdGUgPSAobGVmdCwgcmlnaHQsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEludGVyc2VjdGlvbixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vIHR5cGUgWm9kVHVwbGVJdGVtcyA9IFtab2RUeXBlQW55LCAuLi5ab2RUeXBlQW55W11dO1xuZXhwb3J0IGNsYXNzIFpvZFR1cGxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5hcnJheSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5hcnJheSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3QgPSB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgaWYgKCFyZXN0ICYmIGN0eC5kYXRhLmxlbmd0aCA+IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMuX2RlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gWy4uLmN0eC5kYXRhXVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLl9kZWYuaXRlbXNbaXRlbUluZGV4XSB8fCB0aGlzLl9kZWYucmVzdDtcbiAgICAgICAgICAgIGlmICghc2NoZW1hKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpdGVtSW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+ICEheCk7IC8vIGZpbHRlciBudWxsc1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlQXJyYXkoc3RhdHVzLCBpdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLml0ZW1zO1xuICAgIH1cbiAgICByZXN0KHJlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICByZXN0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5ab2RUdXBsZS5jcmVhdGUgPSAoc2NoZW1hcywgcGFyYW1zKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgb2Ygc2NoZW1hcyB0byB6LnR1cGxlKFsgLi4uIF0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFpvZFR1cGxlKHtcbiAgICAgICAgaXRlbXM6IHNjaGVtYXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGUsXG4gICAgICAgIHJlc3Q6IG51bGwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kUmVjb3JkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgZ2V0IGtleVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgIH1cbiAgICBnZXQgdmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5vYmplY3QsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWlycyA9IFtdO1xuICAgICAgICBjb25zdCBrZXlUeXBlID0gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGN0eC5kYXRhKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgY3R4LmRhdGFba2V5XSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdEFzeW5jKHN0YXR1cywgcGFpcnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoZmlyc3QsIHNlY29uZCwgdGhpcmQpIHtcbiAgICAgICAgaWYgKHNlY29uZCBpbnN0YW5jZW9mIFpvZFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgICAgICBrZXlUeXBlOiBmaXJzdCxcbiAgICAgICAgICAgICAgICB2YWx1ZVR5cGU6IHNlY29uZCxcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXJkKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWm9kUmVjb3JkKHtcbiAgICAgICAgICAgIGtleVR5cGU6IFpvZFN0cmluZy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZmlyc3QsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFJlY29yZCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMoc2Vjb25kKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZE1hcCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5tYXApIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubWFwLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBjb25zdCBwYWlycyA9IFsuLi5jdHguZGF0YS5lbnRyaWVzKCldLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBrZXksIGN0eC5wYXRoLCBbaW5kZXgsIFwia2V5XCJdKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwgW2luZGV4LCBcInZhbHVlXCJdKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImFib3J0ZWRcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbE1hcC5zZXQoa2V5LnZhbHVlLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsTWFwIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RNYXAuY3JlYXRlID0gKGtleVR5cGUsIHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RNYXAoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIGtleVR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTWFwLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFNldCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc2V0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnNldCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGRlZi5taW5TaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA8IGRlZi5taW5TaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5TaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1pblNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heFNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5zaXplID4gZGVmLm1heFNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhTaXplLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLm1heFNpemUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZVNldChlbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNldC5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHBhcnNlZFNldCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmN0eC5kYXRhLnZhbHVlcygpXS5tYXAoKGl0ZW0sIGkpID0+IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGl0ZW0sIGN0eC5wYXRoLCBpKSkpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGVsZW1lbnRzKS50aGVuKChlbGVtZW50cykgPT4gZmluYWxpemVTZXQoZWxlbWVudHMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZVNldChlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWluKG1pblNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWluU2l6ZTogeyB2YWx1ZTogbWluU2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXgobWF4U2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFNldCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhTaXplOiB7IHZhbHVlOiBtYXhTaXplLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpemUoc2l6ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oc2l6ZSwgbWVzc2FnZSkubWF4KHNpemUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RTZXQuY3JlYXRlID0gKHZhbHVlVHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICB2YWx1ZVR5cGUsXG4gICAgICAgIG1pblNpemU6IG51bGwsXG4gICAgICAgIG1heFNpemU6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU2V0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEZ1bmN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLmltcGxlbWVudDtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYWtlQXJnc0lzc3VlKGFyZ3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZUlzc3VlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhcmdzLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwczogW2N0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCBjdHguc2NoZW1hRXJyb3JNYXAsIGdldEVycm9yTWFwKCksIGRlZmF1bHRFcnJvck1hcF0uZmlsdGVyKCh4KSA9PiAhIXgpLFxuICAgICAgICAgICAgICAgIGlzc3VlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9hcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c0Vycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZVJldHVybnNJc3N1ZShyZXR1cm5zLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogcmV0dXJucyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgY3R4LnNjaGVtYUVycm9yTWFwLCBnZXRFcnJvck1hcCgpLCBkZWZhdWx0RXJyb3JNYXBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblR5cGVFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZXJyb3JNYXA6IGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwIH07XG4gICAgICAgIGNvbnN0IGZuID0gY3R4LmRhdGE7XG4gICAgICAgIGlmICh0aGlzLl9kZWYucmV0dXJucyBpbnN0YW5jZW9mIFpvZFByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhhc3luYyBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKFtdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRBcmdzID0gYXdhaXQgbWUuX2RlZi5hcmdzLnBhcnNlQXN5bmMoYXJncywgcGFyYW1zKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlQXJnc0lzc3VlKGFyZ3MsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IGF3YWl0IG1lLl9kZWYucmV0dXJucy5fZGVmLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQXN5bmMocmVzdWx0LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRJc3N1ZShtYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkUmV0dXJucztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gV291bGQgbG92ZSBhIHdheSB0byBhdm9pZCBkaXNhYmxpbmcgdGhpcyBydWxlLCBidXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gYW4gYWxpYXMgKHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHdhcyB3aGF0IGNhdXNlZCAyNjUxKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9LKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IG1lLl9kZWYuYXJncy5zYWZlUGFyc2UoYXJncywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZEFyZ3Muc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWm9kRXJyb3IoW21ha2VBcmdzSXNzdWUoYXJncywgcGFyc2VkQXJncy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5hcHBseShmbiwgdGhpcywgcGFyc2VkQXJncy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRSZXR1cm5zID0gbWUuX2RlZi5yZXR1cm5zLnNhZmVQYXJzZShyZXN1bHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSZXR1cm5zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlUmV0dXJuc0lzc3VlKHJlc3VsdCwgcGFyc2VkUmV0dXJucy5lcnJvcildKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuYXJncztcbiAgICB9XG4gICAgcmV0dXJuVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5yZXR1cm5zO1xuICAgIH1cbiAgICBhcmdzKC4uLml0ZW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgYXJnczogWm9kVHVwbGUuY3JlYXRlKGl0ZW1zKS5yZXN0KFpvZFVua25vd24uY3JlYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJucyhyZXR1cm5UeXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRnVuY3Rpb24oe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJuVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RyaWN0SW1wbGVtZW50KGZ1bmMpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRnVuYyA9IHRoaXMucGFyc2UoZnVuYyk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWRGdW5jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGFyZ3MsIHJldHVybnMsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IChhcmdzID8gYXJncyA6IFpvZFR1cGxlLmNyZWF0ZShbXSkucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSksXG4gICAgICAgICAgICByZXR1cm5zOiByZXR1cm5zIHx8IFpvZFVua25vd24uY3JlYXRlKCksXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEZ1bmN0aW9uLFxuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kTGF6eSBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgbGF6eVNjaGVtYSA9IHRoaXMuX2RlZi5nZXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIGxhenlTY2hlbWEuX3BhcnNlKHsgZGF0YTogY3R4LmRhdGEsIHBhdGg6IGN0eC5wYXRoLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICB9XG59XG5ab2RMYXp5LmNyZWF0ZSA9IChnZXR0ZXIsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTGF6eSh7XG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExhenksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTGl0ZXJhbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQuZGF0YSAhPT0gdGhpcy5fZGVmLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbCxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdGhpcy5fZGVmLnZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlO1xuICAgIH1cbn1cblpvZExpdGVyYWwuY3JlYXRlID0gKHZhbHVlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExpdGVyYWwoe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGl0ZXJhbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZVpvZEVudW0odmFsdWVzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZEVudW0oe1xuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNsYXNzIFpvZEVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogdXRpbC5qb2luVmFsdWVzKGV4cGVjdGVkVmFsdWVzKSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgU2V0KHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxuICAgIGdldCBlbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZ2V0IFZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBFbnVtKCkge1xuICAgICAgICBjb25zdCBlbnVtVmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuX2RlZi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGVudW1WYWx1ZXNbdmFsXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW51bVZhbHVlcztcbiAgICB9XG4gICAgZXh0cmFjdCh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodmFsdWVzLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBleGNsdWRlKHZhbHVlcywgbmV3RGVmID0gdGhpcy5fZGVmKSB7XG4gICAgICAgIHJldHVybiBab2RFbnVtLmNyZWF0ZSh0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+ICF2YWx1ZXMuaW5jbHVkZXMob3B0KSksIHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIC4uLm5ld0RlZixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kRW51bS5jcmVhdGUgPSBjcmVhdGVab2RFbnVtO1xuZXhwb3J0IGNsYXNzIFpvZE5hdGl2ZUVudW0gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRW51bVZhbHVlcyA9IHV0aWwuZ2V0VmFsaWRFbnVtVmFsdWVzKHRoaXMuX2RlZi52YWx1ZXMpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zdHJpbmcgJiYgY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IFNldCh1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZS5oYXMoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVmFsdWVzID0gdXRpbC5vYmplY3RWYWx1ZXMobmF0aXZlRW51bVZhbHVlcyk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfZW51bV92YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBleHBlY3RlZFZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZXM7XG4gICAgfVxufVxuWm9kTmF0aXZlRW51bS5jcmVhdGUgPSAodmFsdWVzLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hdGl2ZUVudW0oe1xuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYXRpdmVFbnVtLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFByb21pc2UgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSAmJiBjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5wcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5wcm9taXNlID8gY3R4LmRhdGEgOiBQcm9taXNlLnJlc29sdmUoY3R4LmRhdGEpO1xuICAgICAgICByZXR1cm4gT0socHJvbWlzaWZpZWQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLnBhcnNlQXN5bmMoZGF0YSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuWm9kUHJvbWlzZS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFByb21pc2Uoe1xuICAgICAgICB0eXBlOiBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUHJvbWlzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFZmZlY3RzIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgaW5uZXJUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgc291cmNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHNcbiAgICAgICAgICAgID8gdGhpcy5fZGVmLnNjaGVtYS5zb3VyY2VUeXBlKClcbiAgICAgICAgICAgIDogdGhpcy5fZGVmLnNjaGVtYTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IHRoaXMuX2RlZi5lZmZlY3QgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgY2hlY2tDdHggPSB7XG4gICAgICAgICAgICBhZGRJc3N1ZTogKGFyZykgPT4ge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwgYXJnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLmZhdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldCBwYXRoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHgucGF0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrQ3R4LmFkZElzc3VlID0gY2hlY2tDdHguYWRkSXNzdWUuYmluZChjaGVja0N0eCk7XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJwcmVwcm9jZXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGVmZmVjdC50cmFuc2Zvcm0oY3R4LmRhdGEsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9jZXNzZWQpLnRoZW4oYXN5bmMgKHByb2Nlc3NlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2Nlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMudmFsdWUgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicmVmaW5lbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlUmVmaW5lbWVudCA9IChhY2MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QucmVmaW5lbWVudChhY2MsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzeW5jIHJlZmluZW1lbnQgZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXIuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUgaXMgaWdub3JlZFxuICAgICAgICAgICAgICAgIGV4ZWN1dGVSZWZpbmVtZW50KGlubmVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSkudGhlbigoaW5uZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlubmVyLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzeW5jaHJvbm91cyB0cmFuc2Zvcm0gZW5jb3VudGVyZWQgZHVyaW5nIHN5bmNocm9ub3VzIHBhcnNlIG9wZXJhdGlvbi4gVXNlIC5wYXJzZUFzeW5jIGluc3RlYWQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogcmVzdWx0IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSkudGhlbigoYmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoYmFzZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlZmZlY3QudHJhbnNmb3JtKGJhc2UudmFsdWUsIGNoZWNrQ3R4KSkudGhlbigocmVzdWx0KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5hc3NlcnROZXZlcihlZmZlY3QpO1xuICAgIH1cbn1cblpvZEVmZmVjdHMuY3JlYXRlID0gKHNjaGVtYSwgZWZmZWN0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcyA9IChwcmVwcm9jZXNzLCBzY2hlbWEsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwicHJlcHJvY2Vzc1wiLCB0cmFuc2Zvcm06IHByZXByb2Nlc3MgfSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IHsgWm9kRWZmZWN0cyBhcyBab2RUcmFuc2Zvcm1lciB9O1xuZXhwb3J0IGNsYXNzIFpvZE9wdGlvbmFsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gT0sodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE9wdGlvbmFsLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9wdGlvbmFsKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9wdGlvbmFsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE51bGxhYmxlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZShpbnB1dCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kTnVsbGFibGUuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbGFibGUoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbGFibGUsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRGVmYXVsdCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RlZi5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2REZWZhdWx0LmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZERlZmF1bHQoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgcGFyYW1zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5kZWZhdWx0IDogKCkgPT4gcGFyYW1zLmRlZmF1bHQsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQ2F0Y2ggZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIC8vIG5ld0N0eCBpcyB1c2VkIHRvIG5vdCBjb2xsZWN0IGlzc3VlcyBmcm9tIGlubmVyIHR5cGVzIGluIGN0eFxuICAgICAgICBjb25zdCBuZXdDdHggPSB7XG4gICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWYuaW5uZXJUeXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhOiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgIHBhdGg6IG5ld0N0eC5wYXRoLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgICAgLi4ubmV3Q3R4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0FzeW5jKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgZXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG5ld0N0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwidmFsaWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZGVmLmNhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWm9kRXJyb3IobmV3Q3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RDYXRjaC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RDYXRjaCxcbiAgICAgICAgY2F0Y2hWYWx1ZTogdHlwZW9mIHBhcmFtcy5jYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zLmNhdGNoIDogKCkgPT4gcGFyYW1zLmNhdGNoLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZE5hTiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm5hbikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG59XG5ab2ROYU4uY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTmFOKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROYU4sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgQlJBTkQgPSBTeW1ib2woXCJ6b2RfYnJhbmRcIik7XG5leHBvcnQgY2xhc3MgWm9kQnJhbmRlZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGN0eC5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZFBpcGVsaW5lIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpblJlc3VsdCA9IGF3YWl0IHRoaXMuX2RlZi5pbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKGluUmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVBc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSB0aGlzLl9kZWYuaW4uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKGluUmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcImRpcnR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vdXQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGluUmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kUGlwZWxpbmUoe1xuICAgICAgICAgICAgaW46IGEsXG4gICAgICAgICAgICBvdXQ6IGIsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFBpcGVsaW5lLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kUmVhZG9ubHkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBjb25zdCBmcmVlemUgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gT2JqZWN0LmZyZWV6ZShkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXNBc3luYyhyZXN1bHQpID8gcmVzdWx0LnRoZW4oKGRhdGEpID0+IGZyZWV6ZShkYXRhKSkgOiBmcmVlemUocmVzdWx0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RSZWFkb25seS5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RSZWFkb25seSh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWFkb25seSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICB6LmN1c3RvbSAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIGNsZWFuUGFyYW1zKHBhcmFtcywgZGF0YSkge1xuICAgIGNvbnN0IHAgPSB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMoZGF0YSkgOiB0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlOiBwYXJhbXMgfSA6IHBhcmFtcztcbiAgICBjb25zdCBwMiA9IHR5cGVvZiBwID09PSBcInN0cmluZ1wiID8geyBtZXNzYWdlOiBwIH0gOiBwO1xuICAgIHJldHVybiBwMjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b20oY2hlY2ssIF9wYXJhbXMgPSB7fSwgXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogUGFzcyBgZmF0YWxgIGludG8gdGhlIHBhcmFtcyBvYmplY3QgaW5zdGVhZDpcbiAqXG4gKiBgYGB0c1xuICogei5zdHJpbmcoKS5jdXN0b20oKHZhbCkgPT4gdmFsLmxlbmd0aCA+IDUsIHsgZmF0YWw6IGZhbHNlIH0pXG4gKiBgYGBcbiAqXG4gKi9cbmZhdGFsKSB7XG4gICAgaWYgKGNoZWNrKVxuICAgICAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpLnN1cGVyUmVmaW5lKChkYXRhLCBjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBjaGVjayhkYXRhKTtcbiAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9mYXRhbCA9IHBhcmFtcy5mYXRhbCA/PyBmYXRhbCA/PyB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBjbGVhblBhcmFtcyhfcGFyYW1zLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSBwYXJhbXMuZmF0YWwgPz8gZmF0YWwgPz8gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUoeyBjb2RlOiBcImN1c3RvbVwiLCAuLi5wYXJhbXMsIGZhdGFsOiBfZmF0YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBab2RBbnkuY3JlYXRlKCk7XG59XG5leHBvcnQgeyBab2RUeXBlIGFzIFNjaGVtYSwgWm9kVHlwZSBhcyBab2RTY2hlbWEgfTtcbmV4cG9ydCBjb25zdCBsYXRlID0ge1xuICAgIG9iamVjdDogWm9kT2JqZWN0LmxhenljcmVhdGUsXG59O1xuZXhwb3J0IHZhciBab2RGaXJzdFBhcnR5VHlwZUtpbmQ7XG4oZnVuY3Rpb24gKFpvZEZpcnN0UGFydHlUeXBlS2luZCkge1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFN0cmluZ1wiXSA9IFwiWm9kU3RyaW5nXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVtYmVyXCJdID0gXCJab2ROdW1iZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROYU5cIl0gPSBcIlpvZE5hTlwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJpZ0ludFwiXSA9IFwiWm9kQmlnSW50XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQm9vbGVhblwiXSA9IFwiWm9kQm9vbGVhblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERhdGVcIl0gPSBcIlpvZERhdGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTeW1ib2xcIl0gPSBcIlpvZFN5bWJvbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuZGVmaW5lZFwiXSA9IFwiWm9kVW5kZWZpbmVkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTnVsbFwiXSA9IFwiWm9kTnVsbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEFueVwiXSA9IFwiWm9kQW55XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVW5rbm93blwiXSA9IFwiWm9kVW5rbm93blwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5ldmVyXCJdID0gXCJab2ROZXZlclwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFZvaWRcIl0gPSBcIlpvZFZvaWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBcnJheVwiXSA9IFwiWm9kQXJyYXlcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPYmplY3RcIl0gPSBcIlpvZE9iamVjdFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVuaW9uXCJdID0gXCJab2RVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiXSA9IFwiWm9kRGlzY3JpbWluYXRlZFVuaW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kSW50ZXJzZWN0aW9uXCJdID0gXCJab2RJbnRlcnNlY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RUdXBsZVwiXSA9IFwiWm9kVHVwbGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWNvcmRcIl0gPSBcIlpvZFJlY29yZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE1hcFwiXSA9IFwiWm9kTWFwXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU2V0XCJdID0gXCJab2RTZXRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RGdW5jdGlvblwiXSA9IFwiWm9kRnVuY3Rpb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RMYXp5XCJdID0gXCJab2RMYXp5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGl0ZXJhbFwiXSA9IFwiWm9kTGl0ZXJhbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEVudW1cIl0gPSBcIlpvZEVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFZmZlY3RzXCJdID0gXCJab2RFZmZlY3RzXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmF0aXZlRW51bVwiXSA9IFwiWm9kTmF0aXZlRW51bVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE9wdGlvbmFsXCJdID0gXCJab2RPcHRpb25hbFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxhYmxlXCJdID0gXCJab2ROdWxsYWJsZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZERlZmF1bHRcIl0gPSBcIlpvZERlZmF1bHRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RDYXRjaFwiXSA9IFwiWm9kQ2F0Y2hcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQcm9taXNlXCJdID0gXCJab2RQcm9taXNlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQnJhbmRlZFwiXSA9IFwiWm9kQnJhbmRlZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFBpcGVsaW5lXCJdID0gXCJab2RQaXBlbGluZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFJlYWRvbmx5XCJdID0gXCJab2RSZWFkb25seVwiO1xufSkoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIHx8IChab2RGaXJzdFBhcnR5VHlwZUtpbmQgPSB7fSkpO1xuLy8gcmVxdWlyZXMgVFMgNC40K1xuY2xhc3MgQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKC4uLl8pIHsgfVxufVxuY29uc3QgaW5zdGFuY2VPZlR5cGUgPSAoXG4vLyBjb25zdCBpbnN0YW5jZU9mVHlwZSA9IDxUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihcbmNscywgcGFyYW1zID0ge1xuICAgIG1lc3NhZ2U6IGBJbnB1dCBub3QgaW5zdGFuY2Ugb2YgJHtjbHMubmFtZX1gLFxufSkgPT4gY3VzdG9tKChkYXRhKSA9PiBkYXRhIGluc3RhbmNlb2YgY2xzLCBwYXJhbXMpO1xuY29uc3Qgc3RyaW5nVHlwZSA9IFpvZFN0cmluZy5jcmVhdGU7XG5jb25zdCBudW1iZXJUeXBlID0gWm9kTnVtYmVyLmNyZWF0ZTtcbmNvbnN0IG5hblR5cGUgPSBab2ROYU4uY3JlYXRlO1xuY29uc3QgYmlnSW50VHlwZSA9IFpvZEJpZ0ludC5jcmVhdGU7XG5jb25zdCBib29sZWFuVHlwZSA9IFpvZEJvb2xlYW4uY3JlYXRlO1xuY29uc3QgZGF0ZVR5cGUgPSBab2REYXRlLmNyZWF0ZTtcbmNvbnN0IHN5bWJvbFR5cGUgPSBab2RTeW1ib2wuY3JlYXRlO1xuY29uc3QgdW5kZWZpbmVkVHlwZSA9IFpvZFVuZGVmaW5lZC5jcmVhdGU7XG5jb25zdCBudWxsVHlwZSA9IFpvZE51bGwuY3JlYXRlO1xuY29uc3QgYW55VHlwZSA9IFpvZEFueS5jcmVhdGU7XG5jb25zdCB1bmtub3duVHlwZSA9IFpvZFVua25vd24uY3JlYXRlO1xuY29uc3QgbmV2ZXJUeXBlID0gWm9kTmV2ZXIuY3JlYXRlO1xuY29uc3Qgdm9pZFR5cGUgPSBab2RWb2lkLmNyZWF0ZTtcbmNvbnN0IGFycmF5VHlwZSA9IFpvZEFycmF5LmNyZWF0ZTtcbmNvbnN0IG9iamVjdFR5cGUgPSBab2RPYmplY3QuY3JlYXRlO1xuY29uc3Qgc3RyaWN0T2JqZWN0VHlwZSA9IFpvZE9iamVjdC5zdHJpY3RDcmVhdGU7XG5jb25zdCB1bmlvblR5cGUgPSBab2RVbmlvbi5jcmVhdGU7XG5jb25zdCBkaXNjcmltaW5hdGVkVW5pb25UeXBlID0gWm9kRGlzY3JpbWluYXRlZFVuaW9uLmNyZWF0ZTtcbmNvbnN0IGludGVyc2VjdGlvblR5cGUgPSBab2RJbnRlcnNlY3Rpb24uY3JlYXRlO1xuY29uc3QgdHVwbGVUeXBlID0gWm9kVHVwbGUuY3JlYXRlO1xuY29uc3QgcmVjb3JkVHlwZSA9IFpvZFJlY29yZC5jcmVhdGU7XG5jb25zdCBtYXBUeXBlID0gWm9kTWFwLmNyZWF0ZTtcbmNvbnN0IHNldFR5cGUgPSBab2RTZXQuY3JlYXRlO1xuY29uc3QgZnVuY3Rpb25UeXBlID0gWm9kRnVuY3Rpb24uY3JlYXRlO1xuY29uc3QgbGF6eVR5cGUgPSBab2RMYXp5LmNyZWF0ZTtcbmNvbnN0IGxpdGVyYWxUeXBlID0gWm9kTGl0ZXJhbC5jcmVhdGU7XG5jb25zdCBlbnVtVHlwZSA9IFpvZEVudW0uY3JlYXRlO1xuY29uc3QgbmF0aXZlRW51bVR5cGUgPSBab2ROYXRpdmVFbnVtLmNyZWF0ZTtcbmNvbnN0IHByb21pc2VUeXBlID0gWm9kUHJvbWlzZS5jcmVhdGU7XG5jb25zdCBlZmZlY3RzVHlwZSA9IFpvZEVmZmVjdHMuY3JlYXRlO1xuY29uc3Qgb3B0aW9uYWxUeXBlID0gWm9kT3B0aW9uYWwuY3JlYXRlO1xuY29uc3QgbnVsbGFibGVUeXBlID0gWm9kTnVsbGFibGUuY3JlYXRlO1xuY29uc3QgcHJlcHJvY2Vzc1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZVdpdGhQcmVwcm9jZXNzO1xuY29uc3QgcGlwZWxpbmVUeXBlID0gWm9kUGlwZWxpbmUuY3JlYXRlO1xuY29uc3Qgb3N0cmluZyA9ICgpID0+IHN0cmluZ1R5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb251bWJlciA9ICgpID0+IG51bWJlclR5cGUoKS5vcHRpb25hbCgpO1xuY29uc3Qgb2Jvb2xlYW4gPSAoKSA9PiBib29sZWFuVHlwZSgpLm9wdGlvbmFsKCk7XG5leHBvcnQgY29uc3QgY29lcmNlID0ge1xuICAgIHN0cmluZzogKChhcmcpID0+IFpvZFN0cmluZy5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgbnVtYmVyOiAoKGFyZykgPT4gWm9kTnVtYmVyLmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBib29sZWFuOiAoKGFyZykgPT4gWm9kQm9vbGVhbi5jcmVhdGUoe1xuICAgICAgICAuLi5hcmcsXG4gICAgICAgIGNvZXJjZTogdHJ1ZSxcbiAgICB9KSksXG4gICAgYmlnaW50OiAoKGFyZykgPT4gWm9kQmlnSW50LmNyZWF0ZSh7IC4uLmFyZywgY29lcmNlOiB0cnVlIH0pKSxcbiAgICBkYXRlOiAoKGFyZykgPT4gWm9kRGF0ZS5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG59O1xuZXhwb3J0IHsgYW55VHlwZSBhcyBhbnksIGFycmF5VHlwZSBhcyBhcnJheSwgYmlnSW50VHlwZSBhcyBiaWdpbnQsIGJvb2xlYW5UeXBlIGFzIGJvb2xlYW4sIGRhdGVUeXBlIGFzIGRhdGUsIGRpc2NyaW1pbmF0ZWRVbmlvblR5cGUgYXMgZGlzY3JpbWluYXRlZFVuaW9uLCBlZmZlY3RzVHlwZSBhcyBlZmZlY3QsIGVudW1UeXBlIGFzIGVudW0sIGZ1bmN0aW9uVHlwZSBhcyBmdW5jdGlvbiwgaW5zdGFuY2VPZlR5cGUgYXMgaW5zdGFuY2VvZiwgaW50ZXJzZWN0aW9uVHlwZSBhcyBpbnRlcnNlY3Rpb24sIGxhenlUeXBlIGFzIGxhenksIGxpdGVyYWxUeXBlIGFzIGxpdGVyYWwsIG1hcFR5cGUgYXMgbWFwLCBuYW5UeXBlIGFzIG5hbiwgbmF0aXZlRW51bVR5cGUgYXMgbmF0aXZlRW51bSwgbmV2ZXJUeXBlIGFzIG5ldmVyLCBudWxsVHlwZSBhcyBudWxsLCBudWxsYWJsZVR5cGUgYXMgbnVsbGFibGUsIG51bWJlclR5cGUgYXMgbnVtYmVyLCBvYmplY3RUeXBlIGFzIG9iamVjdCwgb2Jvb2xlYW4sIG9udW1iZXIsIG9wdGlvbmFsVHlwZSBhcyBvcHRpb25hbCwgb3N0cmluZywgcGlwZWxpbmVUeXBlIGFzIHBpcGVsaW5lLCBwcmVwcm9jZXNzVHlwZSBhcyBwcmVwcm9jZXNzLCBwcm9taXNlVHlwZSBhcyBwcm9taXNlLCByZWNvcmRUeXBlIGFzIHJlY29yZCwgc2V0VHlwZSBhcyBzZXQsIHN0cmljdE9iamVjdFR5cGUgYXMgc3RyaWN0T2JqZWN0LCBzdHJpbmdUeXBlIGFzIHN0cmluZywgc3ltYm9sVHlwZSBhcyBzeW1ib2wsIGVmZmVjdHNUeXBlIGFzIHRyYW5zZm9ybWVyLCB0dXBsZVR5cGUgYXMgdHVwbGUsIHVuZGVmaW5lZFR5cGUgYXMgdW5kZWZpbmVkLCB1bmlvblR5cGUgYXMgdW5pb24sIHVua25vd25UeXBlIGFzIHVua25vd24sIHZvaWRUeXBlIGFzIHZvaWQsIH07XG5leHBvcnQgY29uc3QgTkVWRVIgPSBJTlZBTElEO1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMvdHlwZUFsaWFzZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1pvZEVycm9yLmpzXCI7XG4iLCAiaW1wb3J0ICogYXMgeiBmcm9tIFwiLi9leHRlcm5hbC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXh0ZXJuYWwuanNcIjtcbmV4cG9ydCB7IHogfTtcbmV4cG9ydCBkZWZhdWx0IHo7XG4iLCAiZXhwb3J0IHsgcGFyc2UsIHNhZmVQYXJzZSwgcGFyc2VBc3luYywgc2FmZVBhcnNlQXN5bmMsIGVuY29kZSwgZGVjb2RlLCBlbmNvZGVBc3luYywgZGVjb2RlQXN5bmMsIHNhZmVFbmNvZGUsIHNhZmVEZWNvZGUsIHNhZmVFbmNvZGVBc3luYywgc2FmZURlY29kZUFzeW5jLCB9IGZyb20gXCIuLi9jb3JlL2luZGV4LmpzXCI7XG4iLCAiaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi4vY29yZS91dGlsLmpzXCI7XG5pbXBvcnQgKiBhcyBwYXJzZSBmcm9tIFwiLi9wYXJzZS5qc1wiO1xuZXhwb3J0IGNvbnN0IFpvZE1pbmlUeXBlID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlUeXBlXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBpZiAoIWluc3QuX3pvZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5pbml0aWFsaXplZCBzY2hlbWEgaW4gWm9kTWluaVR5cGUuXCIpO1xuICAgIGNvcmUuJFpvZFR5cGUuaW5pdChpbnN0LCBkZWYpO1xuICAgIGluc3QuZGVmID0gZGVmO1xuICAgIGluc3QudHlwZSA9IGRlZi50eXBlO1xuICAgIGluc3QucGFyc2UgPSAoZGF0YSwgcGFyYW1zKSA9PiBwYXJzZS5wYXJzZShpbnN0LCBkYXRhLCBwYXJhbXMsIHsgY2FsbGVlOiBpbnN0LnBhcnNlIH0pO1xuICAgIGluc3Quc2FmZVBhcnNlID0gKGRhdGEsIHBhcmFtcykgPT4gcGFyc2Uuc2FmZVBhcnNlKGluc3QsIGRhdGEsIHBhcmFtcyk7XG4gICAgaW5zdC5wYXJzZUFzeW5jID0gYXN5bmMgKGRhdGEsIHBhcmFtcykgPT4gcGFyc2UucGFyc2VBc3luYyhpbnN0LCBkYXRhLCBwYXJhbXMsIHsgY2FsbGVlOiBpbnN0LnBhcnNlQXN5bmMgfSk7XG4gICAgaW5zdC5zYWZlUGFyc2VBc3luYyA9IGFzeW5jIChkYXRhLCBwYXJhbXMpID0+IHBhcnNlLnNhZmVQYXJzZUFzeW5jKGluc3QsIGRhdGEsIHBhcmFtcyk7XG4gICAgaW5zdC5jaGVjayA9ICguLi5jaGVja3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGluc3QuY2xvbmUoe1xuICAgICAgICAgICAgLi4uZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4uKGRlZi5jaGVja3MgPz8gW10pLFxuICAgICAgICAgICAgICAgIC4uLmNoZWNrcy5tYXAoKGNoKSA9PiB0eXBlb2YgY2ggPT09IFwiZnVuY3Rpb25cIiA/IHsgX3pvZDogeyBjaGVjazogY2gsIGRlZjogeyBjaGVjazogXCJjdXN0b21cIiB9LCBvbmF0dGFjaDogW10gfSB9IDogY2gpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSwgeyBwYXJlbnQ6IHRydWUgfSk7XG4gICAgfTtcbiAgICBpbnN0LndpdGggPSBpbnN0LmNoZWNrO1xuICAgIGluc3QuY2xvbmUgPSAoX2RlZiwgcGFyYW1zKSA9PiBjb3JlLmNsb25lKGluc3QsIF9kZWYsIHBhcmFtcyk7XG4gICAgaW5zdC5icmFuZCA9ICgpID0+IGluc3Q7XG4gICAgaW5zdC5yZWdpc3RlciA9ICgocmVnLCBtZXRhKSA9PiB7XG4gICAgICAgIHJlZy5hZGQoaW5zdCwgbWV0YSk7XG4gICAgICAgIHJldHVybiBpbnN0O1xuICAgIH0pO1xuICAgIGluc3QuYXBwbHkgPSAoZm4pID0+IGZuKGluc3QpO1xufSk7XG5leHBvcnQgY29uc3QgWm9kTWluaVN0cmluZyA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pU3RyaW5nXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RTdHJpbmcuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3N0cmluZyhab2RNaW5pU3RyaW5nLCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlTdHJpbmdGb3JtYXQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaVN0cmluZ0Zvcm1hdFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pU3RyaW5nLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuZXhwb3J0IGNvbnN0IFpvZE1pbmlFbWFpbCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pRW1haWxcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZEVtYWlsLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBlbWFpbChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fZW1haWwoWm9kTWluaUVtYWlsLCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlHVUlEID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlHVUlEXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RHVUlELmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBndWlkKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9ndWlkKFpvZE1pbmlHVUlELCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlVVUlEID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlVVUlEXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RVVUlELmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiB1dWlkKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl91dWlkKFpvZE1pbmlVVUlELCBwYXJhbXMpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3V1aWR2NChab2RNaW5pVVVJRCwgcGFyYW1zKTtcbn1cbi8vIFpvZE1pbmlVVUlEdjZcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gdXVpZHY2KHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl91dWlkdjYoWm9kTWluaVVVSUQsIHBhcmFtcyk7XG59XG4vLyBab2RNaW5pVVVJRHY3XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NyhwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fdXVpZHY3KFpvZE1pbmlVVUlELCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlVUkwgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaVVSTFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kVVJMLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiB1cmwocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3VybChab2RNaW5pVVJMLCBwYXJhbXMpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBodHRwVXJsKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl91cmwoWm9kTWluaVVSTCwge1xuICAgICAgICBwcm90b2NvbDogL15odHRwcz8kLyxcbiAgICAgICAgaG9zdG5hbWU6IGNvcmUucmVnZXhlcy5kb21haW4sXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUVtb2ppID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlFbW9qaVwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kRW1vamkuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGVtb2ppKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9lbW9qaShab2RNaW5pRW1vamksIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU5hbm9JRCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTmFub0lEXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2ROYW5vSUQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG5hbm9pZChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fbmFub2lkKFpvZE1pbmlOYW5vSUQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUNVSUQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUNVSURcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZENVSUQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGN1aWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2N1aWQoWm9kTWluaUNVSUQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUNVSUQyID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlDVUlEMlwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kQ1VJRDIuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGN1aWQyKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9jdWlkMihab2RNaW5pQ1VJRDIsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVVMSUQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaVVMSURcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFVMSUQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHVsaWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3VsaWQoWm9kTWluaVVMSUQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVhJRCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pWElEXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RYSUQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHhpZChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5feGlkKFpvZE1pbmlYSUQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUtTVUlEID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlLU1VJRFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kS1NVSUQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGtzdWlkKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9rc3VpZChab2RNaW5pS1NVSUQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUlQdjQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUlQdjRcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZElQdjQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGlwdjQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2lwdjQoWm9kTWluaUlQdjQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUlQdjYgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUlQdjZcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZElQdjYuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGlwdjYocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2lwdjYoWm9kTWluaUlQdjYsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUNJRFJ2NCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQ0lEUnY0XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RDSURSdjQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGNpZHJ2NChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY2lkcnY0KFpvZE1pbmlDSURSdjQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUNJRFJ2NiA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQ0lEUnY2XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RDSURSdjYuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGNpZHJ2NihwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY2lkcnY2KFpvZE1pbmlDSURSdjYsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU1BQyA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTUFDXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RNQUMuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG1hYyhwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fbWFjKFpvZE1pbmlNQUMsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUJhc2U2NCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQmFzZTY0XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RCYXNlNjQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fYmFzZTY0KFpvZE1pbmlCYXNlNjQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUJhc2U2NFVSTCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQmFzZTY0VVJMXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RCYXNlNjRVUkwuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NHVybChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fYmFzZTY0dXJsKFpvZE1pbmlCYXNlNjRVUkwsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUUxNjQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUUxNjRcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZEUxNjQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGUxNjQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2UxNjQoWm9kTWluaUUxNjQsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUpXVCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pSldUXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RKV1QuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGp3dChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fand0KFpvZE1pbmlKV1QsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUN1c3RvbVN0cmluZ0Zvcm1hdCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQ3VzdG9tU3RyaW5nRm9ybWF0XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RDdXN0b21TdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zvcm1hdChmb3JtYXQsIGZuT3JSZWdleCwgX3BhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIGNvcmUuX3N0cmluZ0Zvcm1hdChab2RNaW5pQ3VzdG9tU3RyaW5nRm9ybWF0LCBmb3JtYXQsIGZuT3JSZWdleCwgX3BhcmFtcyk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lKF9wYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fc3RyaW5nRm9ybWF0KFpvZE1pbmlDdXN0b21TdHJpbmdGb3JtYXQsIFwiaG9zdG5hbWVcIiwgY29yZS5yZWdleGVzLmhvc3RuYW1lLCBfcGFyYW1zKTtcbn1cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gaGV4KF9wYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fc3RyaW5nRm9ybWF0KFpvZE1pbmlDdXN0b21TdHJpbmdGb3JtYXQsIFwiaGV4XCIsIGNvcmUucmVnZXhlcy5oZXgsIF9wYXJhbXMpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBoYXNoKGFsZywgcGFyYW1zKSB7XG4gICAgY29uc3QgZW5jID0gcGFyYW1zPy5lbmMgPz8gXCJoZXhcIjtcbiAgICBjb25zdCBmb3JtYXQgPSBgJHthbGd9XyR7ZW5jfWA7XG4gICAgY29uc3QgcmVnZXggPSBjb3JlLnJlZ2V4ZXNbZm9ybWF0XTtcbiAgICAvLyBjaGVjayBmb3IgdW5yZWNvZ25pemVkIGZvcm1hdFxuICAgIGlmICghcmVnZXgpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGhhc2ggZm9ybWF0OiAke2Zvcm1hdH1gKTtcbiAgICByZXR1cm4gY29yZS5fc3RyaW5nRm9ybWF0KFpvZE1pbmlDdXN0b21TdHJpbmdGb3JtYXQsIGZvcm1hdCwgcmVnZXgsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU51bWJlciA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTnVtYmVyXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2ROdW1iZXIuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXIocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX251bWJlcihab2RNaW5pTnVtYmVyLCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlOdW1iZXJGb3JtYXQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaU51bWJlckZvcm1hdFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kTnVtYmVyRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pTnVtYmVyLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gaW50XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGludChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5faW50KFpvZE1pbmlOdW1iZXJGb3JtYXQsIHBhcmFtcyk7XG59XG4vLyBmbG9hdDMyXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGZsb2F0MzIocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2Zsb2F0MzIoWm9kTWluaU51bWJlckZvcm1hdCwgcGFyYW1zKTtcbn1cbi8vIGZsb2F0NjRcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gZmxvYXQ2NChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fZmxvYXQ2NChab2RNaW5pTnVtYmVyRm9ybWF0LCBwYXJhbXMpO1xufVxuLy8gaW50MzJcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gaW50MzIocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2ludDMyKFpvZE1pbmlOdW1iZXJGb3JtYXQsIHBhcmFtcyk7XG59XG4vLyB1aW50MzJcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gdWludDMyKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl91aW50MzIoWm9kTWluaU51bWJlckZvcm1hdCwgcGFyYW1zKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pQm9vbGVhbiA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQm9vbGVhblwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kQm9vbGVhbi5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW4ocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2Jvb2xlYW4oWm9kTWluaUJvb2xlYW4sIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUJpZ0ludCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQmlnSW50XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RCaWdJbnQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBiaWdpbnQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2JpZ2ludChab2RNaW5pQmlnSW50LCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlCaWdJbnRGb3JtYXQgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUJpZ0ludEZvcm1hdFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kQmlnSW50Rm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pQmlnSW50LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gaW50NjRcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gaW50NjQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2ludDY0KFpvZE1pbmlCaWdJbnRGb3JtYXQsIHBhcmFtcyk7XG59XG4vLyB1aW50NjRcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gdWludDY0KHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl91aW50NjQoWm9kTWluaUJpZ0ludEZvcm1hdCwgcGFyYW1zKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pU3ltYm9sID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlTeW1ib2xcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFN5bWJvbC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHN5bWJvbChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fc3ltYm9sKFpvZE1pbmlTeW1ib2wsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVVuZGVmaW5lZCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pVW5kZWZpbmVkXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RVbmRlZmluZWQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmZ1bmN0aW9uIF91bmRlZmluZWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3VuZGVmaW5lZChab2RNaW5pVW5kZWZpbmVkLCBwYXJhbXMpO1xufVxuZXhwb3J0IHsgX3VuZGVmaW5lZCBhcyB1bmRlZmluZWQgfTtcbmV4cG9ydCBjb25zdCBab2RNaW5pTnVsbCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTnVsbFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kTnVsbC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gX251bGwocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX251bGwoWm9kTWluaU51bGwsIHBhcmFtcyk7XG59XG5leHBvcnQgeyBfbnVsbCBhcyBudWxsIH07XG5leHBvcnQgY29uc3QgWm9kTWluaUFueSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQW55XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RBbnkuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBhbnkoKSB7XG4gICAgcmV0dXJuIGNvcmUuX2FueShab2RNaW5pQW55KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pVW5rbm93biA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pVW5rbm93blwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kVW5rbm93bi5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHVua25vd24oKSB7XG4gICAgcmV0dXJuIGNvcmUuX3Vua25vd24oWm9kTWluaVVua25vd24pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlOZXZlciA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTmV2ZXJcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZE5ldmVyLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gbmV2ZXIocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX25ldmVyKFpvZE1pbmlOZXZlciwgcGFyYW1zKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pVm9pZCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pVm9pZFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kVm9pZC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gX3ZvaWQocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX3ZvaWQoWm9kTWluaVZvaWQsIHBhcmFtcyk7XG59XG5leHBvcnQgeyBfdm9pZCBhcyB2b2lkIH07XG5leHBvcnQgY29uc3QgWm9kTWluaURhdGUgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaURhdGVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZERhdGUuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBkYXRlKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9kYXRlKFpvZE1pbmlEYXRlLCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlBcnJheSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pQXJyYXlcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZEFycmF5LmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkoZWxlbWVudCwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pQXJyYXkoe1xuICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG4vLyAua2V5b2Zcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24ga2V5b2Yoc2NoZW1hKSB7XG4gICAgY29uc3Qgc2hhcGUgPSBzY2hlbWEuX3pvZC5kZWYuc2hhcGU7XG4gICAgcmV0dXJuIF9lbnVtKE9iamVjdC5rZXlzKHNoYXBlKSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU9iamVjdCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pT2JqZWN0XCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RPYmplY3QuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbiAgICB1dGlsLmRlZmluZUxhenkoaW5zdCwgXCJzaGFwZVwiLCAoKSA9PiBkZWYuc2hhcGUpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdChzaGFwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZGVmID0ge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBzaGFwZTogc2hhcGUgPz8ge30sXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlPYmplY3QoZGVmKTtcbn1cbi8vIHN0cmljdE9iamVjdFxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBzdHJpY3RPYmplY3Qoc2hhcGUsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kTWluaU9iamVjdCh7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIHNoYXBlLFxuICAgICAgICBjYXRjaGFsbDogbmV2ZXIoKSxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbi8vIGxvb3NlT2JqZWN0XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3NlT2JqZWN0KHNoYXBlLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlPYmplY3Qoe1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBzaGFwZSxcbiAgICAgICAgY2F0Y2hhbGw6IHVua25vd24oKSxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbi8vIG9iamVjdCBtZXRob2RzXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChzY2hlbWEsIHNoYXBlKSB7XG4gICAgcmV0dXJuIHV0aWwuZXh0ZW5kKHNjaGVtYSwgc2hhcGUpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBzYWZlRXh0ZW5kKHNjaGVtYSwgc2hhcGUpIHtcbiAgICByZXR1cm4gdXRpbC5zYWZlRXh0ZW5kKHNjaGVtYSwgc2hhcGUpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShzY2hlbWEsIHNoYXBlKSB7XG4gICAgcmV0dXJuIHV0aWwuZXh0ZW5kKHNjaGVtYSwgc2hhcGUpO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBwaWNrKHNjaGVtYSwgbWFzaykge1xuICAgIHJldHVybiB1dGlsLnBpY2soc2NoZW1hLCBtYXNrKTtcbn1cbi8vIC5vbWl0XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG9taXQoc2NoZW1hLCBtYXNrKSB7XG4gICAgcmV0dXJuIHV0aWwub21pdChzY2hlbWEsIG1hc2spO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsKHNjaGVtYSwgbWFzaykge1xuICAgIHJldHVybiB1dGlsLnBhcnRpYWwoWm9kTWluaU9wdGlvbmFsLCBzY2hlbWEsIG1hc2spO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZChzY2hlbWEsIG1hc2spIHtcbiAgICByZXR1cm4gdXRpbC5yZXF1aXJlZChab2RNaW5pTm9uT3B0aW9uYWwsIHNjaGVtYSwgbWFzayk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGNhdGNoYWxsKGluc3QsIGNhdGNoYWxsKSB7XG4gICAgcmV0dXJuIGluc3QuY2xvbmUoeyAuLi5pbnN0Ll96b2QuZGVmLCBjYXRjaGFsbDogY2F0Y2hhbGwgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVVuaW9uID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlVbmlvblwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kVW5pb24uaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbihvcHRpb25zLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlVbmlvbih7XG4gICAgICAgIHR5cGU6IFwidW5pb25cIixcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pWG9yID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlYb3JcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIFpvZE1pbmlVbmlvbi5pbml0KGluc3QsIGRlZik7XG4gICAgY29yZS4kWm9kWG9yLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLyoqIENyZWF0ZXMgYW4gZXhjbHVzaXZlIHVuaW9uIChYT1IpIHdoZXJlIGV4YWN0bHkgb25lIG9wdGlvbiBtdXN0IG1hdGNoLlxuICogVW5saWtlIHJlZ3VsYXIgdW5pb25zIHRoYXQgc3VjY2VlZCB3aGVuIGFueSBvcHRpb24gbWF0Y2hlcywgeG9yIGZhaWxzIGlmXG4gKiB6ZXJvIG9yIG1vcmUgdGhhbiBvbmUgb3B0aW9uIG1hdGNoZXMgdGhlIGlucHV0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHhvcihvcHRpb25zLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlYb3Ioe1xuICAgICAgICB0eXBlOiBcInVuaW9uXCIsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaURpc2NyaW1pbmF0ZWRVbmlvbiA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pRGlzY3JpbWluYXRlZFVuaW9uXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2REaXNjcmltaW5hdGVkVW5pb24uaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBkaXNjcmltaW5hdGVkVW5pb24oZGlzY3JpbWluYXRvciwgb3B0aW9ucywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pRGlzY3JpbWluYXRlZFVuaW9uKHtcbiAgICAgICAgdHlwZTogXCJ1bmlvblwiLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBkaXNjcmltaW5hdG9yLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlJbnRlcnNlY3Rpb24gPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUludGVyc2VjdGlvblwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kSW50ZXJzZWN0aW9uLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgdHlwZTogXCJpbnRlcnNlY3Rpb25cIixcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlUdXBsZSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pVHVwbGVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFR1cGxlLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gdHVwbGUoaXRlbXMsIF9wYXJhbXNPclJlc3QsIF9wYXJhbXMpIHtcbiAgICBjb25zdCBoYXNSZXN0ID0gX3BhcmFtc09yUmVzdCBpbnN0YW5jZW9mIGNvcmUuJFpvZFR5cGU7XG4gICAgY29uc3QgcGFyYW1zID0gaGFzUmVzdCA/IF9wYXJhbXMgOiBfcGFyYW1zT3JSZXN0O1xuICAgIGNvbnN0IHJlc3QgPSBoYXNSZXN0ID8gX3BhcmFtc09yUmVzdCA6IG51bGw7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pVHVwbGUoe1xuICAgICAgICB0eXBlOiBcInR1cGxlXCIsXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgcmVzdCxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pUmVjb3JkID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlSZWNvcmRcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFJlY29yZC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kTWluaVJlY29yZCh7XG4gICAgICAgIHR5cGU6IFwicmVjb3JkXCIsXG4gICAgICAgIGtleVR5cGUsXG4gICAgICAgIHZhbHVlVHlwZTogdmFsdWVUeXBlLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsUmVjb3JkKGtleVR5cGUsIHZhbHVlVHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgayA9IGNvcmUuY2xvbmUoa2V5VHlwZSk7XG4gICAgay5fem9kLnZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlSZWNvcmQoe1xuICAgICAgICB0eXBlOiBcInJlY29yZFwiLFxuICAgICAgICBrZXlUeXBlOiBrLFxuICAgICAgICB2YWx1ZVR5cGU6IHZhbHVlVHlwZSxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29zZVJlY29yZChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kTWluaVJlY29yZCh7XG4gICAgICAgIHR5cGU6IFwicmVjb3JkXCIsXG4gICAgICAgIGtleVR5cGUsXG4gICAgICAgIHZhbHVlVHlwZTogdmFsdWVUeXBlLFxuICAgICAgICBtb2RlOiBcImxvb3NlXCIsXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU1hcCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTWFwXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RNYXAuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBtYXAoa2V5VHlwZSwgdmFsdWVUeXBlLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlNYXAoe1xuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBrZXlUeXBlOiBrZXlUeXBlLFxuICAgICAgICB2YWx1ZVR5cGU6IHZhbHVlVHlwZSxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pU2V0ID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlTZXRcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFNldC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHNldCh2YWx1ZVR5cGUsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kTWluaVNldCh7XG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHZhbHVlVHlwZTogdmFsdWVUeXBlLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlFbnVtID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlFbnVtXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RFbnVtLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG4gICAgaW5zdC5vcHRpb25zID0gT2JqZWN0LnZhbHVlcyhkZWYuZW50cmllcyk7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBfZW51bSh2YWx1ZXMsIHBhcmFtcykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlcykgPyBPYmplY3QuZnJvbUVudHJpZXModmFsdWVzLm1hcCgodikgPT4gW3YsIHZdKSkgOiB2YWx1ZXM7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pRW51bSh7XG4gICAgICAgIHR5cGU6IFwiZW51bVwiLFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IHsgX2VudW0gYXMgZW51bSB9O1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbi8qKiBAZGVwcmVjYXRlZCBUaGlzIEFQSSBoYXMgYmVlbiBtZXJnZWQgaW50byBgei5lbnVtKClgLiBVc2UgYHouZW51bSgpYCBpbnN0ZWFkLlxuICpcbiAqIGBgYHRzXG4gKiBlbnVtIENvbG9ycyB7IHJlZCwgZ3JlZW4sIGJsdWUgfVxuICogei5lbnVtKENvbG9ycyk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hdGl2ZUVudW0oZW50cmllcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pRW51bSh7XG4gICAgICAgIHR5cGU6IFwiZW51bVwiLFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlMaXRlcmFsID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlMaXRlcmFsXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RMaXRlcmFsLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gbGl0ZXJhbCh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pTGl0ZXJhbCh7XG4gICAgICAgIHR5cGU6IFwibGl0ZXJhbFwiLFxuICAgICAgICB2YWx1ZXM6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdLFxuICAgICAgICAuLi51dGlsLm5vcm1hbGl6ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlGaWxlID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlGaWxlXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RGaWxlLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gZmlsZShwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fZmlsZShab2RNaW5pRmlsZSwgcGFyYW1zKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pVHJhbnNmb3JtID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlUcmFuc2Zvcm1cIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFRyYW5zZm9ybS5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIHJldHVybiBuZXcgWm9kTWluaVRyYW5zZm9ybSh7XG4gICAgICAgIHR5cGU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgIHRyYW5zZm9ybTogZm4sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU9wdGlvbmFsID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlPcHRpb25hbFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kT3B0aW9uYWwuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25hbChpbm5lclR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlPcHRpb25hbCh7XG4gICAgICAgIHR5cGU6IFwib3B0aW9uYWxcIixcbiAgICAgICAgaW5uZXJUeXBlOiBpbm5lclR5cGUsXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUV4YWN0T3B0aW9uYWwgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUV4YWN0T3B0aW9uYWxcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZEV4YWN0T3B0aW9uYWwuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBleGFjdE9wdGlvbmFsKGlubmVyVHlwZSkge1xuICAgIHJldHVybiBuZXcgWm9kTWluaUV4YWN0T3B0aW9uYWwoe1xuICAgICAgICB0eXBlOiBcIm9wdGlvbmFsXCIsXG4gICAgICAgIGlubmVyVHlwZTogaW5uZXJUeXBlLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlOdWxsYWJsZSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pTnVsbGFibGVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZE51bGxhYmxlLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gbnVsbGFibGUoaW5uZXJUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pTnVsbGFibGUoe1xuICAgICAgICB0eXBlOiBcIm51bGxhYmxlXCIsXG4gICAgICAgIGlubmVyVHlwZTogaW5uZXJUeXBlLFxuICAgIH0pO1xufVxuLy8gbnVsbGlzaFxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBudWxsaXNoKGlubmVyVHlwZSkge1xuICAgIHJldHVybiBvcHRpb25hbChudWxsYWJsZShpbm5lclR5cGUpKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pRGVmYXVsdCA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pRGVmYXVsdFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kRGVmYXVsdC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIF9kZWZhdWx0KGlubmVyVHlwZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pRGVmYXVsdCh7XG4gICAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICBpbm5lclR5cGU6IGlubmVyVHlwZSxcbiAgICAgICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBkZWZhdWx0VmFsdWUoKSA6IHV0aWwuc2hhbGxvd0Nsb25lKGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVByZWZhdWx0ID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlQcmVmYXVsdFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kUHJlZmF1bHQuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBwcmVmYXVsdChpbm5lclR5cGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgWm9kTWluaVByZWZhdWx0KHtcbiAgICAgICAgdHlwZTogXCJwcmVmYXVsdFwiLFxuICAgICAgICBpbm5lclR5cGU6IGlubmVyVHlwZSxcbiAgICAgICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBkZWZhdWx0VmFsdWUoKSA6IHV0aWwuc2hhbGxvd0Nsb25lKGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaU5vbk9wdGlvbmFsID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlOb25PcHRpb25hbFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kTm9uT3B0aW9uYWwuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBub25vcHRpb25hbChpbm5lclR5cGUsIHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgWm9kTWluaU5vbk9wdGlvbmFsKHtcbiAgICAgICAgdHlwZTogXCJub25vcHRpb25hbFwiLFxuICAgICAgICBpbm5lclR5cGU6IGlubmVyVHlwZSxcbiAgICAgICAgLi4udXRpbC5ub3JtYWxpemVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pU3VjY2VzcyA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pU3VjY2Vzc1wiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kU3VjY2Vzcy5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3MoaW5uZXJUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pU3VjY2Vzcyh7XG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBpbm5lclR5cGU6IGlubmVyVHlwZSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pQ2F0Y2ggPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUNhdGNoXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RDYXRjaC5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gX2NhdGNoKGlubmVyVHlwZSwgY2F0Y2hWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgWm9kTWluaUNhdGNoKHtcbiAgICAgICAgdHlwZTogXCJjYXRjaFwiLFxuICAgICAgICBpbm5lclR5cGU6IGlubmVyVHlwZSxcbiAgICAgICAgY2F0Y2hWYWx1ZTogKHR5cGVvZiBjYXRjaFZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBjYXRjaFZhbHVlIDogKCkgPT4gY2F0Y2hWYWx1ZSksXG4gICAgfSk7XG59XG5leHBvcnQgeyBfY2F0Y2ggYXMgY2F0Y2ggfTtcbmV4cG9ydCBjb25zdCBab2RNaW5pTmFOID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlOYU5cIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZE5hTi5pbml0KGluc3QsIGRlZik7XG4gICAgWm9kTWluaVR5cGUuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG5hbihwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fbmFuKFpvZE1pbmlOYU4sIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaVBpcGUgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaVBpcGVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFBpcGUuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBwaXBlKGluXywgb3V0KSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pUGlwZSh7XG4gICAgICAgIHR5cGU6IFwicGlwZVwiLFxuICAgICAgICBpbjogaW5fLFxuICAgICAgICBvdXQ6IG91dCxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pQ29kZWMgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUNvZGVjXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBab2RNaW5pUGlwZS5pbml0KGluc3QsIGRlZik7XG4gICAgY29yZS4kWm9kQ29kZWMuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGNvZGVjKGluXywgb3V0LCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlDb2RlYyh7XG4gICAgICAgIHR5cGU6IFwicGlwZVwiLFxuICAgICAgICBpbjogaW5fLFxuICAgICAgICBvdXQ6IG91dCxcbiAgICAgICAgdHJhbnNmb3JtOiBwYXJhbXMuZGVjb2RlLFxuICAgICAgICByZXZlcnNlVHJhbnNmb3JtOiBwYXJhbXMuZW5jb2RlLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlSZWFkb25seSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pUmVhZG9ubHlcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZFJlYWRvbmx5LmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gcmVhZG9ubHkoaW5uZXJUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pUmVhZG9ubHkoe1xuICAgICAgICB0eXBlOiBcInJlYWRvbmx5XCIsXG4gICAgICAgIGlubmVyVHlwZTogaW5uZXJUeXBlLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlUZW1wbGF0ZUxpdGVyYWwgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaVRlbXBsYXRlTGl0ZXJhbFwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kVGVtcGxhdGVMaXRlcmFsLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVMaXRlcmFsKHBhcnRzLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlUZW1wbGF0ZUxpdGVyYWwoe1xuICAgICAgICB0eXBlOiBcInRlbXBsYXRlX2xpdGVyYWxcIixcbiAgICAgICAgcGFydHMsXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUxhenkgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUxhenlcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZExhenkuaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGxhenk8VCBleHRlbmRzIG9iamVjdD4oZ2V0dGVyOiAoKSA9PiBUKTogVCB7XG4vLyAgIHJldHVybiB1dGlsLmNyZWF0ZVRyYW5zcGFyZW50UHJveHk8VD4oZ2V0dGVyKTtcbi8vIH1cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBfbGF6eShnZXR0ZXIpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlMYXp5KHtcbiAgICAgICAgdHlwZTogXCJsYXp5XCIsXG4gICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgIH0pO1xufVxuZXhwb3J0IHsgX2xhenkgYXMgbGF6eSB9O1xuZXhwb3J0IGNvbnN0IFpvZE1pbmlQcm9taXNlID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlQcm9taXNlXCIsIChpbnN0LCBkZWYpID0+IHtcbiAgICBjb3JlLiRab2RQcm9taXNlLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZShpbm5lclR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFpvZE1pbmlQcm9taXNlKHtcbiAgICAgICAgdHlwZTogXCJwcm9taXNlXCIsXG4gICAgICAgIGlubmVyVHlwZTogaW5uZXJUeXBlLFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlDdXN0b20gPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUN1c3RvbVwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kQ3VzdG9tLmluaXQoaW5zdCwgZGVmKTtcbiAgICBab2RNaW5pVHlwZS5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIGN1c3RvbSBjaGVja3Ncbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gY2hlY2soZm4sIHBhcmFtcykge1xuICAgIGNvbnN0IGNoID0gbmV3IGNvcmUuJFpvZENoZWNrKHtcbiAgICAgICAgY2hlY2s6IFwiY3VzdG9tXCIsXG4gICAgICAgIC4uLnV0aWwubm9ybWFsaXplUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG4gICAgY2guX3pvZC5jaGVjayA9IGZuO1xuICAgIHJldHVybiBjaDtcbn1cbi8vIFpvZEN1c3RvbVxuLy8gY3VzdG9tIHNjaGVtYVxuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b20oZm4sIF9wYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY3VzdG9tKFpvZE1pbmlDdXN0b20sIGZuID8/ICgoKSA9PiB0cnVlKSwgX3BhcmFtcyk7XG59XG4vLyByZWZpbmVcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gcmVmaW5lKGZuLCBfcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gY29yZS5fcmVmaW5lKFpvZE1pbmlDdXN0b20sIGZuLCBfcGFyYW1zKTtcbn1cbi8vIHN1cGVyUmVmaW5lXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyUmVmaW5lKGZuKSB7XG4gICAgcmV0dXJuIGNvcmUuX3N1cGVyUmVmaW5lKGZuKTtcbn1cbi8vIFJlLWV4cG9ydCBkZXNjcmliZSBhbmQgbWV0YSBmcm9tIGNvcmVcbmV4cG9ydCBjb25zdCBkZXNjcmliZSA9IGNvcmUuZGVzY3JpYmU7XG5leHBvcnQgY29uc3QgbWV0YSA9IGNvcmUubWV0YTtcbi8vIGluc3RhbmNlb2ZcbmNsYXNzIENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5fYXJncykgeyB9XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gX2luc3RhbmNlb2YoY2xzLCBwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGluc3QgPSBjdXN0b20oKGRhdGEpID0+IGRhdGEgaW5zdGFuY2VvZiBjbHMsIHBhcmFtcyk7XG4gICAgaW5zdC5fem9kLmJhZy5DbGFzcyA9IGNscztcbiAgICAvLyBPdmVycmlkZSBjaGVjayB0byBlbWl0IGludmFsaWRfdHlwZSBpbnN0ZWFkIG9mIGN1c3RvbVxuICAgIGluc3QuX3pvZC5jaGVjayA9IChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGlmICghKHBheWxvYWQudmFsdWUgaW5zdGFuY2VvZiBjbHMpKSB7XG4gICAgICAgICAgICBwYXlsb2FkLmlzc3Vlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBcImludmFsaWRfdHlwZVwiLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBjbHMubmFtZSxcbiAgICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgICBpbnN0LFxuICAgICAgICAgICAgICAgIHBhdGg6IFsuLi4oaW5zdC5fem9kLmRlZi5wYXRoID8/IFtdKV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGluc3Q7XG59XG5leHBvcnQgeyBfaW5zdGFuY2VvZiBhcyBpbnN0YW5jZW9mIH07XG4vLyBzdHJpbmdib29sXG5leHBvcnQgY29uc3Qgc3RyaW5nYm9vbCA9ICguLi5hcmdzKSA9PiBjb3JlLl9zdHJpbmdib29sKHtcbiAgICBDb2RlYzogWm9kTWluaUNvZGVjLFxuICAgIEJvb2xlYW46IFpvZE1pbmlCb29sZWFuLFxuICAgIFN0cmluZzogWm9kTWluaVN0cmluZyxcbn0sIC4uLmFyZ3MpO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBqc29uKCkge1xuICAgIGNvbnN0IGpzb25TY2hlbWEgPSBfbGF6eSgoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bmlvbihbc3RyaW5nKCksIG51bWJlcigpLCBib29sZWFuKCksIF9udWxsKCksIGFycmF5KGpzb25TY2hlbWEpLCByZWNvcmQoc3RyaW5nKCksIGpzb25TY2hlbWEpXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGpzb25TY2hlbWE7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUZ1bmN0aW9uID0gLypAX19QVVJFX18qLyBjb3JlLiRjb25zdHJ1Y3RvcihcIlpvZE1pbmlGdW5jdGlvblwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kRnVuY3Rpb24uaW5pdChpbnN0LCBkZWYpO1xuICAgIFpvZE1pbmlUeXBlLmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiBfZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RNaW5pRnVuY3Rpb24oe1xuICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgIGlucHV0OiBBcnJheS5pc0FycmF5KHBhcmFtcz8uaW5wdXQpID8gdHVwbGUocGFyYW1zPy5pbnB1dCkgOiAocGFyYW1zPy5pbnB1dCA/PyBhcnJheSh1bmtub3duKCkpKSxcbiAgICAgICAgb3V0cHV0OiBwYXJhbXM/Lm91dHB1dCA/PyB1bmtub3duKCksXG4gICAgfSk7XG59XG5leHBvcnQgeyBfZnVuY3Rpb24gYXMgZnVuY3Rpb24gfTtcbiIsICJleHBvcnQgeyBfbHQgYXMgbHQsIF9sdGUgYXMgbHRlLCBfbHRlIGFzIG1heGltdW0sIF9ndCBhcyBndCwgX2d0ZSBhcyBndGUsIF9ndGUgYXMgbWluaW11bSwgX3Bvc2l0aXZlIGFzIHBvc2l0aXZlLCBfbmVnYXRpdmUgYXMgbmVnYXRpdmUsIF9ub25wb3NpdGl2ZSBhcyBub25wb3NpdGl2ZSwgX25vbm5lZ2F0aXZlIGFzIG5vbm5lZ2F0aXZlLCBfbXVsdGlwbGVPZiBhcyBtdWx0aXBsZU9mLCBfbWF4U2l6ZSBhcyBtYXhTaXplLCBfbWluU2l6ZSBhcyBtaW5TaXplLCBfc2l6ZSBhcyBzaXplLCBfbWF4TGVuZ3RoIGFzIG1heExlbmd0aCwgX21pbkxlbmd0aCBhcyBtaW5MZW5ndGgsIF9sZW5ndGggYXMgbGVuZ3RoLCBfcmVnZXggYXMgcmVnZXgsIF9sb3dlcmNhc2UgYXMgbG93ZXJjYXNlLCBfdXBwZXJjYXNlIGFzIHVwcGVyY2FzZSwgX2luY2x1ZGVzIGFzIGluY2x1ZGVzLCBfc3RhcnRzV2l0aCBhcyBzdGFydHNXaXRoLCBfZW5kc1dpdGggYXMgZW5kc1dpdGgsIF9wcm9wZXJ0eSBhcyBwcm9wZXJ0eSwgX21pbWUgYXMgbWltZSwgX292ZXJ3cml0ZSBhcyBvdmVyd3JpdGUsIF9ub3JtYWxpemUgYXMgbm9ybWFsaXplLCBfdHJpbSBhcyB0cmltLCBfdG9Mb3dlckNhc2UgYXMgdG9Mb3dlckNhc2UsIF90b1VwcGVyQ2FzZSBhcyB0b1VwcGVyQ2FzZSwgfSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xuIiwgImltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4uL2NvcmUvaW5kZXguanNcIjtcbmltcG9ydCAqIGFzIHNjaGVtYXMgZnJvbSBcIi4vc2NoZW1hcy5qc1wiO1xuZXhwb3J0IGNvbnN0IFpvZE1pbmlJU09EYXRlVGltZSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pSVNPRGF0ZVRpbWVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZElTT0RhdGVUaW1lLmluaXQoaW5zdCwgZGVmKTtcbiAgICBzY2hlbWFzLlpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGV0aW1lKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9pc29EYXRlVGltZShab2RNaW5pSVNPRGF0ZVRpbWUsIHBhcmFtcyk7XG59XG5leHBvcnQgY29uc3QgWm9kTWluaUlTT0RhdGUgPSAvKkBfX1BVUkVfXyovIGNvcmUuJGNvbnN0cnVjdG9yKFwiWm9kTWluaUlTT0RhdGVcIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZElTT0RhdGUuaW5pdChpbnN0LCBkZWYpO1xuICAgIHNjaGVtYXMuWm9kTWluaVN0cmluZ0Zvcm1hdC5pbml0KGluc3QsIGRlZik7XG59KTtcbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5leHBvcnQgZnVuY3Rpb24gZGF0ZShwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5faXNvRGF0ZShab2RNaW5pSVNPRGF0ZSwgcGFyYW1zKTtcbn1cbmV4cG9ydCBjb25zdCBab2RNaW5pSVNPVGltZSA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pSVNPVGltZVwiLCAoaW5zdCwgZGVmKSA9PiB7XG4gICAgY29yZS4kWm9kSVNPVGltZS5pbml0KGluc3QsIGRlZik7XG4gICAgc2NoZW1hcy5ab2RNaW5pU3RyaW5nRm9ybWF0LmluaXQoaW5zdCwgZGVmKTtcbn0pO1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmV4cG9ydCBmdW5jdGlvbiB0aW1lKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9pc29UaW1lKFpvZE1pbmlJU09UaW1lLCBwYXJhbXMpO1xufVxuZXhwb3J0IGNvbnN0IFpvZE1pbmlJU09EdXJhdGlvbiA9IC8qQF9fUFVSRV9fKi8gY29yZS4kY29uc3RydWN0b3IoXCJab2RNaW5pSVNPRHVyYXRpb25cIiwgKGluc3QsIGRlZikgPT4ge1xuICAgIGNvcmUuJFpvZElTT0R1cmF0aW9uLmluaXQoaW5zdCwgZGVmKTtcbiAgICBzY2hlbWFzLlpvZE1pbmlTdHJpbmdGb3JtYXQuaW5pdChpbnN0LCBkZWYpO1xufSk7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGR1cmF0aW9uKHBhcmFtcykge1xuICAgIHJldHVybiBjb3JlLl9pc29EdXJhdGlvbihab2RNaW5pSVNPRHVyYXRpb24sIHBhcmFtcyk7XG59XG4iLCAiaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgc2NoZW1hcyBmcm9tIFwiLi9zY2hlbWFzLmpzXCI7XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZyhwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY29lcmNlZFN0cmluZyhzY2hlbWFzLlpvZE1pbmlTdHJpbmcsIHBhcmFtcyk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIG51bWJlcihwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY29lcmNlZE51bWJlcihzY2hlbWFzLlpvZE1pbmlOdW1iZXIsIHBhcmFtcyk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW4ocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2NvZXJjZWRCb29sZWFuKHNjaGVtYXMuWm9kTWluaUJvb2xlYW4sIHBhcmFtcyk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGJpZ2ludChwYXJhbXMpIHtcbiAgICByZXR1cm4gY29yZS5fY29lcmNlZEJpZ2ludChzY2hlbWFzLlpvZE1pbmlCaWdJbnQsIHBhcmFtcyk7XG59XG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGUocGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvcmUuX2NvZXJjZWREYXRlKHNjaGVtYXMuWm9kTWluaURhdGUsIHBhcmFtcyk7XG59XG4iLCAiZXhwb3J0ICogYXMgY29yZSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2UuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NoZWNrcy5qc1wiO1xuZXhwb3J0IHsgZ2xvYmFsUmVnaXN0cnksIHJlZ2lzdHJ5LCBjb25maWcsICRvdXRwdXQsICRpbnB1dCwgJGJyYW5kLCBjbG9uZSwgcmVnZXhlcywgdHJlZWlmeUVycm9yLCBwcmV0dGlmeUVycm9yLCBmb3JtYXRFcnJvciwgZmxhdHRlbkVycm9yLCBUaW1lUHJlY2lzaW9uLCB1dGlsLCBORVZFUiwgfSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xuZXhwb3J0IHsgdG9KU09OU2NoZW1hIH0gZnJvbSBcIi4uL2NvcmUvanNvbi1zY2hlbWEtcHJvY2Vzc29ycy5qc1wiO1xuZXhwb3J0ICogYXMgbG9jYWxlcyBmcm9tIFwiLi4vbG9jYWxlcy9pbmRleC5qc1wiO1xuLyoqIEEgc3BlY2lhbCBjb25zdGFudCB3aXRoIHR5cGUgYG5ldmVyYCAqL1xuLy8gZXhwb3J0IGNvbnN0IE5FVkVSID0ge30gYXMgbmV2ZXI7XG4vLyBpc29cbmV4cG9ydCAqIGFzIGlzbyBmcm9tIFwiLi9pc28uanNcIjtcbmV4cG9ydCB7IFpvZE1pbmlJU09EYXRlVGltZSwgWm9kTWluaUlTT0RhdGUsIFpvZE1pbmlJU09UaW1lLCBab2RNaW5pSVNPRHVyYXRpb24sIH0gZnJvbSBcIi4vaXNvLmpzXCI7XG4vLyBjb2VyY2VcbmV4cG9ydCAqIGFzIGNvZXJjZSBmcm9tIFwiLi9jb2VyY2UuanNcIjtcbiIsICJpbXBvcnQgKiBhcyB6IGZyb20gXCIuLi92NC9taW5pL2V4dGVybmFsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi4vdjQvbWluaS9leHRlcm5hbC5qc1wiO1xuZXhwb3J0IHsgeiB9O1xuIiwgbnVsbCwgbnVsbCwgImV4cG9ydCBjb25zdCBpZ25vcmVPdmVycmlkZSA9IFN5bWJvbChcIkxldCB6b2RUb0pzb25TY2hlbWEgZGVjaWRlIG9uIHdoaWNoIHBhcnNlciB0byB1c2VcIik7XG5leHBvcnQgY29uc3QganNvbkRlc2NyaXB0aW9uID0gKGpzb25TY2hlbWEsIGRlZikgPT4ge1xuICAgIGlmIChkZWYuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uanNvblNjaGVtYSxcbiAgICAgICAgICAgICAgICAuLi5KU09OLnBhcnNlKGRlZi5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHsgfVxuICAgIH1cbiAgICByZXR1cm4ganNvblNjaGVtYTtcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICRyZWZTdHJhdGVneTogXCJyb290XCIsXG4gICAgYmFzZVBhdGg6IFtcIiNcIl0sXG4gICAgZWZmZWN0U3RyYXRlZ3k6IFwiaW5wdXRcIixcbiAgICBwaXBlU3RyYXRlZ3k6IFwiYWxsXCIsXG4gICAgZGF0ZVN0cmF0ZWd5OiBcImZvcm1hdDpkYXRlLXRpbWVcIixcbiAgICBtYXBTdHJhdGVneTogXCJlbnRyaWVzXCIsXG4gICAgcmVtb3ZlQWRkaXRpb25hbFN0cmF0ZWd5OiBcInBhc3N0aHJvdWdoXCIsXG4gICAgYWxsb3dlZEFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB0cnVlLFxuICAgIHJlamVjdGVkQWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgIGRlZmluaXRpb25QYXRoOiBcImRlZmluaXRpb25zXCIsXG4gICAgdGFyZ2V0OiBcImpzb25TY2hlbWE3XCIsXG4gICAgc3RyaWN0VW5pb25zOiBmYWxzZSxcbiAgICBkZWZpbml0aW9uczoge30sXG4gICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgbWFya2Rvd25EZXNjcmlwdGlvbjogZmFsc2UsXG4gICAgcGF0dGVyblN0cmF0ZWd5OiBcImVzY2FwZVwiLFxuICAgIGFwcGx5UmVnZXhGbGFnczogZmFsc2UsXG4gICAgZW1haWxTdHJhdGVneTogXCJmb3JtYXQ6ZW1haWxcIixcbiAgICBiYXNlNjRTdHJhdGVneTogXCJjb250ZW50RW5jb2Rpbmc6YmFzZTY0XCIsXG4gICAgbmFtZVN0cmF0ZWd5OiBcInJlZlwiLFxuICAgIG9wZW5BaUFueVR5cGVOYW1lOiBcIk9wZW5BaUFueVR5cGVcIlxufTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0T3B0aW9ucyA9IChvcHRpb25zKSA9PiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCJcbiAgICA/IHtcbiAgICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIG5hbWU6IG9wdGlvbnMsXG4gICAgfVxuICAgIDoge1xuICAgICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiIsICJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL09wdGlvbnMuanNcIjtcbmV4cG9ydCBjb25zdCBnZXRSZWZzID0gKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBfb3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gX29wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gWy4uLl9vcHRpb25zLmJhc2VQYXRoLCBfb3B0aW9ucy5kZWZpbml0aW9uUGF0aCwgX29wdGlvbnMubmFtZV1cbiAgICAgICAgOiBfb3B0aW9ucy5iYXNlUGF0aDtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5fb3B0aW9ucyxcbiAgICAgICAgZmxhZ3M6IHsgaGFzUmVmZXJlbmNlZE9wZW5BaUFueVR5cGU6IGZhbHNlIH0sXG4gICAgICAgIGN1cnJlbnRQYXRoOiBjdXJyZW50UGF0aCxcbiAgICAgICAgcHJvcGVydHlQYXRoOiB1bmRlZmluZWQsXG4gICAgICAgIHNlZW46IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoX29wdGlvbnMuZGVmaW5pdGlvbnMpLm1hcCgoW25hbWUsIGRlZl0pID0+IFtcbiAgICAgICAgICAgIGRlZi5fZGVmLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlZjogZGVmLl9kZWYsXG4gICAgICAgICAgICAgICAgcGF0aDogWy4uLl9vcHRpb25zLmJhc2VQYXRoLCBfb3B0aW9ucy5kZWZpbml0aW9uUGF0aCwgbmFtZV0sXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x1dGlvbiBvZiByZWZlcmVuY2VzIHdpbGwgYmUgZm9yY2VkIGV2ZW4gdGhvdWdoIHNlZW4sIHNvIGl0J3Mgb2sgdGhhdCB0aGUgc2NoZW1hIGlzIHVuZGVmaW5lZCBoZXJlIGZvciBub3cuXG4gICAgICAgICAgICAgICAganNvblNjaGVtYTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSkpLFxuICAgIH07XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBhZGRFcnJvck1lc3NhZ2UocmVzLCBrZXksIGVycm9yTWVzc2FnZSwgcmVmcykge1xuICAgIGlmICghcmVmcz8uZXJyb3JNZXNzYWdlcylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgcmVzLmVycm9yTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIC4uLnJlcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBba2V5XTogZXJyb3JNZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywga2V5LCB2YWx1ZSwgZXJyb3JNZXNzYWdlLCByZWZzKSB7XG4gICAgcmVzW2tleV0gPSB2YWx1ZTtcbiAgICBhZGRFcnJvck1lc3NhZ2UocmVzLCBrZXksIGVycm9yTWVzc2FnZSwgcmVmcyk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGdldFJlbGF0aXZlUGF0aCA9IChwYXRoQSwgcGF0aEIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBwYXRoQS5sZW5ndGggJiYgaSA8IHBhdGhCLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXRoQVtpXSAhPT0gcGF0aEJbaV0pXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIFsocGF0aEEubGVuZ3RoIC0gaSkudG9TdHJpbmcoKSwgLi4ucGF0aEIuc2xpY2UoaSldLmpvaW4oXCIvXCIpO1xufTtcbiIsICJpbXBvcnQgeyBnZXRSZWxhdGl2ZVBhdGggfSBmcm9tIFwiLi4vZ2V0UmVsYXRpdmVQYXRoLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbnlEZWYocmVmcykge1xuICAgIGlmIChyZWZzLnRhcmdldCAhPT0gXCJvcGVuQWlcIikge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IGFueURlZmluaXRpb25QYXRoID0gW1xuICAgICAgICAuLi5yZWZzLmJhc2VQYXRoLFxuICAgICAgICByZWZzLmRlZmluaXRpb25QYXRoLFxuICAgICAgICByZWZzLm9wZW5BaUFueVR5cGVOYW1lLFxuICAgIF07XG4gICAgcmVmcy5mbGFncy5oYXNSZWZlcmVuY2VkT3BlbkFpQW55VHlwZSA9IHRydWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgJHJlZjogcmVmcy4kcmVmU3RyYXRlZ3kgPT09IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgPyBnZXRSZWxhdGl2ZVBhdGgoYW55RGVmaW5pdGlvblBhdGgsIHJlZnMuY3VycmVudFBhdGgpXG4gICAgICAgICAgICA6IGFueURlZmluaXRpb25QYXRoLmpvaW4oXCIvXCIpLFxuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIH0gZnJvbSBcInpvZC92M1wiO1xuaW1wb3J0IHsgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyB9IGZyb20gXCIuLi9lcnJvck1lc3NhZ2VzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXJyYXlEZWYoZGVmLCByZWZzKSB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgfTtcbiAgICBpZiAoZGVmLnR5cGU/Ll9kZWYgJiZcbiAgICAgICAgZGVmLnR5cGU/Ll9kZWY/LnR5cGVOYW1lICE9PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQW55KSB7XG4gICAgICAgIHJlcy5pdGVtcyA9IHBhcnNlRGVmKGRlZi50eXBlLl9kZWYsIHtcbiAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiaXRlbXNcIl0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGVmLm1pbkxlbmd0aCkge1xuICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtaW5JdGVtc1wiLCBkZWYubWluTGVuZ3RoLnZhbHVlLCBkZWYubWluTGVuZ3RoLm1lc3NhZ2UsIHJlZnMpO1xuICAgIH1cbiAgICBpZiAoZGVmLm1heExlbmd0aCkge1xuICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtYXhJdGVtc1wiLCBkZWYubWF4TGVuZ3RoLnZhbHVlLCBkZWYubWF4TGVuZ3RoLm1lc3NhZ2UsIHJlZnMpO1xuICAgIH1cbiAgICBpZiAoZGVmLmV4YWN0TGVuZ3RoKSB7XG4gICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1pbkl0ZW1zXCIsIGRlZi5leGFjdExlbmd0aC52YWx1ZSwgZGVmLmV4YWN0TGVuZ3RoLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtYXhJdGVtc1wiLCBkZWYuZXhhY3RMZW5ndGgudmFsdWUsIGRlZi5leGFjdExlbmd0aC5tZXNzYWdlLCByZWZzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbiIsICJpbXBvcnQgeyBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzIH0gZnJvbSBcIi4uL2Vycm9yTWVzc2FnZXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJpZ2ludERlZihkZWYsIHJlZnMpIHtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICAgIHR5cGU6IFwiaW50ZWdlclwiLFxuICAgICAgICBmb3JtYXQ6IFwiaW50NjRcIixcbiAgICB9O1xuICAgIGlmICghZGVmLmNoZWNrcylcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIGRlZi5jaGVja3MpIHtcbiAgICAgICAgc3dpdGNoIChjaGVjay5raW5kKSB7XG4gICAgICAgICAgICBjYXNlIFwibWluXCI6XG4gICAgICAgICAgICAgICAgaWYgKHJlZnMudGFyZ2V0ID09PSBcImpzb25TY2hlbWE3XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrLmluY2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyhyZXMsIFwibWluaW11bVwiLCBjaGVjay52YWx1ZSwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJleGNsdXNpdmVNaW5pbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVjay5pbmNsdXNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5leGNsdXNpdmVNaW5pbXVtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtaW5pbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWF4XCI6XG4gICAgICAgICAgICAgICAgaWYgKHJlZnMudGFyZ2V0ID09PSBcImpzb25TY2hlbWE3XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrLmluY2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyhyZXMsIFwibWF4aW11bVwiLCBjaGVjay52YWx1ZSwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJleGNsdXNpdmVNYXhpbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVjay5pbmNsdXNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5leGNsdXNpdmVNYXhpbXVtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtYXhpbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibXVsdGlwbGVPZlwiOlxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm11bHRpcGxlT2ZcIiwgY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhbkRlZigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICB9O1xufVxuIiwgImltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCcmFuZGVkRGVmKF9kZWYsIHJlZnMpIHtcbiAgICByZXR1cm4gcGFyc2VEZWYoX2RlZi50eXBlLl9kZWYsIHJlZnMpO1xufVxuIiwgImltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgY29uc3QgcGFyc2VDYXRjaERlZiA9IChkZWYsIHJlZnMpID0+IHtcbiAgICByZXR1cm4gcGFyc2VEZWYoZGVmLmlubmVyVHlwZS5fZGVmLCByZWZzKTtcbn07XG4iLCAiaW1wb3J0IHsgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyB9IGZyb20gXCIuLi9lcnJvck1lc3NhZ2VzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlRGVmKGRlZiwgcmVmcywgb3ZlcnJpZGVEYXRlU3RyYXRlZ3kpIHtcbiAgICBjb25zdCBzdHJhdGVneSA9IG92ZXJyaWRlRGF0ZVN0cmF0ZWd5ID8/IHJlZnMuZGF0ZVN0cmF0ZWd5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0cmF0ZWd5KSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW55T2Y6IHN0cmF0ZWd5Lm1hcCgoaXRlbSwgaSkgPT4gcGFyc2VEYXRlRGVmKGRlZiwgcmVmcywgaXRlbSkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgY2FzZSBcImZvcm1hdDpkYXRlLXRpbWVcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZGF0ZS10aW1lXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiZm9ybWF0OmRhdGVcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBpbnRlZ2VyRGF0ZVBhcnNlcihkZWYsIHJlZnMpO1xuICAgIH1cbn1cbmNvbnN0IGludGVnZXJEYXRlUGFyc2VyID0gKGRlZiwgcmVmcykgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCIsXG4gICAgICAgIGZvcm1hdDogXCJ1bml4LXRpbWVcIixcbiAgICB9O1xuICAgIGlmIChyZWZzLnRhcmdldCA9PT0gXCJvcGVuQXBpM1wiKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2hlY2sgb2YgZGVmLmNoZWNrcykge1xuICAgICAgICBzd2l0Y2ggKGNoZWNrLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtaW5pbXVtXCIsIGNoZWNrLnZhbHVlLCAvLyBUaGlzIGlzIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1heFwiOlxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1heGltdW1cIiwgY2hlY2sudmFsdWUsIC8vIFRoaXMgaXMgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi4vcGFyc2VEZWYuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURlZmF1bHREZWYoX2RlZiwgcmVmcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBhcnNlRGVmKF9kZWYuaW5uZXJUeXBlLl9kZWYsIHJlZnMpLFxuICAgICAgICBkZWZhdWx0OiBfZGVmLmRlZmF1bHRWYWx1ZSgpLFxuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi4vcGFyc2VEZWYuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGVmIH0gZnJvbSBcIi4vYW55LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFZmZlY3RzRGVmKF9kZWYsIHJlZnMpIHtcbiAgICByZXR1cm4gcmVmcy5lZmZlY3RTdHJhdGVneSA9PT0gXCJpbnB1dFwiXG4gICAgICAgID8gcGFyc2VEZWYoX2RlZi5zY2hlbWEuX2RlZiwgcmVmcylcbiAgICAgICAgOiBwYXJzZUFueURlZihyZWZzKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gcGFyc2VFbnVtRGVmKGRlZikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIGVudW06IEFycmF5LmZyb20oZGVmLnZhbHVlcyksXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuY29uc3QgaXNKc29uU2NoZW1hN0FsbE9mVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgaWYgKFwidHlwZVwiIGluIHR5cGUgJiYgdHlwZS50eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIFwiYWxsT2ZcIiBpbiB0eXBlO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUludGVyc2VjdGlvbkRlZihkZWYsIHJlZnMpIHtcbiAgICBjb25zdCBhbGxPZiA9IFtcbiAgICAgICAgcGFyc2VEZWYoZGVmLmxlZnQuX2RlZiwge1xuICAgICAgICAgICAgLi4ucmVmcyxcbiAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJhbGxPZlwiLCBcIjBcIl0sXG4gICAgICAgIH0pLFxuICAgICAgICBwYXJzZURlZihkZWYucmlnaHQuX2RlZiwge1xuICAgICAgICAgICAgLi4ucmVmcyxcbiAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJhbGxPZlwiLCBcIjFcIl0sXG4gICAgICAgIH0pLFxuICAgIF0uZmlsdGVyKCh4KSA9PiAhIXgpO1xuICAgIGxldCB1bmV2YWx1YXRlZFByb3BlcnRpZXMgPSByZWZzLnRhcmdldCA9PT0gXCJqc29uU2NoZW1hMjAxOS0wOVwiXG4gICAgICAgID8geyB1bmV2YWx1YXRlZFByb3BlcnRpZXM6IGZhbHNlIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbWVyZ2VkQWxsT2YgPSBbXTtcbiAgICAvLyBJZiBlaXRoZXIgb2YgdGhlIHNjaGVtYXMgaXMgYW4gYWxsT2YsIG1lcmdlIHRoZW0gaW50byBhIHNpbmdsZSBhbGxPZlxuICAgIGFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoaXNKc29uU2NoZW1hN0FsbE9mVHlwZShzY2hlbWEpKSB7XG4gICAgICAgICAgICBtZXJnZWRBbGxPZi5wdXNoKC4uLnNjaGVtYS5hbGxPZik7XG4gICAgICAgICAgICBpZiAoc2NoZW1hLnVuZXZhbHVhdGVkUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzY2hlbWFzIGhhcyBubyB1bmV2YWx1YXRlZFByb3BlcnRpZXMgc2V0LFxuICAgICAgICAgICAgICAgIC8vIHRoZSBtZXJnZWQgc2NoZW1hIHNob3VsZCBhbHNvIGhhdmUgbm8gdW5ldmFsdWF0ZWRQcm9wZXJ0aWVzIHNldFxuICAgICAgICAgICAgICAgIHVuZXZhbHVhdGVkUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRTY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgICAgICBpZiAoXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiIGluIHNjaGVtYSAmJlxuICAgICAgICAgICAgICAgIHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLCAuLi5yZXN0IH0gPSBzY2hlbWE7XG4gICAgICAgICAgICAgICAgbmVzdGVkU2NoZW1hID0gcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFzIHNvb24gYXMgb25lIG9mIHRoZSBzY2hlbWFzIGhhcyBhZGRpdGlvbmFsUHJvcGVydGllcyBzZXQgbm90IHRvIGZhbHNlLCB3ZSBhbGxvdyB1bmV2YWx1YXRlZFByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICB1bmV2YWx1YXRlZFByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXJnZWRBbGxPZi5wdXNoKG5lc3RlZFNjaGVtYSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWVyZ2VkQWxsT2YubGVuZ3RoXG4gICAgICAgID8ge1xuICAgICAgICAgICAgYWxsT2Y6IG1lcmdlZEFsbE9mLFxuICAgICAgICAgICAgLi4udW5ldmFsdWF0ZWRQcm9wZXJ0aWVzLFxuICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpdGVyYWxEZWYoZGVmLCByZWZzKSB7XG4gICAgY29uc3QgcGFyc2VkVHlwZSA9IHR5cGVvZiBkZWYudmFsdWU7XG4gICAgaWYgKHBhcnNlZFR5cGUgIT09IFwiYmlnaW50XCIgJiZcbiAgICAgICAgcGFyc2VkVHlwZSAhPT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBwYXJzZWRUeXBlICE9PSBcImJvb2xlYW5cIiAmJlxuICAgICAgICBwYXJzZWRUeXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheS5pc0FycmF5KGRlZi52YWx1ZSkgPyBcImFycmF5XCIgOiBcIm9iamVjdFwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAocmVmcy50YXJnZXQgPT09IFwib3BlbkFwaTNcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogcGFyc2VkVHlwZSA9PT0gXCJiaWdpbnRcIiA/IFwiaW50ZWdlclwiIDogcGFyc2VkVHlwZSxcbiAgICAgICAgICAgIGVudW06IFtkZWYudmFsdWVdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBwYXJzZWRUeXBlID09PSBcImJpZ2ludFwiID8gXCJpbnRlZ2VyXCIgOiBwYXJzZWRUeXBlLFxuICAgICAgICBjb25zdDogZGVmLnZhbHVlLFxuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyB9IGZyb20gXCIuLi9lcnJvck1lc3NhZ2VzLmpzXCI7XG5sZXQgZW1vamlSZWdleCA9IHVuZGVmaW5lZDtcbi8qKlxuICogR2VuZXJhdGVkIGZyb20gdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm91bmQgaGVyZSBhcyBvZiAyMDI0LTA1LTIyOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2NvbGluaGFja3Mvem9kL2Jsb2IvbWFzdGVyL3NyYy90eXBlcy50cy5cbiAqXG4gKiBFeHByZXNzaW9ucyB3aXRoIC9pIGZsYWcgaGF2ZSBiZWVuIGNoYW5nZWQgYWNjb3JkaW5nbHkuXG4gKi9cbmV4cG9ydCBjb25zdCB6b2RQYXR0ZXJucyA9IHtcbiAgICAvKipcbiAgICAgKiBgY2Agd2FzIGNoYW5nZWQgdG8gYFtjQ11gIHRvIHJlcGxpY2F0ZSAvaSBmbGFnXG4gICAgICovXG4gICAgY3VpZDogL15bY0NdW15cXHMtXXs4LH0kLyxcbiAgICBjdWlkMjogL15bMC05YS16XSskLyxcbiAgICB1bGlkOiAvXlswLTlBLUhKS01OUC1UVi1aXXsyNn0kLyxcbiAgICAvKipcbiAgICAgKiBgYS16YCB3YXMgYWRkZWQgdG8gcmVwbGljYXRlIC9pIGZsYWdcbiAgICAgKi9cbiAgICBlbWFpbDogL14oPyFcXC4pKD8hLipcXC5cXC4pKFthLXpBLVowLTlfJytcXC1cXC5dKilbYS16QS1aMC05XystXUAoW2EtekEtWjAtOV1bYS16QS1aMC05XFwtXSpcXC4pK1thLXpBLVpdezIsfSQvLFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdGVkIGEgdmFsaWQgVW5pY29kZSBSZWdFeHBcbiAgICAgKlxuICAgICAqIExhemlseSBpbnN0YW50aWF0ZSBzaW5jZSB0aGlzIHR5cGUgb2YgcmVnZXggaXNuJ3Qgc3VwcG9ydGVkXG4gICAgICogaW4gYWxsIGVudnMgKGUuZy4gUmVhY3QgTmF0aXZlKS5cbiAgICAgKlxuICAgICAqIFNlZTpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy96b2QvaXNzdWVzLzI0MzNcbiAgICAgKiBGaXggaW4gWm9kOlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL3pvZC9jb21taXQvOTM0MGZkNTFlNDg1NzZhNzVhZGM5MTliZmY2NWRiYzRhNWQ0Yzk5YlxuICAgICAqL1xuICAgIGVtb2ppOiAoKSA9PiB7XG4gICAgICAgIGlmIChlbW9qaVJlZ2V4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVtb2ppUmVnZXggPSBSZWdFeHAoXCJeKFxcXFxwe0V4dGVuZGVkX1BpY3RvZ3JhcGhpY318XFxcXHB7RW1vamlfQ29tcG9uZW50fSkrJFwiLCBcInVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVtb2ppUmVnZXg7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbnVzZWRcbiAgICAgKi9cbiAgICB1dWlkOiAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvLFxuICAgIC8qKlxuICAgICAqIFVudXNlZFxuICAgICAqL1xuICAgIGlwdjQ6IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pJC8sXG4gICAgaXB2NENpZHI6IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwvKDNbMC0yXXxbMTJdP1swLTldKSQvLFxuICAgIC8qKlxuICAgICAqIFVudXNlZFxuICAgICAqL1xuICAgIGlwdjY6IC9eKChbYS1mMC05XXsxLDR9Oil7N318OjooW2EtZjAtOV17MSw0fTopezAsNn18KFthLWYwLTldezEsNH06KXsxfTooW2EtZjAtOV17MSw0fTopezAsNX18KFthLWYwLTldezEsNH06KXsyfTooW2EtZjAtOV17MSw0fTopezAsNH18KFthLWYwLTldezEsNH06KXszfTooW2EtZjAtOV17MSw0fTopezAsM318KFthLWYwLTldezEsNH06KXs0fTooW2EtZjAtOV17MSw0fTopezAsMn18KFthLWYwLTldezEsNH06KXs1fTooW2EtZjAtOV17MSw0fTopezAsMX0pKFthLWYwLTldezEsNH18KCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpKSQvLFxuICAgIGlwdjZDaWRyOiAvXigoWzAtOWEtZkEtRl17MSw0fTopezcsN31bMC05YS1mQS1GXXsxLDR9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw3fTp8KFswLTlhLWZBLUZdezEsNH06KXsxLDZ9OlswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDV9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDJ9fChbMC05YS1mQS1GXXsxLDR9Oil7MSw0fSg6WzAtOWEtZkEtRl17MSw0fSl7MSwzfXwoWzAtOWEtZkEtRl17MSw0fTopezEsM30oOlswLTlhLWZBLUZdezEsNH0pezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDJ9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDV9fFswLTlhLWZBLUZdezEsNH06KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw2fSl8OigoOlswLTlhLWZBLUZdezEsNH0pezEsN318Oil8ZmU4MDooOlswLTlhLWZBLUZdezAsNH0pezAsNH0lWzAtOWEtekEtWl17MSx9fDo6KGZmZmYoOjB7MSw0fSl7MCwxfTopezAsMX0oKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSl8KFswLTlhLWZBLUZdezEsNH06KXsxLDR9OigoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKSlcXC8oMTJbMC04XXwxWzAxXVswLTldfFsxLTldP1swLTldKSQvLFxuICAgIGJhc2U2NDogL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvLFxuICAgIGJhc2U2NHVybDogL14oWzAtOWEtekEtWi1fXXs0fSkqKChbMC05YS16QS1aLV9dezJ9KD09KT8pfChbMC05YS16QS1aLV9dezN9KD0pPykpPyQvLFxuICAgIG5hbm9pZDogL15bYS16QS1aMC05Xy1dezIxfSQvLFxuICAgIGp3dDogL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLyxcbn07XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdEZWYoZGVmLCByZWZzKSB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIH07XG4gICAgaWYgKGRlZi5jaGVja3MpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiBkZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGNoZWNrLmtpbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibWluXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1pbkxlbmd0aFwiLCB0eXBlb2YgcmVzLm1pbkxlbmd0aCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heChyZXMubWluTGVuZ3RoLCBjaGVjay52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWF4XCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1heExlbmd0aFwiLCB0eXBlb2YgcmVzLm1heExlbmd0aCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihyZXMubWF4TGVuZ3RoLCBjaGVjay52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZWZzLmVtYWlsU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb3JtYXQ6ZW1haWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImVtYWlsXCIsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvcm1hdDppZG4tZW1haWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImlkbi1lbWFpbFwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXR0ZXJuOnpvZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFBhdHRlcm4ocmVzLCB6b2RQYXR0ZXJucy5lbWFpbCwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVybFwiOlxuICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcInVyaVwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInV1aWRcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkRm9ybWF0KHJlcywgXCJ1dWlkXCIsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVnZXhcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIGNoZWNrLnJlZ2V4LCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImN1aWRcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmN1aWQsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3VpZDJcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmN1aWQyLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0c1dpdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIFJlZ0V4cChgXiR7ZXNjYXBlTGl0ZXJhbENoZWNrVmFsdWUoY2hlY2sudmFsdWUsIHJlZnMpfWApLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZHNXaXRoXCI6XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhdHRlcm4ocmVzLCBSZWdFeHAoYCR7ZXNjYXBlTGl0ZXJhbENoZWNrVmFsdWUoY2hlY2sudmFsdWUsIHJlZnMpfSRgKSwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxuICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImRhdGUtdGltZVwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkRm9ybWF0KHJlcywgXCJkYXRlXCIsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcInRpbWVcIiwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkdXJhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImR1cmF0aW9uXCIsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1pbkxlbmd0aFwiLCB0eXBlb2YgcmVzLm1pbkxlbmd0aCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heChyZXMubWluTGVuZ3RoLCBjaGVjay52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtYXhMZW5ndGhcIiwgdHlwZW9mIHJlcy5tYXhMZW5ndGggPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5taW4ocmVzLm1heExlbmd0aCwgY2hlY2sudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImluY2x1ZGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIFJlZ0V4cChlc2NhcGVMaXRlcmFsQ2hlY2tWYWx1ZShjaGVjay52YWx1ZSwgcmVmcykpLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJpcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVjay52ZXJzaW9uICE9PSBcInY2XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEZvcm1hdChyZXMsIFwiaXB2NFwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2sudmVyc2lvbiAhPT0gXCJ2NFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImlwdjZcIiwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlNjR1cmxcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmJhc2U2NHVybCwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJqd3RcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmp3dCwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjaWRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrLnZlcnNpb24gIT09IFwidjZcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmlwdjRDaWRyLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2sudmVyc2lvbiAhPT0gXCJ2NFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQYXR0ZXJuKHJlcywgem9kUGF0dGVybnMuaXB2NkNpZHIsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZW1vamlcIjpcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLmVtb2ppKCksIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidWxpZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFBhdHRlcm4ocmVzLCB6b2RQYXR0ZXJucy51bGlkLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlNjRcIjoge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlZnMuYmFzZTY0U3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb3JtYXQ6YmluYXJ5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRGb3JtYXQocmVzLCBcImJpbmFyeVwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb250ZW50RW5jb2Rpbmc6YmFzZTY0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJjb250ZW50RW5jb2RpbmdcIiwgXCJiYXNlNjRcIiwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGF0dGVybjp6b2RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFBhdHRlcm4ocmVzLCB6b2RQYXR0ZXJucy5iYXNlNjQsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwibmFub2lkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGF0dGVybihyZXMsIHpvZFBhdHRlcm5zLm5hbm9pZCwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b0xvd2VyQ2FzZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b1VwcGVyQ2FzZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmltXCI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICgoXykgPT4geyB9KShjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGVzY2FwZUxpdGVyYWxDaGVja1ZhbHVlKGxpdGVyYWwsIHJlZnMpIHtcbiAgICByZXR1cm4gcmVmcy5wYXR0ZXJuU3RyYXRlZ3kgPT09IFwiZXNjYXBlXCJcbiAgICAgICAgPyBlc2NhcGVOb25BbHBoYU51bWVyaWMobGl0ZXJhbClcbiAgICAgICAgOiBsaXRlcmFsO1xufVxuY29uc3QgQUxQSEFfTlVNRVJJQyA9IG5ldyBTZXQoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnh5ejAxMjM0NTY3ODlcIik7XG5mdW5jdGlvbiBlc2NhcGVOb25BbHBoYU51bWVyaWMoc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFBTFBIQV9OVU1FUklDLmhhcyhzb3VyY2VbaV0pKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCJcXFxcXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHNvdXJjZVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIEFkZHMgYSBcImZvcm1hdFwiIGtleXdvcmQgdG8gdGhlIHNjaGVtYS4gSWYgYSBmb3JtYXQgZXhpc3RzLCBib3RoIGZvcm1hdHMgd2lsbCBiZSBqb2luZWQgaW4gYW4gYWxsT2Ytbm9kZSwgYWxvbmcgd2l0aCBzdWJzZXF1ZW50IG9uZXMuXG5mdW5jdGlvbiBhZGRGb3JtYXQoc2NoZW1hLCB2YWx1ZSwgbWVzc2FnZSwgcmVmcykge1xuICAgIGlmIChzY2hlbWEuZm9ybWF0IHx8IHNjaGVtYS5hbnlPZj8uc29tZSgoeCkgPT4geC5mb3JtYXQpKSB7XG4gICAgICAgIGlmICghc2NoZW1hLmFueU9mKSB7XG4gICAgICAgICAgICBzY2hlbWEuYW55T2YgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZW1hLmZvcm1hdCkge1xuICAgICAgICAgICAgc2NoZW1hLmFueU9mLnB1c2goe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogc2NoZW1hLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAuLi4oc2NoZW1hLmVycm9yTWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICByZWZzLmVycm9yTWVzc2FnZXMgJiYge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHsgZm9ybWF0OiBzY2hlbWEuZXJyb3JNZXNzYWdlLmZvcm1hdCB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGUgc2NoZW1hLmZvcm1hdDtcbiAgICAgICAgICAgIGlmIChzY2hlbWEuZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNjaGVtYS5lcnJvck1lc3NhZ2UuZm9ybWF0O1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzY2hlbWEuZXJyb3JNZXNzYWdlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjaGVtYS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjaGVtYS5hbnlPZi5wdXNoKHtcbiAgICAgICAgICAgIGZvcm1hdDogdmFsdWUsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgIHJlZnMuZXJyb3JNZXNzYWdlcyAmJiB7IGVycm9yTWVzc2FnZTogeyBmb3JtYXQ6IG1lc3NhZ2UgfSB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHNjaGVtYSwgXCJmb3JtYXRcIiwgdmFsdWUsIG1lc3NhZ2UsIHJlZnMpO1xuICAgIH1cbn1cbi8vIEFkZHMgYSBcInBhdHRlcm5cIiBrZXl3b3JkIHRvIHRoZSBzY2hlbWEuIElmIGEgcGF0dGVybiBleGlzdHMsIGJvdGggcGF0dGVybnMgd2lsbCBiZSBqb2luZWQgaW4gYW4gYWxsT2Ytbm9kZSwgYWxvbmcgd2l0aCBzdWJzZXF1ZW50IG9uZXMuXG5mdW5jdGlvbiBhZGRQYXR0ZXJuKHNjaGVtYSwgcmVnZXgsIG1lc3NhZ2UsIHJlZnMpIHtcbiAgICBpZiAoc2NoZW1hLnBhdHRlcm4gfHwgc2NoZW1hLmFsbE9mPy5zb21lKCh4KSA9PiB4LnBhdHRlcm4pKSB7XG4gICAgICAgIGlmICghc2NoZW1hLmFsbE9mKSB7XG4gICAgICAgICAgICBzY2hlbWEuYWxsT2YgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZW1hLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHNjaGVtYS5hbGxPZi5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBzY2hlbWEucGF0dGVybixcbiAgICAgICAgICAgICAgICAuLi4oc2NoZW1hLmVycm9yTWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICByZWZzLmVycm9yTWVzc2FnZXMgJiYge1xuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHsgcGF0dGVybjogc2NoZW1hLmVycm9yTWVzc2FnZS5wYXR0ZXJuIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzY2hlbWEucGF0dGVybjtcbiAgICAgICAgICAgIGlmIChzY2hlbWEuZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNjaGVtYS5lcnJvck1lc3NhZ2UucGF0dGVybjtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2NoZW1hLmVycm9yTWVzc2FnZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY2hlbWEuZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY2hlbWEuYWxsT2YucHVzaCh7XG4gICAgICAgICAgICBwYXR0ZXJuOiBzdHJpbmdpZnlSZWdFeHBXaXRoRmxhZ3MocmVnZXgsIHJlZnMpLFxuICAgICAgICAgICAgLi4uKG1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICByZWZzLmVycm9yTWVzc2FnZXMgJiYgeyBlcnJvck1lc3NhZ2U6IHsgcGF0dGVybjogbWVzc2FnZSB9IH0pLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMoc2NoZW1hLCBcInBhdHRlcm5cIiwgc3RyaW5naWZ5UmVnRXhwV2l0aEZsYWdzKHJlZ2V4LCByZWZzKSwgbWVzc2FnZSwgcmVmcyk7XG4gICAgfVxufVxuLy8gTXV0YXRlIHouc3RyaW5nLnJlZ2V4KCkgaW4gYSBiZXN0IGF0dGVtcHQgdG8gYWNjb21tb2RhdGUgZm9yIHJlZ2V4IGZsYWdzIHdoZW4gYXBwbHlSZWdleEZsYWdzIGlzIHRydWVcbmZ1bmN0aW9uIHN0cmluZ2lmeVJlZ0V4cFdpdGhGbGFncyhyZWdleCwgcmVmcykge1xuICAgIGlmICghcmVmcy5hcHBseVJlZ2V4RmxhZ3MgfHwgIXJlZ2V4LmZsYWdzKSB7XG4gICAgICAgIHJldHVybiByZWdleC5zb3VyY2U7XG4gICAgfVxuICAgIC8vIEN1cnJlbnRseSBoYW5kbGVkIGZsYWdzXG4gICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICAgIGk6IHJlZ2V4LmZsYWdzLmluY2x1ZGVzKFwiaVwiKSxcbiAgICAgICAgbTogcmVnZXguZmxhZ3MuaW5jbHVkZXMoXCJtXCIpLFxuICAgICAgICBzOiByZWdleC5mbGFncy5pbmNsdWRlcyhcInNcIiksIC8vIGAuYCBtYXRjaGVzIG5ld2xpbmVzXG4gICAgfTtcbiAgICAvLyBUaGUgZ2VuZXJhbCBwcmluY2lwbGUgaGVyZSBpcyB0byBzdGVwIHRocm91Z2ggZWFjaCBjaGFyYWN0ZXIsIG9uZSBhdCBhIHRpbWUsIGFwcGx5aW5nIG11dGF0aW9ucyBhcyBmbGFncyByZXF1aXJlLiBXZSBrZWVwIHRyYWNrIHdoZW4gdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGlzIGVzY2FwZWQsIGFuZCB3aGVuIGl0J3MgaW5zaWRlIGEgZ3JvdXAgL2xpa2UgW3RoaXNdLyBvciAoYWxzbykgYSByYW5nZSBsaWtlIC9bYS16XS8uIFRoZSBmb2xsb3dpbmcgaXMgZmFpcmx5IGJyaXR0bGUgaW1wZXJhdGl2ZSBjb2RlOyBlZGl0IGF0IHlvdXIgcGVyaWwhXG4gICAgY29uc3Qgc291cmNlID0gZmxhZ3MuaSA/IHJlZ2V4LnNvdXJjZS50b0xvd2VyQ2FzZSgpIDogcmVnZXguc291cmNlO1xuICAgIGxldCBwYXR0ZXJuID0gXCJcIjtcbiAgICBsZXQgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgbGV0IGluQ2hhckdyb3VwID0gZmFsc2U7XG4gICAgbGV0IGluQ2hhclJhbmdlID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgcGF0dGVybiArPSBzb3VyY2VbaV07XG4gICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbGFncy5pKSB7XG4gICAgICAgICAgICBpZiAoaW5DaGFyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlW2ldLm1hdGNoKC9bYS16XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbkNoYXJSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzb3VyY2VbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IGAke3NvdXJjZVtpIC0gMl19LSR7c291cmNlW2ldfWAudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluQ2hhclJhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlW2kgKyAxXSA9PT0gXCItXCIgJiYgc291cmNlW2kgKyAyXT8ubWF0Y2goL1thLXpdLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc291cmNlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5DaGFyUmFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBgJHtzb3VyY2VbaV19JHtzb3VyY2VbaV0udG9VcHBlckNhc2UoKX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVtpXS5tYXRjaCgvW2Etel0vKSkge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gYFske3NvdXJjZVtpXX0ke3NvdXJjZVtpXS50b1VwcGVyQ2FzZSgpfV1gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmbGFncy5tKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlW2ldID09PSBcIl5cIikge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gYChefCg/PD1bXFxyXFxuXSkpYDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVtpXSA9PT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IGAoJHwoPz1bXFxyXFxuXSkpYDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhZ3MucyAmJiBzb3VyY2VbaV0gPT09IFwiLlwiKSB7XG4gICAgICAgICAgICBwYXR0ZXJuICs9IGluQ2hhckdyb3VwID8gYCR7c291cmNlW2ldfVxcclxcbmAgOiBgWyR7c291cmNlW2ldfVxcclxcbl1gO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiArPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChzb3VyY2VbaV0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICBpc0VzY2FwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluQ2hhckdyb3VwICYmIHNvdXJjZVtpXSA9PT0gXCJdXCIpIHtcbiAgICAgICAgICAgIGluQ2hhckdyb3VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWluQ2hhckdyb3VwICYmIHNvdXJjZVtpXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIGluQ2hhckdyb3VwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGNvbnZlcnQgcmVnZXggcGF0dGVybiBhdCAke3JlZnMuY3VycmVudFBhdGguam9pbihcIi9cIil9IHRvIGEgZmxhZy1pbmRlcGVuZGVudCBmb3JtISBGYWxsaW5nIGJhY2sgdG8gdGhlIGZsYWctaWdub3JhbnQgc291cmNlYCk7XG4gICAgICAgIHJldHVybiByZWdleC5zb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuO1xufVxuIiwgImltcG9ydCB7IFpvZEZpcnN0UGFydHlUeXBlS2luZCwgfSBmcm9tIFwiem9kL3YzXCI7XG5pbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmdEZWYgfSBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmltcG9ydCB7IHBhcnNlQnJhbmRlZERlZiB9IGZyb20gXCIuL2JyYW5kZWQuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGVmIH0gZnJvbSBcIi4vYW55LmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWNvcmREZWYoZGVmLCByZWZzKSB7XG4gICAgaWYgKHJlZnMudGFyZ2V0ID09PSBcIm9wZW5BaVwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IE9wZW5BSSBtYXkgbm90IHN1cHBvcnQgcmVjb3JkcyBpbiBzY2hlbWFzISBUcnkgYW4gYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzIGluc3RlYWQuXCIpO1xuICAgIH1cbiAgICBpZiAocmVmcy50YXJnZXQgPT09IFwib3BlbkFwaTNcIiAmJlxuICAgICAgICBkZWYua2V5VHlwZT8uX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICByZXF1aXJlZDogZGVmLmtleVR5cGUuX2RlZi52YWx1ZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBkZWYua2V5VHlwZS5fZGVmLnZhbHVlcy5yZWR1Y2UoKGFjYywga2V5KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgICBba2V5XTogcGFyc2VEZWYoZGVmLnZhbHVlVHlwZS5fZGVmLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJwcm9wZXJ0aWVzXCIsIGtleV0sXG4gICAgICAgICAgICAgICAgfSkgPz8gcGFyc2VBbnlEZWYocmVmcyksXG4gICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHJlZnMucmVqZWN0ZWRBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogcGFyc2VEZWYoZGVmLnZhbHVlVHlwZS5fZGVmLCB7XG4gICAgICAgICAgICAuLi5yZWZzLFxuICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCJdLFxuICAgICAgICB9KSA/PyByZWZzLmFsbG93ZWRBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICB9O1xuICAgIGlmIChyZWZzLnRhcmdldCA9PT0gXCJvcGVuQXBpM1wiKSB7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxuICAgIGlmIChkZWYua2V5VHlwZT8uX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZyAmJlxuICAgICAgICBkZWYua2V5VHlwZS5fZGVmLmNoZWNrcz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgLi4ua2V5VHlwZSB9ID0gcGFyc2VTdHJpbmdEZWYoZGVmLmtleVR5cGUuX2RlZiwgcmVmcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zY2hlbWEsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWVzOiBrZXlUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWYua2V5VHlwZT8uX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNjaGVtYSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZXM6IHtcbiAgICAgICAgICAgICAgICBlbnVtOiBkZWYua2V5VHlwZS5fZGVmLnZhbHVlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZi5rZXlUeXBlPy5fZGVmLnR5cGVOYW1lID09PSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQnJhbmRlZCAmJlxuICAgICAgICBkZWYua2V5VHlwZS5fZGVmLnR5cGUuX2RlZi50eXBlTmFtZSA9PT0gWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZyAmJlxuICAgICAgICBkZWYua2V5VHlwZS5fZGVmLnR5cGUuX2RlZi5jaGVja3M/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIC4uLmtleVR5cGUgfSA9IHBhcnNlQnJhbmRlZERlZihkZWYua2V5VHlwZS5fZGVmLCByZWZzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNjaGVtYSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZXM6IGtleVR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzY2hlbWE7XG59XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi4vcGFyc2VEZWYuanNcIjtcbmltcG9ydCB7IHBhcnNlUmVjb3JkRGVmIH0gZnJvbSBcIi4vcmVjb3JkLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURlZiB9IGZyb20gXCIuL2FueS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWFwRGVmKGRlZiwgcmVmcykge1xuICAgIGlmIChyZWZzLm1hcFN0cmF0ZWd5ID09PSBcInJlY29yZFwiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJlY29yZERlZihkZWYsIHJlZnMpO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gcGFyc2VEZWYoZGVmLmtleVR5cGUuX2RlZiwge1xuICAgICAgICAuLi5yZWZzLFxuICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiaXRlbXNcIiwgXCJpdGVtc1wiLCBcIjBcIl0sXG4gICAgfSkgfHwgcGFyc2VBbnlEZWYocmVmcyk7XG4gICAgY29uc3QgdmFsdWVzID0gcGFyc2VEZWYoZGVmLnZhbHVlVHlwZS5fZGVmLCB7XG4gICAgICAgIC4uLnJlZnMsXG4gICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJpdGVtc1wiLCBcIml0ZW1zXCIsIFwiMVwiXSxcbiAgICB9KSB8fCBwYXJzZUFueURlZihyZWZzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgIG1heEl0ZW1zOiAxMjUsXG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICBpdGVtczogW2tleXMsIHZhbHVlc10sXG4gICAgICAgICAgICBtaW5JdGVtczogMixcbiAgICAgICAgICAgIG1heEl0ZW1zOiAyLFxuICAgICAgICB9LFxuICAgIH07XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTmF0aXZlRW51bURlZihkZWYpIHtcbiAgICBjb25zdCBvYmplY3QgPSBkZWYudmFsdWVzO1xuICAgIGNvbnN0IGFjdHVhbEtleXMgPSBPYmplY3Qua2V5cyhkZWYudmFsdWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iamVjdFtvYmplY3Rba2V5XV0gIT09IFwibnVtYmVyXCI7XG4gICAgfSk7XG4gICAgY29uc3QgYWN0dWFsVmFsdWVzID0gYWN0dWFsS2V5cy5tYXAoKGtleSkgPT4gb2JqZWN0W2tleV0pO1xuICAgIGNvbnN0IHBhcnNlZFR5cGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGFjdHVhbFZhbHVlcy5tYXAoKHZhbHVlcykgPT4gdHlwZW9mIHZhbHVlcykpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBwYXJzZWRUeXBlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gcGFyc2VkVHlwZXNbMF0gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA/IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA6IFwibnVtYmVyXCJcbiAgICAgICAgICAgIDogW1wic3RyaW5nXCIsIFwibnVtYmVyXCJdLFxuICAgICAgICBlbnVtOiBhY3R1YWxWYWx1ZXMsXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgeyBwYXJzZUFueURlZiB9IGZyb20gXCIuL2FueS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTmV2ZXJEZWYocmVmcykge1xuICAgIHJldHVybiByZWZzLnRhcmdldCA9PT0gXCJvcGVuQWlcIlxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG5vdDogcGFyc2VBbnlEZWYoe1xuICAgICAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcIm5vdFwiXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bGxEZWYocmVmcykge1xuICAgIHJldHVybiByZWZzLnRhcmdldCA9PT0gXCJvcGVuQXBpM1wiXG4gICAgICAgID8ge1xuICAgICAgICAgICAgZW51bTogW1wibnVsbFwiXSxcbiAgICAgICAgICAgIG51bGxhYmxlOiB0cnVlLFxuICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgdHlwZTogXCJudWxsXCIsXG4gICAgICAgIH07XG59XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi4vcGFyc2VEZWYuanNcIjtcbmV4cG9ydCBjb25zdCBwcmltaXRpdmVNYXBwaW5ncyA9IHtcbiAgICBab2RTdHJpbmc6IFwic3RyaW5nXCIsXG4gICAgWm9kTnVtYmVyOiBcIm51bWJlclwiLFxuICAgIFpvZEJpZ0ludDogXCJpbnRlZ2VyXCIsXG4gICAgWm9kQm9vbGVhbjogXCJib29sZWFuXCIsXG4gICAgWm9kTnVsbDogXCJudWxsXCIsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5pb25EZWYoZGVmLCByZWZzKSB7XG4gICAgaWYgKHJlZnMudGFyZ2V0ID09PSBcIm9wZW5BcGkzXCIpXG4gICAgICAgIHJldHVybiBhc0FueU9mKGRlZiwgcmVmcyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRlZi5vcHRpb25zIGluc3RhbmNlb2YgTWFwID8gQXJyYXkuZnJvbShkZWYub3B0aW9ucy52YWx1ZXMoKSkgOiBkZWYub3B0aW9ucztcbiAgICAvLyBUaGlzIGJsb2NrcyB0cmllcyB0byBsb29rIGFoZWFkIGEgYml0IHRvIHByb2R1Y2UgbmljZXIgbG9va2luZyBzY2hlbWFzIHdpdGggdHlwZSBhcnJheSBpbnN0ZWFkIG9mIGFueU9mLlxuICAgIGlmIChvcHRpb25zLmV2ZXJ5KCh4KSA9PiB4Ll9kZWYudHlwZU5hbWUgaW4gcHJpbWl0aXZlTWFwcGluZ3MgJiZcbiAgICAgICAgKCF4Ll9kZWYuY2hlY2tzIHx8ICF4Ll9kZWYuY2hlY2tzLmxlbmd0aCkpKSB7XG4gICAgICAgIC8vIGFsbCB0eXBlcyBpbiB1bmlvbiBhcmUgcHJpbWl0aXZlIGFuZCBsYWNrIGNoZWNrcywgc28gbWlnaHQgYXMgd2VsbCBzcXVhc2ggaW50byB7dHlwZTogWy4uLl19XG4gICAgICAgIGNvbnN0IHR5cGVzID0gb3B0aW9ucy5yZWR1Y2UoKHR5cGVzLCB4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTWFwcGluZ3NbeC5fZGVmLnR5cGVOYW1lXTsgLy9DYW4gYmUgc2FmZWx5IGNhc3RlZCBkdWUgdG8gcm93IDQzXG4gICAgICAgICAgICByZXR1cm4gdHlwZSAmJiAhdHlwZXMuaW5jbHVkZXModHlwZSkgPyBbLi4udHlwZXMsIHR5cGVdIDogdHlwZXM7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLmxlbmd0aCA+IDEgPyB0eXBlcyA6IHR5cGVzWzBdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChvcHRpb25zLmV2ZXJ5KCh4KSA9PiB4Ll9kZWYudHlwZU5hbWUgPT09IFwiWm9kTGl0ZXJhbFwiICYmICF4LmRlc2NyaXB0aW9uKSkge1xuICAgICAgICAvLyBhbGwgb3B0aW9ucyBsaXRlcmFsc1xuICAgICAgICBjb25zdCB0eXBlcyA9IG9wdGlvbnMucmVkdWNlKChhY2MsIHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgeC5fZGVmLnZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmFjYywgdHlwZV07XG4gICAgICAgICAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmFjYywgXCJpbnRlZ2VyXCJdO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHguX2RlZi52YWx1ZSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uYWNjLCBcIm51bGxcIl07XG4gICAgICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGlmICh0eXBlcy5sZW5ndGggPT09IG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBhbGwgdGhlIGxpdGVyYWxzIGFyZSBwcmltaXRpdmUsIGFzIGZhciBhcyBudWxsIGNhbiBiZSBjb25zaWRlcmVkIHByaW1pdGl2ZVxuICAgICAgICAgICAgY29uc3QgdW5pcXVlVHlwZXMgPSB0eXBlcy5maWx0ZXIoKHgsIGksIGEpID0+IGEuaW5kZXhPZih4KSA9PT0gaSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHVuaXF1ZVR5cGVzLmxlbmd0aCA+IDEgPyB1bmlxdWVUeXBlcyA6IHVuaXF1ZVR5cGVzWzBdLFxuICAgICAgICAgICAgICAgIGVudW06IG9wdGlvbnMucmVkdWNlKChhY2MsIHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYy5pbmNsdWRlcyh4Ll9kZWYudmFsdWUpID8gYWNjIDogWy4uLmFjYywgeC5fZGVmLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdGlvbnMuZXZlcnkoKHgpID0+IHguX2RlZi50eXBlTmFtZSA9PT0gXCJab2RFbnVtXCIpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgZW51bTogb3B0aW9ucy5yZWR1Y2UoKGFjYywgeCkgPT4gW1xuICAgICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgICAuLi54Ll9kZWYudmFsdWVzLmZpbHRlcigoeCkgPT4gIWFjYy5pbmNsdWRlcyh4KSksXG4gICAgICAgICAgICBdLCBbXSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhc0FueU9mKGRlZiwgcmVmcyk7XG59XG5jb25zdCBhc0FueU9mID0gKGRlZiwgcmVmcykgPT4ge1xuICAgIGNvbnN0IGFueU9mID0gKGRlZi5vcHRpb25zIGluc3RhbmNlb2YgTWFwXG4gICAgICAgID8gQXJyYXkuZnJvbShkZWYub3B0aW9ucy52YWx1ZXMoKSlcbiAgICAgICAgOiBkZWYub3B0aW9ucylcbiAgICAgICAgLm1hcCgoeCwgaSkgPT4gcGFyc2VEZWYoeC5fZGVmLCB7XG4gICAgICAgIC4uLnJlZnMsXG4gICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJhbnlPZlwiLCBgJHtpfWBdLFxuICAgIH0pKVxuICAgICAgICAuZmlsdGVyKCh4KSA9PiAhIXggJiZcbiAgICAgICAgKCFyZWZzLnN0cmljdFVuaW9ucyB8fFxuICAgICAgICAgICAgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHgpLmxlbmd0aCA+IDApKSk7XG4gICAgcmV0dXJuIGFueU9mLmxlbmd0aCA/IHsgYW55T2YgfSA6IHVuZGVmaW5lZDtcbn07XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi4vcGFyc2VEZWYuanNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZU1hcHBpbmdzIH0gZnJvbSBcIi4vdW5pb24uanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bGxhYmxlRGVmKGRlZiwgcmVmcykge1xuICAgIGlmIChbXCJab2RTdHJpbmdcIiwgXCJab2ROdW1iZXJcIiwgXCJab2RCaWdJbnRcIiwgXCJab2RCb29sZWFuXCIsIFwiWm9kTnVsbFwiXS5pbmNsdWRlcyhkZWYuaW5uZXJUeXBlLl9kZWYudHlwZU5hbWUpICYmXG4gICAgICAgICghZGVmLmlubmVyVHlwZS5fZGVmLmNoZWNrcyB8fCAhZGVmLmlubmVyVHlwZS5fZGVmLmNoZWNrcy5sZW5ndGgpKSB7XG4gICAgICAgIGlmIChyZWZzLnRhcmdldCA9PT0gXCJvcGVuQXBpM1wiKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHByaW1pdGl2ZU1hcHBpbmdzW2RlZi5pbm5lclR5cGUuX2RlZi50eXBlTmFtZV0sXG4gICAgICAgICAgICAgICAgbnVsbGFibGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBbXG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlTWFwcGluZ3NbZGVmLmlubmVyVHlwZS5fZGVmLnR5cGVOYW1lXSxcbiAgICAgICAgICAgICAgICBcIm51bGxcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChyZWZzLnRhcmdldCA9PT0gXCJvcGVuQXBpM1wiKSB7XG4gICAgICAgIGNvbnN0IGJhc2UgPSBwYXJzZURlZihkZWYuaW5uZXJUeXBlLl9kZWYsIHtcbiAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGhdLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGJhc2UgJiYgXCIkcmVmXCIgaW4gYmFzZSlcbiAgICAgICAgICAgIHJldHVybiB7IGFsbE9mOiBbYmFzZV0sIG51bGxhYmxlOiB0cnVlIH07XG4gICAgICAgIHJldHVybiBiYXNlICYmIHsgLi4uYmFzZSwgbnVsbGFibGU6IHRydWUgfTtcbiAgICB9XG4gICAgY29uc3QgYmFzZSA9IHBhcnNlRGVmKGRlZi5pbm5lclR5cGUuX2RlZiwge1xuICAgICAgICAuLi5yZWZzLFxuICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiYW55T2ZcIiwgXCIwXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBiYXNlICYmIHsgYW55T2Y6IFtiYXNlLCB7IHR5cGU6IFwibnVsbFwiIH1dIH07XG59XG4iLCAiaW1wb3J0IHsgYWRkRXJyb3JNZXNzYWdlLCBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzLCB9IGZyb20gXCIuLi9lcnJvck1lc3NhZ2VzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJEZWYoZGVmLCByZWZzKSB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgIH07XG4gICAgaWYgKCFkZWYuY2hlY2tzKVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIGZvciAoY29uc3QgY2hlY2sgb2YgZGVmLmNoZWNrcykge1xuICAgICAgICBzd2l0Y2ggKGNoZWNrLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbnRcIjpcbiAgICAgICAgICAgICAgICByZXMudHlwZSA9IFwiaW50ZWdlclwiO1xuICAgICAgICAgICAgICAgIGFkZEVycm9yTWVzc2FnZShyZXMsIFwidHlwZVwiLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICBpZiAocmVmcy50YXJnZXQgPT09IFwianNvblNjaGVtYTdcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2suaW5jbHVzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtaW5pbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcImV4Y2x1c2l2ZU1pbmltdW1cIiwgY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrLmluY2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmV4Y2x1c2l2ZU1pbmltdW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1pbmltdW1cIiwgY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgICAgICBpZiAocmVmcy50YXJnZXQgPT09IFwianNvblNjaGVtYTdcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2suaW5jbHVzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzKHJlcywgXCJtYXhpbXVtXCIsIGNoZWNrLnZhbHVlLCBjaGVjay5tZXNzYWdlLCByZWZzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcImV4Y2x1c2l2ZU1heGltdW1cIiwgY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrLmluY2x1c2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmV4Y2x1c2l2ZU1heGltdW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlVmFsdWVBbmRFcnJvcnMocmVzLCBcIm1heGltdW1cIiwgY2hlY2sudmFsdWUsIGNoZWNrLm1lc3NhZ2UsIHJlZnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZU9mXCI6XG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyhyZXMsIFwibXVsdGlwbGVPZlwiLCBjaGVjay52YWx1ZSwgY2hlY2subWVzc2FnZSwgcmVmcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbiIsICJpbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT2JqZWN0RGVmKGRlZiwgcmVmcykge1xuICAgIGNvbnN0IGZvcmNlT3B0aW9uYWxJbnRvTnVsbGFibGUgPSByZWZzLnRhcmdldCA9PT0gXCJvcGVuQWlcIjtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgIH07XG4gICAgY29uc3QgcmVxdWlyZWQgPSBbXTtcbiAgICBjb25zdCBzaGFwZSA9IGRlZi5zaGFwZSgpO1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gc2hhcGUpIHtcbiAgICAgICAgbGV0IHByb3BEZWYgPSBzaGFwZVtwcm9wTmFtZV07XG4gICAgICAgIGlmIChwcm9wRGVmID09PSB1bmRlZmluZWQgfHwgcHJvcERlZi5fZGVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9wT3B0aW9uYWwgPSBzYWZlSXNPcHRpb25hbChwcm9wRGVmKTtcbiAgICAgICAgaWYgKHByb3BPcHRpb25hbCAmJiBmb3JjZU9wdGlvbmFsSW50b051bGxhYmxlKSB7XG4gICAgICAgICAgICBpZiAocHJvcERlZi5fZGVmLnR5cGVOYW1lID09PSBcIlpvZE9wdGlvbmFsXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9wRGVmID0gcHJvcERlZi5fZGVmLmlubmVyVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcHJvcERlZi5pc051bGxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wRGVmID0gcHJvcERlZi5udWxsYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcE9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkRGVmID0gcGFyc2VEZWYocHJvcERlZi5fZGVmLCB7XG4gICAgICAgICAgICAuLi5yZWZzLFxuICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcInByb3BlcnRpZXNcIiwgcHJvcE5hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJwcm9wZXJ0aWVzXCIsIHByb3BOYW1lXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZWREZWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnByb3BlcnRpZXNbcHJvcE5hbWVdID0gcGFyc2VkRGVmO1xuICAgICAgICBpZiAoIXByb3BPcHRpb25hbCkge1xuICAgICAgICAgICAgcmVxdWlyZWQucHVzaChwcm9wTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlcXVpcmVkLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICB9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBkZWNpZGVBZGRpdGlvbmFsUHJvcGVydGllcyhkZWYsIHJlZnMpO1xuICAgIGlmIChhZGRpdGlvbmFsUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5hZGRpdGlvbmFsUHJvcGVydGllcyA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZGVjaWRlQWRkaXRpb25hbFByb3BlcnRpZXMoZGVmLCByZWZzKSB7XG4gICAgaWYgKGRlZi5jYXRjaGFsbC5fZGVmLnR5cGVOYW1lICE9PSBcIlpvZE5ldmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRGVmKGRlZi5jYXRjaGFsbC5fZGVmLCB7XG4gICAgICAgICAgICAuLi5yZWZzLFxuICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCJdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3dpdGNoIChkZWYudW5rbm93bktleXMpIHtcbiAgICAgICAgY2FzZSBcInBhc3N0aHJvdWdoXCI6XG4gICAgICAgICAgICByZXR1cm4gcmVmcy5hbGxvd2VkQWRkaXRpb25hbFByb3BlcnRpZXM7XG4gICAgICAgIGNhc2UgXCJzdHJpY3RcIjpcbiAgICAgICAgICAgIHJldHVybiByZWZzLnJlamVjdGVkQWRkaXRpb25hbFByb3BlcnRpZXM7XG4gICAgICAgIGNhc2UgXCJzdHJpcFwiOlxuICAgICAgICAgICAgcmV0dXJuIHJlZnMucmVtb3ZlQWRkaXRpb25hbFN0cmF0ZWd5ID09PSBcInN0cmljdFwiXG4gICAgICAgICAgICAgICAgPyByZWZzLmFsbG93ZWRBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgICAgICAgICAgIDogcmVmcy5yZWplY3RlZEFkZGl0aW9uYWxQcm9wZXJ0aWVzO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNhZmVJc09wdGlvbmFsKHNjaGVtYSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBzY2hlbWEuaXNPcHRpb25hbCgpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VBbnlEZWYgfSBmcm9tIFwiLi9hbnkuanNcIjtcbmV4cG9ydCBjb25zdCBwYXJzZU9wdGlvbmFsRGVmID0gKGRlZiwgcmVmcykgPT4ge1xuICAgIGlmIChyZWZzLmN1cnJlbnRQYXRoLnRvU3RyaW5nKCkgPT09IHJlZnMucHJvcGVydHlQYXRoPy50b1N0cmluZygpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZURlZihkZWYuaW5uZXJUeXBlLl9kZWYsIHJlZnMpO1xuICAgIH1cbiAgICBjb25zdCBpbm5lclNjaGVtYSA9IHBhcnNlRGVmKGRlZi5pbm5lclR5cGUuX2RlZiwge1xuICAgICAgICAuLi5yZWZzLFxuICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiYW55T2ZcIiwgXCIxXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBpbm5lclNjaGVtYVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGFueU9mOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBub3Q6IHBhcnNlQW55RGVmKHJlZnMpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5uZXJTY2hlbWEsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICAgIDogcGFyc2VBbnlEZWYocmVmcyk7XG59O1xuIiwgImltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgY29uc3QgcGFyc2VQaXBlbGluZURlZiA9IChkZWYsIHJlZnMpID0+IHtcbiAgICBpZiAocmVmcy5waXBlU3RyYXRlZ3kgPT09IFwiaW5wdXRcIikge1xuICAgICAgICByZXR1cm4gcGFyc2VEZWYoZGVmLmluLl9kZWYsIHJlZnMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWZzLnBpcGVTdHJhdGVneSA9PT0gXCJvdXRwdXRcIikge1xuICAgICAgICByZXR1cm4gcGFyc2VEZWYoZGVmLm91dC5fZGVmLCByZWZzKTtcbiAgICB9XG4gICAgY29uc3QgYSA9IHBhcnNlRGVmKGRlZi5pbi5fZGVmLCB7XG4gICAgICAgIC4uLnJlZnMsXG4gICAgICAgIGN1cnJlbnRQYXRoOiBbLi4ucmVmcy5jdXJyZW50UGF0aCwgXCJhbGxPZlwiLCBcIjBcIl0sXG4gICAgfSk7XG4gICAgY29uc3QgYiA9IHBhcnNlRGVmKGRlZi5vdXQuX2RlZiwge1xuICAgICAgICAuLi5yZWZzLFxuICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiYWxsT2ZcIiwgYSA/IFwiMVwiIDogXCIwXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFsbE9mOiBbYSwgYl0uZmlsdGVyKCh4KSA9PiB4ICE9PSB1bmRlZmluZWQpLFxuICAgIH07XG59O1xuIiwgImltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9taXNlRGVmKGRlZiwgcmVmcykge1xuICAgIHJldHVybiBwYXJzZURlZihkZWYudHlwZS5fZGVmLCByZWZzKTtcbn1cbiIsICJpbXBvcnQgeyBzZXRSZXNwb25zZVZhbHVlQW5kRXJyb3JzIH0gZnJvbSBcIi4uL2Vycm9yTWVzc2FnZXMuanNcIjtcbmltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZXREZWYoZGVmLCByZWZzKSB7XG4gICAgY29uc3QgaXRlbXMgPSBwYXJzZURlZihkZWYudmFsdWVUeXBlLl9kZWYsIHtcbiAgICAgICAgLi4ucmVmcyxcbiAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcIml0ZW1zXCJdLFxuICAgIH0pO1xuICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICB1bmlxdWVJdGVtczogdHJ1ZSxcbiAgICAgICAgaXRlbXMsXG4gICAgfTtcbiAgICBpZiAoZGVmLm1pblNpemUpIHtcbiAgICAgICAgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyhzY2hlbWEsIFwibWluSXRlbXNcIiwgZGVmLm1pblNpemUudmFsdWUsIGRlZi5taW5TaXplLm1lc3NhZ2UsIHJlZnMpO1xuICAgIH1cbiAgICBpZiAoZGVmLm1heFNpemUpIHtcbiAgICAgICAgc2V0UmVzcG9uc2VWYWx1ZUFuZEVycm9ycyhzY2hlbWEsIFwibWF4SXRlbXNcIiwgZGVmLm1heFNpemUudmFsdWUsIGRlZi5tYXhTaXplLm1lc3NhZ2UsIHJlZnMpO1xuICAgIH1cbiAgICByZXR1cm4gc2NoZW1hO1xufVxuIiwgImltcG9ydCB7IHBhcnNlRGVmIH0gZnJvbSBcIi4uL3BhcnNlRGVmLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUdXBsZURlZihkZWYsIHJlZnMpIHtcbiAgICBpZiAoZGVmLnJlc3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBkZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgaXRlbXM6IGRlZi5pdGVtc1xuICAgICAgICAgICAgICAgIC5tYXAoKHgsIGkpID0+IHBhcnNlRGVmKHguX2RlZiwge1xuICAgICAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcIml0ZW1zXCIsIGAke2l9YF0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIHgpID0+ICh4ID09PSB1bmRlZmluZWQgPyBhY2MgOiBbLi4uYWNjLCB4XSksIFtdKSxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxJdGVtczogcGFyc2VEZWYoZGVmLnJlc3QuX2RlZiwge1xuICAgICAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmN1cnJlbnRQYXRoLCBcImFkZGl0aW9uYWxJdGVtc1wiXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBkZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgbWF4SXRlbXM6IGRlZi5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBpdGVtczogZGVmLml0ZW1zXG4gICAgICAgICAgICAgICAgLm1hcCgoeCwgaSkgPT4gcGFyc2VEZWYoeC5fZGVmLCB7XG4gICAgICAgICAgICAgICAgLi4ucmVmcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aDogWy4uLnJlZnMuY3VycmVudFBhdGgsIFwiaXRlbXNcIiwgYCR7aX1gXSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgeCkgPT4gKHggPT09IHVuZGVmaW5lZCA/IGFjYyA6IFsuLi5hY2MsIHhdKSwgW10pLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBwYXJzZUFueURlZiB9IGZyb20gXCIuL2FueS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVW5kZWZpbmVkRGVmKHJlZnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3Q6IHBhcnNlQW55RGVmKHJlZnMpLFxuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgcGFyc2VBbnlEZWYgfSBmcm9tIFwiLi9hbnkuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVua25vd25EZWYocmVmcykge1xuICAgIHJldHVybiBwYXJzZUFueURlZihyZWZzKTtcbn1cbiIsICJpbXBvcnQgeyBwYXJzZURlZiB9IGZyb20gXCIuLi9wYXJzZURlZi5qc1wiO1xuZXhwb3J0IGNvbnN0IHBhcnNlUmVhZG9ubHlEZWYgPSAoZGVmLCByZWZzKSA9PiB7XG4gICAgcmV0dXJuIHBhcnNlRGVmKGRlZi5pbm5lclR5cGUuX2RlZiwgcmVmcyk7XG59O1xuIiwgImltcG9ydCB7IFpvZEZpcnN0UGFydHlUeXBlS2luZCB9IGZyb20gXCJ6b2QvdjNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGVmIH0gZnJvbSBcIi4vcGFyc2Vycy9hbnkuanNcIjtcbmltcG9ydCB7IHBhcnNlQXJyYXlEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL2FycmF5LmpzXCI7XG5pbXBvcnQgeyBwYXJzZUJpZ2ludERlZiB9IGZyb20gXCIuL3BhcnNlcnMvYmlnaW50LmpzXCI7XG5pbXBvcnQgeyBwYXJzZUJvb2xlYW5EZWYgfSBmcm9tIFwiLi9wYXJzZXJzL2Jvb2xlYW4uanNcIjtcbmltcG9ydCB7IHBhcnNlQnJhbmRlZERlZiB9IGZyb20gXCIuL3BhcnNlcnMvYnJhbmRlZC5qc1wiO1xuaW1wb3J0IHsgcGFyc2VDYXRjaERlZiB9IGZyb20gXCIuL3BhcnNlcnMvY2F0Y2guanNcIjtcbmltcG9ydCB7IHBhcnNlRGF0ZURlZiB9IGZyb20gXCIuL3BhcnNlcnMvZGF0ZS5qc1wiO1xuaW1wb3J0IHsgcGFyc2VEZWZhdWx0RGVmIH0gZnJvbSBcIi4vcGFyc2Vycy9kZWZhdWx0LmpzXCI7XG5pbXBvcnQgeyBwYXJzZUVmZmVjdHNEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL2VmZmVjdHMuanNcIjtcbmltcG9ydCB7IHBhcnNlRW51bURlZiB9IGZyb20gXCIuL3BhcnNlcnMvZW51bS5qc1wiO1xuaW1wb3J0IHsgcGFyc2VJbnRlcnNlY3Rpb25EZWYgfSBmcm9tIFwiLi9wYXJzZXJzL2ludGVyc2VjdGlvbi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VMaXRlcmFsRGVmIH0gZnJvbSBcIi4vcGFyc2Vycy9saXRlcmFsLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU1hcERlZiB9IGZyb20gXCIuL3BhcnNlcnMvbWFwLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5hdGl2ZUVudW1EZWYgfSBmcm9tIFwiLi9wYXJzZXJzL25hdGl2ZUVudW0uanNcIjtcbmltcG9ydCB7IHBhcnNlTmV2ZXJEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL25ldmVyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bGxEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL251bGwuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVsbGFibGVEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL251bGxhYmxlLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWJlckRlZiB9IGZyb20gXCIuL3BhcnNlcnMvbnVtYmVyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU9iamVjdERlZiB9IGZyb20gXCIuL3BhcnNlcnMvb2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbmFsRGVmIH0gZnJvbSBcIi4vcGFyc2Vycy9vcHRpb25hbC5qc1wiO1xuaW1wb3J0IHsgcGFyc2VQaXBlbGluZURlZiB9IGZyb20gXCIuL3BhcnNlcnMvcGlwZWxpbmUuanNcIjtcbmltcG9ydCB7IHBhcnNlUHJvbWlzZURlZiB9IGZyb20gXCIuL3BhcnNlcnMvcHJvbWlzZS5qc1wiO1xuaW1wb3J0IHsgcGFyc2VSZWNvcmREZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3JlY29yZC5qc1wiO1xuaW1wb3J0IHsgcGFyc2VTZXREZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3NldC5qc1wiO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmdEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3N0cmluZy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VUdXBsZURlZiB9IGZyb20gXCIuL3BhcnNlcnMvdHVwbGUuanNcIjtcbmltcG9ydCB7IHBhcnNlVW5kZWZpbmVkRGVmIH0gZnJvbSBcIi4vcGFyc2Vycy91bmRlZmluZWQuanNcIjtcbmltcG9ydCB7IHBhcnNlVW5pb25EZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3VuaW9uLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVVua25vd25EZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3Vua25vd24uanNcIjtcbmltcG9ydCB7IHBhcnNlUmVhZG9ubHlEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL3JlYWRvbmx5LmpzXCI7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFyc2VyID0gKGRlZiwgdHlwZU5hbWUsIHJlZnMpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGVOYW1lKSB7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN0cmluZzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVN0cmluZ0RlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROdW1iZXI6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdW1iZXJEZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kT2JqZWN0OlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlT2JqZWN0RGVmKGRlZiwgcmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEJpZ0ludDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUJpZ2ludERlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlQm9vbGVhbkRlZigpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REYXRlOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZURlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RVbmRlZmluZWQ6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VVbmRlZmluZWREZWYocmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGw6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdWxsRGVmKHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBcnJheTpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUFycmF5RGVmKGRlZiwgcmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uOlxuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REaXNjcmltaW5hdGVkVW5pb246XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VVbmlvbkRlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RJbnRlcnNlY3Rpb246XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnRlcnNlY3Rpb25EZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVHVwbGU6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUdXBsZURlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQ6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VSZWNvcmREZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGl0ZXJhbDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUxpdGVyYWxEZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRW51bTpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUVudW1EZWYoZGVmKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bTpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU5hdGl2ZUVudW1EZWYoZGVmKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbGFibGU6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdWxsYWJsZURlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU9wdGlvbmFsRGVmKGRlZiwgcmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcDpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU1hcERlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTZXQ6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VTZXREZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTGF6eTpcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBkZWYuZ2V0dGVyKCkuX2RlZjtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUHJvbWlzZTpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVByb21pc2VEZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOOlxuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcjpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU5ldmVyRGVmKHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRWZmZWN0c0RlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnk6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VBbnlEZWYocmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVua25vd246XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VVbmtub3duRGVmKHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2REZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGVmYXVsdERlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlQnJhbmRlZERlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWFkb25seTpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVJlYWRvbmx5RGVmKGRlZiwgcmVmcyk7XG4gICAgICAgIGNhc2UgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZENhdGNoOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlQ2F0Y2hEZWYoZGVmLCByZWZzKTtcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUGlwZWxpbmU6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaXBlbGluZURlZihkZWYsIHJlZnMpO1xuICAgICAgICBjYXNlIFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbjpcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kVm9pZDpcbiAgICAgICAgY2FzZSBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kU3ltYm9sOlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoKF8pID0+IHVuZGVmaW5lZCkodHlwZU5hbWUpO1xuICAgIH1cbn07XG4iLCAiaW1wb3J0IHsgaWdub3JlT3ZlcnJpZGUgfSBmcm9tIFwiLi9PcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBzZWxlY3RQYXJzZXIgfSBmcm9tIFwiLi9zZWxlY3RQYXJzZXIuanNcIjtcbmltcG9ydCB7IGdldFJlbGF0aXZlUGF0aCB9IGZyb20gXCIuL2dldFJlbGF0aXZlUGF0aC5qc1wiO1xuaW1wb3J0IHsgcGFyc2VBbnlEZWYgfSBmcm9tIFwiLi9wYXJzZXJzL2FueS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGVmKGRlZiwgcmVmcywgZm9yY2VSZXNvbHV0aW9uID0gZmFsc2UpIHtcbiAgICBjb25zdCBzZWVuSXRlbSA9IHJlZnMuc2Vlbi5nZXQoZGVmKTtcbiAgICBpZiAocmVmcy5vdmVycmlkZSkge1xuICAgICAgICBjb25zdCBvdmVycmlkZVJlc3VsdCA9IHJlZnMub3ZlcnJpZGU/LihkZWYsIHJlZnMsIHNlZW5JdGVtLCBmb3JjZVJlc29sdXRpb24pO1xuICAgICAgICBpZiAob3ZlcnJpZGVSZXN1bHQgIT09IGlnbm9yZU92ZXJyaWRlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGVSZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlZW5JdGVtICYmICFmb3JjZVJlc29sdXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2VlblNjaGVtYSA9IGdldCRyZWYoc2Vlbkl0ZW0sIHJlZnMpO1xuICAgICAgICBpZiAoc2VlblNjaGVtYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VlblNjaGVtYTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXdJdGVtID0geyBkZWYsIHBhdGg6IHJlZnMuY3VycmVudFBhdGgsIGpzb25TY2hlbWE6IHVuZGVmaW5lZCB9O1xuICAgIHJlZnMuc2Vlbi5zZXQoZGVmLCBuZXdJdGVtKTtcbiAgICBjb25zdCBqc29uU2NoZW1hT3JHZXR0ZXIgPSBzZWxlY3RQYXJzZXIoZGVmLCBkZWYudHlwZU5hbWUsIHJlZnMpO1xuICAgIC8vIElmIHRoZSByZXR1cm4gd2FzIGEgZnVuY3Rpb24sIHRoZW4gdGhlIGlubmVyIGRlZmluaXRpb24gbmVlZHMgdG8gYmUgZXh0cmFjdGVkIGJlZm9yZSBhIGNhbGwgdG8gcGFyc2VEZWYgKHJlY3Vyc2l2ZSlcbiAgICBjb25zdCBqc29uU2NoZW1hID0gdHlwZW9mIGpzb25TY2hlbWFPckdldHRlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gcGFyc2VEZWYoanNvblNjaGVtYU9yR2V0dGVyKCksIHJlZnMpXG4gICAgICAgIDoganNvblNjaGVtYU9yR2V0dGVyO1xuICAgIGlmIChqc29uU2NoZW1hKSB7XG4gICAgICAgIGFkZE1ldGEoZGVmLCByZWZzLCBqc29uU2NoZW1hKTtcbiAgICB9XG4gICAgaWYgKHJlZnMucG9zdFByb2Nlc3MpIHtcbiAgICAgICAgY29uc3QgcG9zdFByb2Nlc3NSZXN1bHQgPSByZWZzLnBvc3RQcm9jZXNzKGpzb25TY2hlbWEsIGRlZiwgcmVmcyk7XG4gICAgICAgIG5ld0l0ZW0uanNvblNjaGVtYSA9IGpzb25TY2hlbWE7XG4gICAgICAgIHJldHVybiBwb3N0UHJvY2Vzc1Jlc3VsdDtcbiAgICB9XG4gICAgbmV3SXRlbS5qc29uU2NoZW1hID0ganNvblNjaGVtYTtcbiAgICByZXR1cm4ganNvblNjaGVtYTtcbn1cbmNvbnN0IGdldCRyZWYgPSAoaXRlbSwgcmVmcykgPT4ge1xuICAgIHN3aXRjaCAocmVmcy4kcmVmU3RyYXRlZ3kpIHtcbiAgICAgICAgY2FzZSBcInJvb3RcIjpcbiAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IGl0ZW0ucGF0aC5qb2luKFwiL1wiKSB9O1xuICAgICAgICBjYXNlIFwicmVsYXRpdmVcIjpcbiAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IGdldFJlbGF0aXZlUGF0aChyZWZzLmN1cnJlbnRQYXRoLCBpdGVtLnBhdGgpIH07XG4gICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIGNhc2UgXCJzZWVuXCI6IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhdGgubGVuZ3RoIDwgcmVmcy5jdXJyZW50UGF0aC5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBpdGVtLnBhdGguZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gcmVmcy5jdXJyZW50UGF0aFtpbmRleF0gPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVjdXJzaXZlIHJlZmVyZW5jZSBkZXRlY3RlZCBhdCAke3JlZnMuY3VycmVudFBhdGguam9pbihcIi9cIil9ISBEZWZhdWx0aW5nIHRvIGFueWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUFueURlZihyZWZzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWZzLiRyZWZTdHJhdGVneSA9PT0gXCJzZWVuXCIgPyBwYXJzZUFueURlZihyZWZzKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBhZGRNZXRhID0gKGRlZiwgcmVmcywganNvblNjaGVtYSkgPT4ge1xuICAgIGlmIChkZWYuZGVzY3JpcHRpb24pIHtcbiAgICAgICAganNvblNjaGVtYS5kZXNjcmlwdGlvbiA9IGRlZi5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKHJlZnMubWFya2Rvd25EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAganNvblNjaGVtYS5tYXJrZG93bkRlc2NyaXB0aW9uID0gZGVmLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqc29uU2NoZW1hO1xufTtcbiIsICJleHBvcnQge307XG4iLCAiaW1wb3J0IHsgcGFyc2VEZWYgfSBmcm9tIFwiLi9wYXJzZURlZi5qc1wiO1xuaW1wb3J0IHsgZ2V0UmVmcyB9IGZyb20gXCIuL1JlZnMuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGVmIH0gZnJvbSBcIi4vcGFyc2Vycy9hbnkuanNcIjtcbmNvbnN0IHpvZFRvSnNvblNjaGVtYSA9IChzY2hlbWEsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCByZWZzID0gZ2V0UmVmcyhvcHRpb25zKTtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmRlZmluaXRpb25zXG4gICAgICAgID8gT2JqZWN0LmVudHJpZXMob3B0aW9ucy5kZWZpbml0aW9ucykucmVkdWNlKChhY2MsIFtuYW1lLCBzY2hlbWFdKSA9PiAoe1xuICAgICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgICAgW25hbWVdOiBwYXJzZURlZihzY2hlbWEuX2RlZiwge1xuICAgICAgICAgICAgICAgIC4uLnJlZnMsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmJhc2VQYXRoLCByZWZzLmRlZmluaXRpb25QYXRoLCBuYW1lXSxcbiAgICAgICAgICAgIH0sIHRydWUpID8/IHBhcnNlQW55RGVmKHJlZnMpLFxuICAgICAgICB9KSwge30pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IG9wdGlvbnNcbiAgICAgICAgOiBvcHRpb25zPy5uYW1lU3RyYXRlZ3kgPT09IFwidGl0bGVcIlxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogb3B0aW9ucz8ubmFtZTtcbiAgICBjb25zdCBtYWluID0gcGFyc2VEZWYoc2NoZW1hLl9kZWYsIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlZnNcbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5yZWZzLFxuICAgICAgICAgICAgY3VycmVudFBhdGg6IFsuLi5yZWZzLmJhc2VQYXRoLCByZWZzLmRlZmluaXRpb25QYXRoLCBuYW1lXSxcbiAgICAgICAgfSwgZmFsc2UpID8/IHBhcnNlQW55RGVmKHJlZnMpO1xuICAgIGNvbnN0IHRpdGxlID0gdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgb3B0aW9ucy5uYW1lU3RyYXRlZ3kgPT09IFwidGl0bGVcIlxuICAgICAgICA/IG9wdGlvbnMubmFtZVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYWluLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIGlmIChyZWZzLmZsYWdzLmhhc1JlZmVyZW5jZWRPcGVuQWlBbnlUeXBlKSB7XG4gICAgICAgIGlmICghZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWZpbml0aW9uc1tyZWZzLm9wZW5BaUFueVR5cGVOYW1lXSkge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNbcmVmcy5vcGVuQWlBbnlUeXBlTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcHBpbmcgXCJvYmplY3RcIiBhcyBubyBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkIGFuZCBhZGRpdGlvbmFsUHJvcGVydGllcyBtdXN0IGJlIFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHR5cGU6IFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImludGVnZXJcIiwgXCJib29sZWFuXCIsIFwiYXJyYXlcIiwgXCJudWxsXCJdLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICRyZWY6IHJlZnMuJHJlZlN0cmF0ZWd5ID09PSBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlZnMuYmFzZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcy5kZWZpbml0aW9uUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZzLm9wZW5BaUFueVR5cGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiL1wiKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb21iaW5lZCA9IG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlZmluaXRpb25zXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIFtyZWZzLmRlZmluaXRpb25QYXRoXTogZGVmaW5pdGlvbnMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG1haW5cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAkcmVmOiBbXG4gICAgICAgICAgICAgICAgLi4uKHJlZnMuJHJlZlN0cmF0ZWd5ID09PSBcInJlbGF0aXZlXCIgPyBbXSA6IHJlZnMuYmFzZVBhdGgpLFxuICAgICAgICAgICAgICAgIHJlZnMuZGVmaW5pdGlvblBhdGgsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIF0uam9pbihcIi9cIiksXG4gICAgICAgICAgICBbcmVmcy5kZWZpbml0aW9uUGF0aF06IHtcbiAgICAgICAgICAgICAgICAuLi5kZWZpbml0aW9ucyxcbiAgICAgICAgICAgICAgICBbbmFtZV06IG1haW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIGlmIChyZWZzLnRhcmdldCA9PT0gXCJqc29uU2NoZW1hN1wiKSB7XG4gICAgICAgIGNvbWJpbmVkLiRzY2hlbWEgPSBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWZzLnRhcmdldCA9PT0gXCJqc29uU2NoZW1hMjAxOS0wOVwiIHx8IHJlZnMudGFyZ2V0ID09PSBcIm9wZW5BaVwiKSB7XG4gICAgICAgIGNvbWJpbmVkLiRzY2hlbWEgPSBcImh0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hI1wiO1xuICAgIH1cbiAgICBpZiAocmVmcy50YXJnZXQgPT09IFwib3BlbkFpXCIgJiZcbiAgICAgICAgKFwiYW55T2ZcIiBpbiBjb21iaW5lZCB8fFxuICAgICAgICAgICAgXCJvbmVPZlwiIGluIGNvbWJpbmVkIHx8XG4gICAgICAgICAgICBcImFsbE9mXCIgaW4gY29tYmluZWQgfHxcbiAgICAgICAgICAgIChcInR5cGVcIiBpbiBjb21iaW5lZCAmJiBBcnJheS5pc0FycmF5KGNvbWJpbmVkLnR5cGUpKSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogT3BlbkFJIG1heSBub3Qgc3VwcG9ydCBzY2hlbWFzIHdpdGggdW5pb25zIGFzIHJvb3RzISBUcnkgd3JhcHBpbmcgaXQgaW4gYW4gb2JqZWN0IHByb3BlcnR5LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcbmV4cG9ydCB7IHpvZFRvSnNvblNjaGVtYSB9O1xuIiwgImV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1JlZnMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Vycm9yTWVzc2FnZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dldFJlbGF0aXZlUGF0aC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2VEZWYuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlVHlwZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvYW55LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL2FycmF5LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL2JpZ2ludC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9ib29sZWFuLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL2JyYW5kZWQuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvY2F0Y2guanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvZGF0ZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9kZWZhdWx0LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL2VmZmVjdHMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvZW51bS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9pbnRlcnNlY3Rpb24uanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvbGl0ZXJhbC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9tYXAuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvbmF0aXZlRW51bS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9uZXZlci5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9udWxsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL251bGxhYmxlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL251bWJlci5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9vYmplY3QuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvb3B0aW9uYWwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvcGlwZWxpbmUuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvcHJvbWlzZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9yZWFkb25seS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy9yZWNvcmQuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvc2V0LmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wYXJzZXJzL3N0cmluZy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy90dXBsZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2Vycy91bmRlZmluZWQuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvdW5pb24uanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcnNlcnMvdW5rbm93bi5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VsZWN0UGFyc2VyLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi96b2RUb0pzb25TY2hlbWEuanNcIjtcbmltcG9ydCB7IHpvZFRvSnNvblNjaGVtYSB9IGZyb20gXCIuL3pvZFRvSnNvblNjaGVtYS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgem9kVG9Kc29uU2NoZW1hO1xuIiwgbnVsbCwgbnVsbCwgImltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tIFwibW9kdWxlXCI7XG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBhanYgPSByZXF1aXJlKFwiYWp2XCIpO1xuXG5leHBvcnQgY29uc3QgQWp2ID0gYWp2LkFqdiA/PyBhanYuZGVmYXVsdCA/PyBhanY7XG5leHBvcnQgY29uc3QgQ29kZUdlbiA9IGFqdi5Db2RlR2VuO1xuZXhwb3J0IGNvbnN0IEtleXdvcmRDeHQgPSBhanYuS2V5d29yZEN4dDtcbmV4cG9ydCBjb25zdCBNaXNzaW5nUmVmRXJyb3IgPSBhanYuTWlzc2luZ1JlZkVycm9yO1xuZXhwb3J0IGNvbnN0IE5hbWUgPSBhanYuTmFtZTtcbmV4cG9ydCBjb25zdCBWYWxpZGF0aW9uRXJyb3IgPSBhanYuVmFsaWRhdGlvbkVycm9yO1xuZXhwb3J0IGNvbnN0IF8gPSBhanYuXztcbmV4cG9ydCBjb25zdCBuaWwgPSBhanYubmlsO1xuZXhwb3J0IGNvbnN0IHN0ciA9IGFqdi5zdHI7XG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5ID0gYWp2LnN0cmluZ2lmeTtcbmV4cG9ydCBkZWZhdWx0IGFqdi5kZWZhdWx0ID8/IGFqdjtcbiIsICJpbXBvcnQgdHlwZSB7Rm9ybWF0LCBGb3JtYXREZWZpbml0aW9ufSBmcm9tIFwiYWp2XCJcbmltcG9ydCB0eXBlIHtGb3JtYXRWYWxpZGF0b3IsIEZvcm1hdENvbXBhcmV9IGZyb20gXCJhanYvZGlzdC90eXBlc1wiXG5cbmV4cG9ydCB0eXBlIEZvcm1hdE1vZGUgPSBcImZhc3RcIiB8IFwiZnVsbFwiXG5cbmV4cG9ydCB0eXBlIEZvcm1hdE5hbWUgPVxuICB8IFwiZGF0ZVwiXG4gIHwgXCJ0aW1lXCJcbiAgfCBcImRhdGUtdGltZVwiXG4gIHwgXCJpc28tdGltZVwiXG4gIHwgXCJpc28tZGF0ZS10aW1lXCJcbiAgfCBcImR1cmF0aW9uXCJcbiAgfCBcInVyaVwiXG4gIHwgXCJ1cmktcmVmZXJlbmNlXCJcbiAgfCBcInVyaS10ZW1wbGF0ZVwiXG4gIHwgXCJ1cmxcIlxuICB8IFwiZW1haWxcIlxuICB8IFwiaG9zdG5hbWVcIlxuICB8IFwiaXB2NFwiXG4gIHwgXCJpcHY2XCJcbiAgfCBcInJlZ2V4XCJcbiAgfCBcInV1aWRcIlxuICB8IFwianNvbi1wb2ludGVyXCJcbiAgfCBcImpzb24tcG9pbnRlci11cmktZnJhZ21lbnRcIlxuICB8IFwicmVsYXRpdmUtanNvbi1wb2ludGVyXCJcbiAgfCBcImJ5dGVcIlxuICB8IFwiaW50MzJcIlxuICB8IFwiaW50NjRcIlxuICB8IFwiZmxvYXRcIlxuICB8IFwiZG91YmxlXCJcbiAgfCBcInBhc3N3b3JkXCJcbiAgfCBcImJpbmFyeVwiXG5cbmV4cG9ydCB0eXBlIERlZmluZWRGb3JtYXRzID0ge1xuICBba2V5IGluIEZvcm1hdE5hbWVdOiBGb3JtYXRcbn1cblxuZnVuY3Rpb24gZm10RGVmKFxuICB2YWxpZGF0ZTogUmVnRXhwIHwgRm9ybWF0VmFsaWRhdG9yPHN0cmluZz4sXG4gIGNvbXBhcmU6IEZvcm1hdENvbXBhcmU8c3RyaW5nPlxuKTogRm9ybWF0RGVmaW5pdGlvbjxzdHJpbmc+IHtcbiAgcmV0dXJuIHt2YWxpZGF0ZSwgY29tcGFyZX1cbn1cblxuZXhwb3J0IGNvbnN0IGZ1bGxGb3JtYXRzOiBEZWZpbmVkRm9ybWF0cyA9IHtcbiAgLy8gZGF0ZTogaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzMzOSNzZWN0aW9uLTUuNlxuICBkYXRlOiBmbXREZWYoZGF0ZSwgY29tcGFyZURhdGUpLFxuICAvLyBkYXRlLXRpbWU6IGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMzMzkjc2VjdGlvbi01LjZcbiAgdGltZTogZm10RGVmKGdldFRpbWUodHJ1ZSksIGNvbXBhcmVUaW1lKSxcbiAgXCJkYXRlLXRpbWVcIjogZm10RGVmKGdldERhdGVUaW1lKHRydWUpLCBjb21wYXJlRGF0ZVRpbWUpLFxuICBcImlzby10aW1lXCI6IGZtdERlZihnZXRUaW1lKCksIGNvbXBhcmVJc29UaW1lKSxcbiAgXCJpc28tZGF0ZS10aW1lXCI6IGZtdERlZihnZXREYXRlVGltZSgpLCBjb21wYXJlSXNvRGF0ZVRpbWUpLFxuICAvLyBkdXJhdGlvbjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMzMzkjYXBwZW5kaXgtQVxuICBkdXJhdGlvbjogL15QKD8hJCkoKFxcZCtZKT8oXFxkK00pPyhcXGQrRCk/KFQoPz1cXGQpKFxcZCtIKT8oXFxkK00pPyhcXGQrUyk/KT98KFxcZCtXKT8pJC8sXG4gIHVyaSxcbiAgXCJ1cmktcmVmZXJlbmNlXCI6XG4gICAgL14oPzpbYS16XVthLXowLTkrXFwtLl0qOik/KD86XFwvP1xcLyg/Oig/OlthLXowLTlcXC0uX34hJCYnKCkqKyw7PTpdfCVbMC05YS1mXXsyfSkqQCk/KD86XFxbKD86KD86KD86KD86WzAtOWEtZl17MSw0fTopezZ9fDo6KD86WzAtOWEtZl17MSw0fTopezV9fCg/OlswLTlhLWZdezEsNH0pPzo6KD86WzAtOWEtZl17MSw0fTopezR9fCg/Oig/OlswLTlhLWZdezEsNH06KXswLDF9WzAtOWEtZl17MSw0fSk/OjooPzpbMC05YS1mXXsxLDR9Oil7M318KD86KD86WzAtOWEtZl17MSw0fTopezAsMn1bMC05YS1mXXsxLDR9KT86Oig/OlswLTlhLWZdezEsNH06KXsyfXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCwzfVswLTlhLWZdezEsNH0pPzo6WzAtOWEtZl17MSw0fTp8KD86KD86WzAtOWEtZl17MSw0fTopezAsNH1bMC05YS1mXXsxLDR9KT86OikoPzpbMC05YS1mXXsxLDR9OlswLTlhLWZdezEsNH18KD86KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCw1fVswLTlhLWZdezEsNH0pPzo6WzAtOWEtZl17MSw0fXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCw2fVswLTlhLWZdezEsNH0pPzo6KXxbVnZdWzAtOWEtZl0rXFwuW2EtejAtOVxcLS5ffiEkJicoKSorLDs9Ol0rKVxcXXwoPzooPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPyl8KD86W2EtejAtOVxcLS5ffiEkJidcIigpKissOz1dfCVbMC05YS1mXXsyfSkqKSg/OjpcXGQqKT8oPzpcXC8oPzpbYS16MC05XFwtLl9+ISQmJ1wiKCkqKyw7PTpAXXwlWzAtOWEtZl17Mn0pKikqfFxcLyg/Oig/OlthLXowLTlcXC0uX34hJCYnXCIoKSorLDs9OkBdfCVbMC05YS1mXXsyfSkrKD86XFwvKD86W2EtejAtOVxcLS5ffiEkJidcIigpKissOz06QF18JVswLTlhLWZdezJ9KSopKik/fCg/OlthLXowLTlcXC0uX34hJCYnXCIoKSorLDs9OkBdfCVbMC05YS1mXXsyfSkrKD86XFwvKD86W2EtejAtOVxcLS5ffiEkJidcIigpKissOz06QF18JVswLTlhLWZdezJ9KSopKik/KD86XFw/KD86W2EtejAtOVxcLS5ffiEkJidcIigpKissOz06QC8/XXwlWzAtOWEtZl17Mn0pKik/KD86Iyg/OlthLXowLTlcXC0uX34hJCYnXCIoKSorLDs9OkAvP118JVswLTlhLWZdezJ9KSopPyQvaSxcbiAgLy8gdXJpLXRlbXBsYXRlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU3MFxuICBcInVyaS10ZW1wbGF0ZVwiOlxuICAgIC9eKD86KD86W15cXHgwMC1cXHgyMFwiJzw+JVxcXFxeYHt8fV18JVswLTlhLWZdezJ9KXxcXHtbKyMuLzs/Jj0sIUB8XT8oPzpbYS16MC05X118JVswLTlhLWZdezJ9KSsoPzo6WzEtOV1bMC05XXswLDN9fFxcKik/KD86LCg/OlthLXowLTlfXXwlWzAtOWEtZl17Mn0pKyg/OjpbMS05XVswLTldezAsM318XFwqKT8pKlxcfSkqJC9pLFxuICAvLyBGb3IgdGhlIHNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZHBlcmluaS83MjkyOTRcbiAgLy8gRm9yIHRlc3QgY2FzZXM6IGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9kZW1vL3VybC1yZWdleFxuICB1cmw6IC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1LFxuICBlbWFpbDpcbiAgICAvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSxcbiAgaG9zdG5hbWU6XG4gICAgL14oPz0uezEsMjUzfVxcLj8kKVthLXowLTldKD86W2EtejAtOS1dezAsNjF9W2EtejAtOV0pPyg/OlxcLlthLXowLTldKD86Wy0wLTlhLXpdezAsNjF9WzAtOWEtel0pPykqXFwuPyQvaSxcbiAgLy8gb3B0aW1pemVkIGh0dHBzOi8vd3d3LnNhZmFyaWJvb2tzb25saW5lLmNvbS9saWJyYXJ5L3ZpZXcvcmVndWxhci1leHByZXNzaW9ucy1jb29rYm9vay85NzgwNTk2ODAyODM3L2NoMDdzMTYuaHRtbFxuICBpcHY0OiAvXig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkkLyxcbiAgaXB2NjogL14oKChbMC05YS1mXXsxLDR9Oil7N30oWzAtOWEtZl17MSw0fXw6KSl8KChbMC05YS1mXXsxLDR9Oil7Nn0oOlswLTlhLWZdezEsNH18KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlhLWZdezEsNH06KXs1fSgoKDpbMC05YS1mXXsxLDR9KXsxLDJ9KXw6KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlhLWZdezEsNH06KXs0fSgoKDpbMC05YS1mXXsxLDR9KXsxLDN9KXwoKDpbMC05YS1mXXsxLDR9KT86KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05YS1mXXsxLDR9Oil7M30oKCg6WzAtOWEtZl17MSw0fSl7MSw0fSl8KCg6WzAtOWEtZl17MSw0fSl7MCwyfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlhLWZdezEsNH06KXsyfSgoKDpbMC05YS1mXXsxLDR9KXsxLDV9KXwoKDpbMC05YS1mXXsxLDR9KXswLDN9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOWEtZl17MSw0fTopezF9KCgoOlswLTlhLWZdezEsNH0pezEsNn0pfCgoOlswLTlhLWZdezEsNH0pezAsNH06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KDooKCg6WzAtOWEtZl17MSw0fSl7MSw3fSl8KCg6WzAtOWEtZl17MSw0fSl7MCw1fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKSkkL2ksXG4gIHJlZ2V4LFxuICAvLyB1dWlkOiBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0MTIyXG4gIHV1aWQ6IC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pLFxuICAvLyBKU09OLXBvaW50ZXI6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2OTAxXG4gIC8vIHVyaSBmcmFnbWVudDogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjYXBwZW5kaXgtQVxuICBcImpzb24tcG9pbnRlclwiOiAvXig/OlxcLyg/Oltefi9dfH4wfH4xKSopKiQvLFxuICBcImpzb24tcG9pbnRlci11cmktZnJhZ21lbnRcIjogL14jKD86XFwvKD86W2EtejAtOV9cXC0uISQmJygpKissOzo9QF18JVswLTlhLWZdezJ9fH4wfH4xKSopKiQvaSxcbiAgLy8gcmVsYXRpdmUgSlNPTi1wb2ludGVyOiBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1sdWZmLXJlbGF0aXZlLWpzb24tcG9pbnRlci0wMFxuICBcInJlbGF0aXZlLWpzb24tcG9pbnRlclwiOiAvXig/OjB8WzEtOV1bMC05XSopKD86I3woPzpcXC8oPzpbXn4vXXx+MHx+MSkqKSopJC8sXG4gIC8vIHRoZSBmb2xsb3dpbmcgZm9ybWF0cyBhcmUgdXNlZCBieSB0aGUgb3BlbmFwaSBzcGVjaWZpY2F0aW9uOiBodHRwczovL3NwZWMub3BlbmFwaXMub3JnL29hcy92My4wLjAjZGF0YS10eXBlc1xuICAvLyBieXRlOiBodHRwczovL2dpdGh1Yi5jb20vbWlndWVsbW90YS9pcy1iYXNlNjRcbiAgYnl0ZSxcbiAgLy8gc2lnbmVkIDMyIGJpdCBpbnRlZ2VyXG4gIGludDMyOiB7dHlwZTogXCJudW1iZXJcIiwgdmFsaWRhdGU6IHZhbGlkYXRlSW50MzJ9LFxuICAvLyBzaWduZWQgNjQgYml0IGludGVnZXJcbiAgaW50NjQ6IHt0eXBlOiBcIm51bWJlclwiLCB2YWxpZGF0ZTogdmFsaWRhdGVJbnQ2NH0sXG4gIC8vIEMtdHlwZSBmbG9hdFxuICBmbG9hdDoge3R5cGU6IFwibnVtYmVyXCIsIHZhbGlkYXRlOiB2YWxpZGF0ZU51bWJlcn0sXG4gIC8vIEMtdHlwZSBkb3VibGVcbiAgZG91YmxlOiB7dHlwZTogXCJudW1iZXJcIiwgdmFsaWRhdGU6IHZhbGlkYXRlTnVtYmVyfSxcbiAgLy8gaGludCB0byB0aGUgVUkgdG8gaGlkZSBpbnB1dCBzdHJpbmdzXG4gIHBhc3N3b3JkOiB0cnVlLFxuICAvLyB1bmNoZWNrZWQgc3RyaW5nIHBheWxvYWRcbiAgYmluYXJ5OiB0cnVlLFxufVxuXG5leHBvcnQgY29uc3QgZmFzdEZvcm1hdHM6IERlZmluZWRGb3JtYXRzID0ge1xuICAuLi5mdWxsRm9ybWF0cyxcbiAgZGF0ZTogZm10RGVmKC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkJC8sIGNvbXBhcmVEYXRlKSxcbiAgdGltZTogZm10RGVmKFxuICAgIC9eKD86WzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGR8MjM6NTk6NjApKD86XFwuXFxkKyk/KD86enxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPykkL2ksXG4gICAgY29tcGFyZVRpbWVcbiAgKSxcbiAgXCJkYXRlLXRpbWVcIjogZm10RGVmKFxuICAgIC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkdCg/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8pJC9pLFxuICAgIGNvbXBhcmVEYXRlVGltZVxuICApLFxuICBcImlzby10aW1lXCI6IGZtdERlZihcbiAgICAvXig/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8pPyQvaSxcbiAgICBjb21wYXJlSXNvVGltZVxuICApLFxuICBcImlzby1kYXRlLXRpbWVcIjogZm10RGVmKFxuICAgIC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkW3RcXHNdKD86WzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGR8MjM6NTk6NjApKD86XFwuXFxkKyk/KD86enxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPyk/JC9pLFxuICAgIGNvbXBhcmVJc29EYXRlVGltZVxuICApLFxuICAvLyB1cmk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYWZpbnRvc2gvaXMtbXktanNvbi12YWxpZC9ibG9iL21hc3Rlci9mb3JtYXRzLmpzXG4gIHVyaTogL14oPzpbYS16XVthLXowLTkrXFwtLl0qOikoPzpcXC8/XFwvKT9bXlxcc10qJC9pLFxuICBcInVyaS1yZWZlcmVuY2VcIjogL14oPzooPzpbYS16XVthLXowLTkrXFwtLl0qOik/XFwvP1xcLyk/KD86W15cXFxcXFxzI11bXlxccyNdKik/KD86I1teXFxcXFxcc10qKT8kL2ksXG4gIC8vIGVtYWlsIChzb3VyY2VzIGZyb20ganNlbiB2YWxpZGF0b3IpOlxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMTMyMy91c2luZy1hLXJlZ3VsYXItZXhwcmVzc2lvbi10by12YWxpZGF0ZS1hbi1lbWFpbC1hZGRyZXNzI2Fuc3dlci04ODI5MzYzXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjdmFsaWQtZS1tYWlsLWFkZHJlc3MgKHNlYXJjaCBmb3IgJ3dpbGZ1bCB2aW9sYXRpb24nKVxuICBlbWFpbDpcbiAgICAvXlthLXowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXowLTldKD86W2EtejAtOS1dezAsNjF9W2EtejAtOV0pPyg/OlxcLlthLXowLTldKD86W2EtejAtOS1dezAsNjF9W2EtejAtOV0pPykqJC9pLFxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyhmdWxsRm9ybWF0cykgYXMgRm9ybWF0TmFtZVtdXG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I2FwcGVuZGl4LUNcbiAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApXG59XG5cbmNvbnN0IERBVEUgPSAvXihcXGRcXGRcXGRcXGQpLShcXGRcXGQpLShcXGRcXGQpJC9cbmNvbnN0IERBWVMgPSBbMCwgMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1cblxuZnVuY3Rpb24gZGF0ZShzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBmdWxsLWRhdGUgZnJvbSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42XG4gIGNvbnN0IG1hdGNoZXM6IHN0cmluZ1tdIHwgbnVsbCA9IERBVEUuZXhlYyhzdHIpXG4gIGlmICghbWF0Y2hlcykgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IHllYXI6IG51bWJlciA9ICttYXRjaGVzWzFdXG4gIGNvbnN0IG1vbnRoOiBudW1iZXIgPSArbWF0Y2hlc1syXVxuICBjb25zdCBkYXk6IG51bWJlciA9ICttYXRjaGVzWzNdXG4gIHJldHVybiAoXG4gICAgbW9udGggPj0gMSAmJlxuICAgIG1vbnRoIDw9IDEyICYmXG4gICAgZGF5ID49IDEgJiZcbiAgICBkYXkgPD0gKG1vbnRoID09PSAyICYmIGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IERBWVNbbW9udGhdKVxuICApXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRlKGQxOiBzdHJpbmcsIGQyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoIShkMSAmJiBkMikpIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKGQxID4gZDIpIHJldHVybiAxXG4gIGlmIChkMSA8IGQyKSByZXR1cm4gLTFcbiAgcmV0dXJuIDBcbn1cblxuY29uc3QgVElNRSA9IC9eKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCg/OlxcLlxcZCspPykoenwoWystXSkoXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPyk/JC9pXG5cbmZ1bmN0aW9uIGdldFRpbWUoc3RyaWN0VGltZVpvbmU/OiBib29sZWFuKTogKHN0cjogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRpbWUoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSB8IG51bGwgPSBUSU1FLmV4ZWMoc3RyKVxuICAgIGlmICghbWF0Y2hlcykgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaHI6IG51bWJlciA9ICttYXRjaGVzWzFdXG4gICAgY29uc3QgbWluOiBudW1iZXIgPSArbWF0Y2hlc1syXVxuICAgIGNvbnN0IHNlYzogbnVtYmVyID0gK21hdGNoZXNbM11cbiAgICBjb25zdCB0ejogc3RyaW5nIHwgdW5kZWZpbmVkID0gbWF0Y2hlc1s0XVxuICAgIGNvbnN0IHR6U2lnbjogbnVtYmVyID0gbWF0Y2hlc1s1XSA9PT0gXCItXCIgPyAtMSA6IDFcbiAgICBjb25zdCB0ekg6IG51bWJlciA9ICsobWF0Y2hlc1s2XSB8fCAwKVxuICAgIGNvbnN0IHR6TTogbnVtYmVyID0gKyhtYXRjaGVzWzddIHx8IDApXG4gICAgaWYgKHR6SCA+IDIzIHx8IHR6TSA+IDU5IHx8IChzdHJpY3RUaW1lWm9uZSAmJiAhdHopKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoaHIgPD0gMjMgJiYgbWluIDw9IDU5ICYmIHNlYyA8IDYwKSByZXR1cm4gdHJ1ZVxuICAgIC8vIGxlYXAgc2Vjb25kXG4gICAgY29uc3QgdXRjTWluID0gbWluIC0gdHpNICogdHpTaWduXG4gICAgY29uc3QgdXRjSHIgPSBociAtIHR6SCAqIHR6U2lnbiAtICh1dGNNaW4gPCAwID8gMSA6IDApXG4gICAgcmV0dXJuICh1dGNIciA9PT0gMjMgfHwgdXRjSHIgPT09IC0xKSAmJiAodXRjTWluID09PSA1OSB8fCB1dGNNaW4gPT09IC0xKSAmJiBzZWMgPCA2MVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVUaW1lKHMxOiBzdHJpbmcsIHMyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoIShzMSAmJiBzMikpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgdDEgPSBuZXcgRGF0ZShcIjIwMjAtMDEtMDFUXCIgKyBzMSkudmFsdWVPZigpXG4gIGNvbnN0IHQyID0gbmV3IERhdGUoXCIyMDIwLTAxLTAxVFwiICsgczIpLnZhbHVlT2YoKVxuICBpZiAoISh0MSAmJiB0MikpIHJldHVybiB1bmRlZmluZWRcbiAgcmV0dXJuIHQxIC0gdDJcbn1cblxuZnVuY3Rpb24gY29tcGFyZUlzb1RpbWUodDE6IHN0cmluZywgdDI6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICghKHQxICYmIHQyKSkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBhMSA9IFRJTUUuZXhlYyh0MSlcbiAgY29uc3QgYTIgPSBUSU1FLmV4ZWModDIpXG4gIGlmICghKGExICYmIGEyKSkgcmV0dXJuIHVuZGVmaW5lZFxuICB0MSA9IGExWzFdICsgYTFbMl0gKyBhMVszXVxuICB0MiA9IGEyWzFdICsgYTJbMl0gKyBhMlszXVxuICBpZiAodDEgPiB0MikgcmV0dXJuIDFcbiAgaWYgKHQxIDwgdDIpIHJldHVybiAtMVxuICByZXR1cm4gMFxufVxuXG5jb25zdCBEQVRFX1RJTUVfU0VQQVJBVE9SID0gL3R8XFxzL2lcbmZ1bmN0aW9uIGdldERhdGVUaW1lKHN0cmljdFRpbWVab25lPzogYm9vbGVhbik6IChzdHI6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gIGNvbnN0IHRpbWUgPSBnZXRUaW1lKHN0cmljdFRpbWVab25lKVxuXG4gIHJldHVybiBmdW5jdGlvbiBkYXRlX3RpbWUoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42XG4gICAgY29uc3QgZGF0ZVRpbWU6IHN0cmluZ1tdID0gc3RyLnNwbGl0KERBVEVfVElNRV9TRVBBUkFUT1IpXG4gICAgcmV0dXJuIGRhdGVUaW1lLmxlbmd0aCA9PT0gMiAmJiBkYXRlKGRhdGVUaW1lWzBdKSAmJiB0aW1lKGRhdGVUaW1lWzFdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRlVGltZShkdDE6IHN0cmluZywgZHQyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoIShkdDEgJiYgZHQyKSkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBkMSA9IG5ldyBEYXRlKGR0MSkudmFsdWVPZigpXG4gIGNvbnN0IGQyID0gbmV3IERhdGUoZHQyKS52YWx1ZU9mKClcbiAgaWYgKCEoZDEgJiYgZDIpKSByZXR1cm4gdW5kZWZpbmVkXG4gIHJldHVybiBkMSAtIGQyXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVJc29EYXRlVGltZShkdDE6IHN0cmluZywgZHQyOiBzdHJpbmcpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoIShkdDEgJiYgZHQyKSkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBbZDEsIHQxXSA9IGR0MS5zcGxpdChEQVRFX1RJTUVfU0VQQVJBVE9SKVxuICBjb25zdCBbZDIsIHQyXSA9IGR0Mi5zcGxpdChEQVRFX1RJTUVfU0VQQVJBVE9SKVxuICBjb25zdCByZXMgPSBjb21wYXJlRGF0ZShkMSwgZDIpXG4gIGlmIChyZXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICByZXR1cm4gcmVzIHx8IGNvbXBhcmVUaW1lKHQxLCB0Milcbn1cblxuY29uc3QgTk9UX1VSSV9GUkFHTUVOVCA9IC9cXC98Oi9cbmNvbnN0IFVSSSA9XG4gIC9eKD86W2Etel1bYS16MC05K1xcLS5dKjopKD86XFwvP1xcLyg/Oig/OlthLXowLTlcXC0uX34hJCYnKCkqKyw7PTpdfCVbMC05YS1mXXsyfSkqQCk/KD86XFxbKD86KD86KD86KD86WzAtOWEtZl17MSw0fTopezZ9fDo6KD86WzAtOWEtZl17MSw0fTopezV9fCg/OlswLTlhLWZdezEsNH0pPzo6KD86WzAtOWEtZl17MSw0fTopezR9fCg/Oig/OlswLTlhLWZdezEsNH06KXswLDF9WzAtOWEtZl17MSw0fSk/OjooPzpbMC05YS1mXXsxLDR9Oil7M318KD86KD86WzAtOWEtZl17MSw0fTopezAsMn1bMC05YS1mXXsxLDR9KT86Oig/OlswLTlhLWZdezEsNH06KXsyfXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCwzfVswLTlhLWZdezEsNH0pPzo6WzAtOWEtZl17MSw0fTp8KD86KD86WzAtOWEtZl17MSw0fTopezAsNH1bMC05YS1mXXsxLDR9KT86OikoPzpbMC05YS1mXXsxLDR9OlswLTlhLWZdezEsNH18KD86KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCw1fVswLTlhLWZdezEsNH0pPzo6WzAtOWEtZl17MSw0fXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MCw2fVswLTlhLWZdezEsNH0pPzo6KXxbVnZdWzAtOWEtZl0rXFwuW2EtejAtOVxcLS5ffiEkJicoKSorLDs9Ol0rKVxcXXwoPzooPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPyl8KD86W2EtejAtOVxcLS5ffiEkJicoKSorLDs9XXwlWzAtOWEtZl17Mn0pKikoPzo6XFxkKik/KD86XFwvKD86W2EtejAtOVxcLS5ffiEkJicoKSorLDs9OkBdfCVbMC05YS1mXXsyfSkqKSp8XFwvKD86KD86W2EtejAtOVxcLS5ffiEkJicoKSorLDs9OkBdfCVbMC05YS1mXXsyfSkrKD86XFwvKD86W2EtejAtOVxcLS5ffiEkJicoKSorLDs9OkBdfCVbMC05YS1mXXsyfSkqKSopP3woPzpbYS16MC05XFwtLl9+ISQmJygpKissOz06QF18JVswLTlhLWZdezJ9KSsoPzpcXC8oPzpbYS16MC05XFwtLl9+ISQmJygpKissOz06QF18JVswLTlhLWZdezJ9KSopKikoPzpcXD8oPzpbYS16MC05XFwtLl9+ISQmJygpKissOz06QC8/XXwlWzAtOWEtZl17Mn0pKik/KD86Iyg/OlthLXowLTlcXC0uX34hJCYnKCkqKyw7PTpALz9dfCVbMC05YS1mXXsyfSkqKT8kL2lcblxuZnVuY3Rpb24gdXJpKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIGh0dHA6Ly9qbXJ3YXJlLmNvbS9hcnRpY2xlcy8yMDA5L3VyaV9yZWdleHAvVVJJX3JlZ2V4Lmh0bWwgKyBvcHRpb25hbCBwcm90b2NvbCArIHJlcXVpcmVkIFwiLlwiXG4gIHJldHVybiBOT1RfVVJJX0ZSQUdNRU5ULnRlc3Qoc3RyKSAmJiBVUkkudGVzdChzdHIpXG59XG5cbmNvbnN0IEJZVEUgPSAvXig/OltBLVphLXowLTkrL117NH0pKig/OltBLVphLXowLTkrL117Mn09PXxbQS1aYS16MC05Ky9dezN9PSk/JC9nbVxuXG5mdW5jdGlvbiBieXRlKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIEJZVEUubGFzdEluZGV4ID0gMFxuICByZXR1cm4gQllURS50ZXN0KHN0cilcbn1cblxuY29uc3QgTUlOX0lOVDMyID0gLSgyICoqIDMxKVxuY29uc3QgTUFYX0lOVDMyID0gMiAqKiAzMSAtIDFcblxuZnVuY3Rpb24gdmFsaWRhdGVJbnQzMih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA8PSBNQVhfSU5UMzIgJiYgdmFsdWUgPj0gTUlOX0lOVDMyXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW50NjQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyBKU09OIGFuZCBqYXZhc2NyaXB0IG1heCBJbnQgaXMgMioqNTMsIHNvIGFueSBpbnQgdGhhdCBwYXNzZXMgaXNJbnRlZ2VyIGlzIHZhbGlkIGZvciBJbnQ2NFxuICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSlcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IFpfQU5DSE9SID0gL1teXFxcXF1cXFxcWi9cbmZ1bmN0aW9uIHJlZ2V4KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChaX0FOQ0hPUi50ZXN0KHN0cikpIHJldHVybiBmYWxzZVxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAoc3RyKVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXh0cmFuZW91cy1jbGFzc1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9Db2RlT3JOYW1lIHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgc3RyOiBzdHJpbmdcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbmFtZXM6IFVzZWROYW1lc1xuICBhYnN0cmFjdCB0b1N0cmluZygpOiBzdHJpbmdcbiAgYWJzdHJhY3QgZW1wdHlTdHIoKTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgSURFTlRJRklFUiA9IC9eW2EteiRfXVthLXokXzAtOV0qJC9pXG5cbmV4cG9ydCBjbGFzcyBOYW1lIGV4dGVuZHMgX0NvZGVPck5hbWUge1xuICByZWFkb25seSBzdHI6IHN0cmluZ1xuICBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpXG4gICAgaWYgKCFJREVOVElGSUVSLnRlc3QocykpIHRocm93IG5ldyBFcnJvcihcIkNvZGVHZW46IG5hbWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcIilcbiAgICB0aGlzLnN0ciA9IHNcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RyXG4gIH1cblxuICBlbXB0eVN0cigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldCBuYW1lcygpOiBVc2VkTmFtZXMge1xuICAgIHJldHVybiB7W3RoaXMuc3RyXTogMX1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgX0NvZGUgZXh0ZW5kcyBfQ29kZU9yTmFtZSB7XG4gIHJlYWRvbmx5IF9pdGVtczogcmVhZG9ubHkgQ29kZUl0ZW1bXVxuICBwcml2YXRlIF9zdHI/OiBzdHJpbmdcbiAgcHJpdmF0ZSBfbmFtZXM/OiBVc2VkTmFtZXNcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcgfCByZWFkb25seSBDb2RlSXRlbVtdKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2l0ZW1zID0gdHlwZW9mIGNvZGUgPT09IFwic3RyaW5nXCIgPyBbY29kZV0gOiBjb2RlXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0clxuICB9XG5cbiAgZW1wdHlTdHIoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDEpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtc1swXVxuICAgIHJldHVybiBpdGVtID09PSBcIlwiIHx8IGl0ZW0gPT09ICdcIlwiJ1xuICB9XG5cbiAgZ2V0IHN0cigpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5fc3RyID8/PSB0aGlzLl9pdGVtcy5yZWR1Y2UoKHM6IHN0cmluZywgYzogQ29kZUl0ZW0pID0+IGAke3N9JHtjfWAsIFwiXCIpKVxuICB9XG5cbiAgZ2V0IG5hbWVzKCk6IFVzZWROYW1lcyB7XG4gICAgcmV0dXJuICh0aGlzLl9uYW1lcyA/Pz0gdGhpcy5faXRlbXMucmVkdWNlKChuYW1lczogVXNlZE5hbWVzLCBjKSA9PiB7XG4gICAgICBpZiAoYyBpbnN0YW5jZW9mIE5hbWUpIG5hbWVzW2Muc3RyXSA9IChuYW1lc1tjLnN0cl0gfHwgMCkgKyAxXG4gICAgICByZXR1cm4gbmFtZXNcbiAgICB9LCB7fSkpXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ29kZUl0ZW0gPSBOYW1lIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG51bGxcblxuZXhwb3J0IHR5cGUgVXNlZE5hbWVzID0gUmVjb3JkPHN0cmluZywgbnVtYmVyIHwgdW5kZWZpbmVkPlxuXG5leHBvcnQgdHlwZSBDb2RlID0gX0NvZGUgfCBOYW1lXG5cbmV4cG9ydCB0eXBlIFNhZmVFeHByID0gQ29kZSB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsXG5cbmV4cG9ydCBjb25zdCBuaWwgPSBuZXcgX0NvZGUoXCJcIilcblxudHlwZSBDb2RlQXJnID0gU2FmZUV4cHIgfCBzdHJpbmcgfCB1bmRlZmluZWRcblxuZXhwb3J0IGZ1bmN0aW9uIF8oc3RyczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLmFyZ3M6IENvZGVBcmdbXSk6IF9Db2RlIHtcbiAgY29uc3QgY29kZTogQ29kZUl0ZW1bXSA9IFtzdHJzWzBdXVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBhcmdzLmxlbmd0aCkge1xuICAgIGFkZENvZGVBcmcoY29kZSwgYXJnc1tpXSlcbiAgICBjb2RlLnB1c2goc3Ryc1srK2ldKVxuICB9XG4gIHJldHVybiBuZXcgX0NvZGUoY29kZSlcbn1cblxuY29uc3QgcGx1cyA9IG5ldyBfQ29kZShcIitcIilcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihzdHJzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4uYXJnczogKENvZGVBcmcgfCBzdHJpbmdbXSlbXSk6IF9Db2RlIHtcbiAgY29uc3QgZXhwcjogQ29kZUl0ZW1bXSA9IFtzYWZlU3RyaW5naWZ5KHN0cnNbMF0pXVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBhcmdzLmxlbmd0aCkge1xuICAgIGV4cHIucHVzaChwbHVzKVxuICAgIGFkZENvZGVBcmcoZXhwciwgYXJnc1tpXSlcbiAgICBleHByLnB1c2gocGx1cywgc2FmZVN0cmluZ2lmeShzdHJzWysraV0pKVxuICB9XG4gIG9wdGltaXplKGV4cHIpXG4gIHJldHVybiBuZXcgX0NvZGUoZXhwcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvZGVBcmcoY29kZTogQ29kZUl0ZW1bXSwgYXJnOiBDb2RlQXJnIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgaWYgKGFyZyBpbnN0YW5jZW9mIF9Db2RlKSBjb2RlLnB1c2goLi4uYXJnLl9pdGVtcylcbiAgZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgTmFtZSkgY29kZS5wdXNoKGFyZylcbiAgZWxzZSBjb2RlLnB1c2goaW50ZXJwb2xhdGUoYXJnKSlcbn1cblxuZnVuY3Rpb24gb3B0aW1pemUoZXhwcjogQ29kZUl0ZW1bXSk6IHZvaWQge1xuICBsZXQgaSA9IDFcbiAgd2hpbGUgKGkgPCBleHByLmxlbmd0aCAtIDEpIHtcbiAgICBpZiAoZXhwcltpXSA9PT0gcGx1cykge1xuICAgICAgY29uc3QgcmVzID0gbWVyZ2VFeHBySXRlbXMoZXhwcltpIC0gMV0sIGV4cHJbaSArIDFdKVxuICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV4cHIuc3BsaWNlKGkgLSAxLCAzLCByZXMpXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBleHByW2krK10gPSBcIitcIlxuICAgIH1cbiAgICBpKytcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUV4cHJJdGVtcyhhOiBDb2RlSXRlbSwgYjogQ29kZUl0ZW0pOiBDb2RlSXRlbSB8IHVuZGVmaW5lZCB7XG4gIGlmIChiID09PSAnXCJcIicpIHJldHVybiBhXG4gIGlmIChhID09PSAnXCJcIicpIHJldHVybiBiXG4gIGlmICh0eXBlb2YgYSA9PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBOYW1lIHx8IGFbYS5sZW5ndGggLSAxXSAhPT0gJ1wiJykgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBiICE9IFwic3RyaW5nXCIpIHJldHVybiBgJHthLnNsaWNlKDAsIC0xKX0ke2J9XCJgXG4gICAgaWYgKGJbMF0gPT09ICdcIicpIHJldHVybiBhLnNsaWNlKDAsIC0xKSArIGIuc2xpY2UoMSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIGIgPT0gXCJzdHJpbmdcIiAmJiBiWzBdID09PSAnXCInICYmICEoYSBpbnN0YW5jZW9mIE5hbWUpKSByZXR1cm4gYFwiJHthfSR7Yi5zbGljZSgxKX1gXG4gIHJldHVyblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyQ29uY2F0KGMxOiBDb2RlLCBjMjogQ29kZSk6IENvZGUge1xuICByZXR1cm4gYzIuZW1wdHlTdHIoKSA/IGMxIDogYzEuZW1wdHlTdHIoKSA/IGMyIDogc3RyYCR7YzF9JHtjMn1gXG59XG5cbi8vIFRPRE8gZG8gbm90IGFsbG93IGFycmF5cyBoZXJlXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZSh4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXIgfCBib29sZWFuIHwgbnVsbCk6IFNhZmVFeHByIHwgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHggPT0gXCJib29sZWFuXCIgfHwgeCA9PT0gbnVsbFxuICAgID8geFxuICAgIDogc2FmZVN0cmluZ2lmeShBcnJheS5pc0FycmF5KHgpID8geC5qb2luKFwiLFwiKSA6IHgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkoeDogdW5rbm93bik6IENvZGUge1xuICByZXR1cm4gbmV3IF9Db2RlKHNhZmVTdHJpbmdpZnkoeCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlU3RyaW5naWZ5KHg6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeClcbiAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCBcIlxcXFx1MjAyOFwiKVxuICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csIFwiXFxcXHUyMDI5XCIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShrZXk6IENvZGUgfCBzdHJpbmcgfCBudW1iZXIpOiBDb2RlIHtcbiAgcmV0dXJuIHR5cGVvZiBrZXkgPT0gXCJzdHJpbmdcIiAmJiBJREVOVElGSUVSLnRlc3Qoa2V5KSA/IG5ldyBfQ29kZShgLiR7a2V5fWApIDogX2BbJHtrZXl9XWBcbn1cblxuLy9Eb2VzIGJlc3QgZWZmb3J0IHRvIGZvcm1hdCB0aGUgbmFtZSBwcm9wZXJseVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVzbUV4cG9ydE5hbWUoa2V5OiBDb2RlIHwgc3RyaW5nIHwgbnVtYmVyKTogQ29kZSB7XG4gIGlmICh0eXBlb2Yga2V5ID09IFwic3RyaW5nXCIgJiYgSURFTlRJRklFUi50ZXN0KGtleSkpIHtcbiAgICByZXR1cm4gbmV3IF9Db2RlKGAke2tleX1gKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ29kZUdlbjogaW52YWxpZCBleHBvcnQgbmFtZTogJHtrZXl9LCB1c2UgZXhwbGljaXQgJGlkIG5hbWUgbWFwcGluZ2ApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdleHBDb2RlKHJ4OiBSZWdFeHApOiBDb2RlIHtcbiAgcmV0dXJuIG5ldyBfQ29kZShyeC50b1N0cmluZygpKVxufVxuIiwgImltcG9ydCB7XywgbmlsLCBDb2RlLCBOYW1lfSBmcm9tIFwiLi9jb2RlXCJcblxuaW50ZXJmYWNlIE5hbWVHcm91cCB7XG4gIHByZWZpeDogc3RyaW5nXG4gIGluZGV4OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW1lVmFsdWUge1xuICByZWY6IFZhbHVlUmVmZXJlbmNlIC8vIHRoaXMgaXMgdGhlIHJlZmVyZW5jZSB0byBhbnkgdmFsdWUgdGhhdCBjYW4gYmUgcmVmZXJyZWQgdG8gZnJvbSBnZW5lcmF0ZWQgY29kZSB2aWEgYGdsb2JhbHNgIHZhciBpbiB0aGUgY2xvc3VyZVxuICBrZXk/OiB1bmtub3duIC8vIGFueSBrZXkgdG8gaWRlbnRpZnkgYSBnbG9iYWwgdG8gYXZvaWQgZHVwbGljYXRlcywgaWYgbm90IHBhc3NlZCByZWYgaXMgdXNlZFxuICBjb2RlPzogQ29kZSAvLyB0aGlzIGlzIHRoZSBjb2RlIGNyZWF0aW5nIHRoZSB2YWx1ZSBuZWVkZWQgZm9yIHN0YW5kYWxvbmUgY29kZSB3aXRfb3V0IGNsb3N1cmUgLSBjYW4gYmUgYSBwcmltaXRpdmUgdmFsdWUsIGZ1bmN0aW9uIG9yIGltcG9ydCAoYHJlcXVpcmVgKVxufVxuXG5leHBvcnQgdHlwZSBWYWx1ZVJlZmVyZW5jZSA9IHVua25vd24gLy8gcG9zc2libHkgbWFrZSBDb2RlR2VuIHBhcmFtZXRlcml6ZWQgdHlwZSBvbiB0aGlzIHR5cGVcblxuY2xhc3MgVmFsdWVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcmVhZG9ubHkgdmFsdWU/OiBOYW1lVmFsdWVcbiAgY29uc3RydWN0b3IobmFtZTogVmFsdWVTY29wZU5hbWUpIHtcbiAgICBzdXBlcihgQ29kZUdlbjogXCJjb2RlXCIgZm9yICR7bmFtZX0gbm90IGRlZmluZWRgKVxuICAgIHRoaXMudmFsdWUgPSBuYW1lLnZhbHVlXG4gIH1cbn1cblxuaW50ZXJmYWNlIFNjb3BlT3B0aW9ucyB7XG4gIHByZWZpeGVzPzogU2V0PHN0cmluZz5cbiAgcGFyZW50PzogU2NvcGVcbn1cblxuaW50ZXJmYWNlIFZhbHVlU2NvcGVPcHRpb25zIGV4dGVuZHMgU2NvcGVPcHRpb25zIHtcbiAgc2NvcGU6IFNjb3BlU3RvcmVcbiAgZXM1PzogYm9vbGVhblxuICBsaW5lcz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgU2NvcGVTdG9yZSA9IFJlY29yZDxzdHJpbmcsIFZhbHVlUmVmZXJlbmNlW10gfCB1bmRlZmluZWQ+XG5cbnR5cGUgU2NvcGVWYWx1ZXMgPSB7XG4gIFtQcmVmaXggaW4gc3RyaW5nXT86IE1hcDx1bmtub3duLCBWYWx1ZVNjb3BlTmFtZT5cbn1cblxuZXhwb3J0IHR5cGUgU2NvcGVWYWx1ZVNldHMgPSB7XG4gIFtQcmVmaXggaW4gc3RyaW5nXT86IFNldDxWYWx1ZVNjb3BlTmFtZT5cbn1cblxuZXhwb3J0IGVudW0gVXNlZFZhbHVlU3RhdGUge1xuICBTdGFydGVkLFxuICBDb21wbGV0ZWQsXG59XG5cbmV4cG9ydCB0eXBlIFVzZWRTY29wZVZhbHVlcyA9IHtcbiAgW1ByZWZpeCBpbiBzdHJpbmddPzogTWFwPFZhbHVlU2NvcGVOYW1lLCBVc2VkVmFsdWVTdGF0ZSB8IHVuZGVmaW5lZD5cbn1cblxuZXhwb3J0IGNvbnN0IHZhcktpbmRzID0ge1xuICBjb25zdDogbmV3IE5hbWUoXCJjb25zdFwiKSxcbiAgbGV0OiBuZXcgTmFtZShcImxldFwiKSxcbiAgdmFyOiBuZXcgTmFtZShcInZhclwiKSxcbn1cblxuZXhwb3J0IGNsYXNzIFNjb3BlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9uYW1lczoge1tQcmVmaXggaW4gc3RyaW5nXT86IE5hbWVHcm91cH0gPSB7fVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ByZWZpeGVzPzogU2V0PHN0cmluZz5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9wYXJlbnQ/OiBTY29wZVxuXG4gIGNvbnN0cnVjdG9yKHtwcmVmaXhlcywgcGFyZW50fTogU2NvcGVPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9wcmVmaXhlcyA9IHByZWZpeGVzXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50XG4gIH1cblxuICB0b05hbWUobmFtZU9yUHJlZml4OiBOYW1lIHwgc3RyaW5nKTogTmFtZSB7XG4gICAgcmV0dXJuIG5hbWVPclByZWZpeCBpbnN0YW5jZW9mIE5hbWUgPyBuYW1lT3JQcmVmaXggOiB0aGlzLm5hbWUobmFtZU9yUHJlZml4KVxuICB9XG5cbiAgbmFtZShwcmVmaXg6IHN0cmluZyk6IE5hbWUge1xuICAgIHJldHVybiBuZXcgTmFtZSh0aGlzLl9uZXdOYW1lKHByZWZpeCkpXG4gIH1cblxuICBwcm90ZWN0ZWQgX25ld05hbWUocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5nID0gdGhpcy5fbmFtZXNbcHJlZml4XSB8fCB0aGlzLl9uYW1lR3JvdXAocHJlZml4KVxuICAgIHJldHVybiBgJHtwcmVmaXh9JHtuZy5pbmRleCsrfWBcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVHcm91cChwcmVmaXg6IHN0cmluZyk6IE5hbWVHcm91cCB7XG4gICAgaWYgKHRoaXMuX3BhcmVudD8uX3ByZWZpeGVzPy5oYXMocHJlZml4KSB8fCAodGhpcy5fcHJlZml4ZXMgJiYgIXRoaXMuX3ByZWZpeGVzLmhhcyhwcmVmaXgpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2RlR2VuOiBwcmVmaXggXCIke3ByZWZpeH1cIiBpcyBub3QgYWxsb3dlZCBpbiB0aGlzIHNjb3BlYClcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLl9uYW1lc1twcmVmaXhdID0ge3ByZWZpeCwgaW5kZXg6IDB9KVxuICB9XG59XG5cbmludGVyZmFjZSBTY29wZVBhdGgge1xuICBwcm9wZXJ0eTogc3RyaW5nXG4gIGl0ZW1JbmRleDogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNjb3BlTmFtZSBleHRlbmRzIE5hbWUge1xuICByZWFkb25seSBwcmVmaXg6IHN0cmluZ1xuICB2YWx1ZT86IE5hbWVWYWx1ZVxuICBzY29wZVBhdGg/OiBDb2RlXG5cbiAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcsIG5hbWVTdHI6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWVTdHIpXG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXhcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBOYW1lVmFsdWUsIHtwcm9wZXJ0eSwgaXRlbUluZGV4fTogU2NvcGVQYXRoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5zY29wZVBhdGggPSBfYC4ke25ldyBOYW1lKHByb3BlcnR5KX1bJHtpdGVtSW5kZXh9XWBcbiAgfVxufVxuXG5pbnRlcmZhY2UgVlNPcHRpb25zIGV4dGVuZHMgVmFsdWVTY29wZU9wdGlvbnMge1xuICBfbjogQ29kZVxufVxuXG5jb25zdCBsaW5lID0gX2BcXG5gXG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNjb3BlIGV4dGVuZHMgU2NvcGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ZhbHVlczogU2NvcGVWYWx1ZXMgPSB7fVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3Njb3BlOiBTY29wZVN0b3JlXG4gIHJlYWRvbmx5IG9wdHM6IFZTT3B0aW9uc1xuXG4gIGNvbnN0cnVjdG9yKG9wdHM6IFZhbHVlU2NvcGVPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLl9zY29wZSA9IG9wdHMuc2NvcGVcbiAgICB0aGlzLm9wdHMgPSB7Li4ub3B0cywgX246IG9wdHMubGluZXMgPyBsaW5lIDogbmlsfVxuICB9XG5cbiAgZ2V0KCk6IFNjb3BlU3RvcmUge1xuICAgIHJldHVybiB0aGlzLl9zY29wZVxuICB9XG5cbiAgbmFtZShwcmVmaXg6IHN0cmluZyk6IFZhbHVlU2NvcGVOYW1lIHtcbiAgICByZXR1cm4gbmV3IFZhbHVlU2NvcGVOYW1lKHByZWZpeCwgdGhpcy5fbmV3TmFtZShwcmVmaXgpKVxuICB9XG5cbiAgdmFsdWUobmFtZU9yUHJlZml4OiBWYWx1ZVNjb3BlTmFtZSB8IHN0cmluZywgdmFsdWU6IE5hbWVWYWx1ZSk6IFZhbHVlU2NvcGVOYW1lIHtcbiAgICBpZiAodmFsdWUucmVmID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIkNvZGVHZW46IHJlZiBtdXN0IGJlIHBhc3NlZCBpbiB2YWx1ZVwiKVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnRvTmFtZShuYW1lT3JQcmVmaXgpIGFzIFZhbHVlU2NvcGVOYW1lXG4gICAgY29uc3Qge3ByZWZpeH0gPSBuYW1lXG4gICAgY29uc3QgdmFsdWVLZXkgPSB2YWx1ZS5rZXkgPz8gdmFsdWUucmVmXG4gICAgbGV0IHZzID0gdGhpcy5fdmFsdWVzW3ByZWZpeF1cbiAgICBpZiAodnMpIHtcbiAgICAgIGNvbnN0IF9uYW1lID0gdnMuZ2V0KHZhbHVlS2V5KVxuICAgICAgaWYgKF9uYW1lKSByZXR1cm4gX25hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgdnMgPSB0aGlzLl92YWx1ZXNbcHJlZml4XSA9IG5ldyBNYXAoKVxuICAgIH1cbiAgICB2cy5zZXQodmFsdWVLZXksIG5hbWUpXG5cbiAgICBjb25zdCBzID0gdGhpcy5fc2NvcGVbcHJlZml4XSB8fCAodGhpcy5fc2NvcGVbcHJlZml4XSA9IFtdKVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHMubGVuZ3RoXG4gICAgc1tpdGVtSW5kZXhdID0gdmFsdWUucmVmXG4gICAgbmFtZS5zZXRWYWx1ZSh2YWx1ZSwge3Byb3BlcnR5OiBwcmVmaXgsIGl0ZW1JbmRleH0pXG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIGdldFZhbHVlKHByZWZpeDogc3RyaW5nLCBrZXlPclJlZjogdW5rbm93bik6IFZhbHVlU2NvcGVOYW1lIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB2cyA9IHRoaXMuX3ZhbHVlc1twcmVmaXhdXG4gICAgaWYgKCF2cykgcmV0dXJuXG4gICAgcmV0dXJuIHZzLmdldChrZXlPclJlZilcbiAgfVxuXG4gIHNjb3BlUmVmcyhzY29wZU5hbWU6IE5hbWUsIHZhbHVlczogU2NvcGVWYWx1ZXMgfCBTY29wZVZhbHVlU2V0cyA9IHRoaXMuX3ZhbHVlcyk6IENvZGUge1xuICAgIHJldHVybiB0aGlzLl9yZWR1Y2VWYWx1ZXModmFsdWVzLCAobmFtZTogVmFsdWVTY29wZU5hbWUpID0+IHtcbiAgICAgIGlmIChuYW1lLnNjb3BlUGF0aCA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYENvZGVHZW46IG5hbWUgXCIke25hbWV9XCIgaGFzIG5vIHZhbHVlYClcbiAgICAgIHJldHVybiBfYCR7c2NvcGVOYW1lfSR7bmFtZS5zY29wZVBhdGh9YFxuICAgIH0pXG4gIH1cblxuICBzY29wZUNvZGUoXG4gICAgdmFsdWVzOiBTY29wZVZhbHVlcyB8IFNjb3BlVmFsdWVTZXRzID0gdGhpcy5fdmFsdWVzLFxuICAgIHVzZWRWYWx1ZXM/OiBVc2VkU2NvcGVWYWx1ZXMsXG4gICAgZ2V0Q29kZT86IChuOiBWYWx1ZVNjb3BlTmFtZSkgPT4gQ29kZSB8IHVuZGVmaW5lZFxuICApOiBDb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkdWNlVmFsdWVzKFxuICAgICAgdmFsdWVzLFxuICAgICAgKG5hbWU6IFZhbHVlU2NvcGVOYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lLnZhbHVlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgQ29kZUdlbjogbmFtZSBcIiR7bmFtZX1cIiBoYXMgbm8gdmFsdWVgKVxuICAgICAgICByZXR1cm4gbmFtZS52YWx1ZS5jb2RlXG4gICAgICB9LFxuICAgICAgdXNlZFZhbHVlcyxcbiAgICAgIGdldENvZGVcbiAgICApXG4gIH1cblxuICBwcml2YXRlIF9yZWR1Y2VWYWx1ZXMoXG4gICAgdmFsdWVzOiBTY29wZVZhbHVlcyB8IFNjb3BlVmFsdWVTZXRzLFxuICAgIHZhbHVlQ29kZTogKG46IFZhbHVlU2NvcGVOYW1lKSA9PiBDb2RlIHwgdW5kZWZpbmVkLFxuICAgIHVzZWRWYWx1ZXM6IFVzZWRTY29wZVZhbHVlcyA9IHt9LFxuICAgIGdldENvZGU/OiAobjogVmFsdWVTY29wZU5hbWUpID0+IENvZGUgfCB1bmRlZmluZWRcbiAgKTogQ29kZSB7XG4gICAgbGV0IGNvZGU6IENvZGUgPSBuaWxcbiAgICBmb3IgKGNvbnN0IHByZWZpeCBpbiB2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IHZzID0gdmFsdWVzW3ByZWZpeF1cbiAgICAgIGlmICghdnMpIGNvbnRpbnVlXG4gICAgICBjb25zdCBuYW1lU2V0ID0gKHVzZWRWYWx1ZXNbcHJlZml4XSA9IHVzZWRWYWx1ZXNbcHJlZml4XSB8fCBuZXcgTWFwKCkpXG4gICAgICB2cy5mb3JFYWNoKChuYW1lOiBWYWx1ZVNjb3BlTmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZVNldC5oYXMobmFtZSkpIHJldHVyblxuICAgICAgICBuYW1lU2V0LnNldChuYW1lLCBVc2VkVmFsdWVTdGF0ZS5TdGFydGVkKVxuICAgICAgICBsZXQgYyA9IHZhbHVlQ29kZShuYW1lKVxuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIGNvbnN0IGRlZiA9IHRoaXMub3B0cy5lczUgPyB2YXJLaW5kcy52YXIgOiB2YXJLaW5kcy5jb25zdFxuICAgICAgICAgIGNvZGUgPSBfYCR7Y29kZX0ke2RlZn0gJHtuYW1lfSA9ICR7Y307JHt0aGlzLm9wdHMuX259YFxuICAgICAgICB9IGVsc2UgaWYgKChjID0gZ2V0Q29kZT8uKG5hbWUpKSkge1xuICAgICAgICAgIGNvZGUgPSBfYCR7Y29kZX0ke2N9JHt0aGlzLm9wdHMuX259YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKG5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgbmFtZVNldC5zZXQobmFtZSwgVXNlZFZhbHVlU3RhdGUuQ29tcGxldGVkKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGNvZGVcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHtTY29wZVZhbHVlU2V0cywgTmFtZVZhbHVlLCBWYWx1ZVNjb3BlLCBWYWx1ZVNjb3BlTmFtZX0gZnJvbSBcIi4vc2NvcGVcIlxuaW1wb3J0IHtfLCBuaWwsIF9Db2RlLCBDb2RlLCBOYW1lLCBVc2VkTmFtZXMsIENvZGVJdGVtLCBhZGRDb2RlQXJnLCBfQ29kZU9yTmFtZX0gZnJvbSBcIi4vY29kZVwiXG5pbXBvcnQge1Njb3BlLCB2YXJLaW5kc30gZnJvbSBcIi4vc2NvcGVcIlxuXG5leHBvcnQge18sIHN0ciwgc3RyQ29uY2F0LCBuaWwsIGdldFByb3BlcnR5LCBzdHJpbmdpZnksIHJlZ2V4cENvZGUsIE5hbWUsIENvZGV9IGZyb20gXCIuL2NvZGVcIlxuZXhwb3J0IHtTY29wZSwgU2NvcGVTdG9yZSwgVmFsdWVTY29wZSwgVmFsdWVTY29wZU5hbWUsIFNjb3BlVmFsdWVTZXRzLCB2YXJLaW5kc30gZnJvbSBcIi4vc2NvcGVcIlxuXG4vLyB0eXBlIGZvciBleHByZXNzaW9ucyB0aGF0IGNhbiBiZSBzYWZlbHkgaW5zZXJ0ZWQgaW4gY29kZSB3aXRob3V0IHF1b3Rlc1xuZXhwb3J0IHR5cGUgU2FmZUV4cHIgPSBDb2RlIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG51bGxcblxuLy8gdHlwZSB0aGF0IGlzIGVpdGhlciBDb2RlIG9mIGZ1bmN0aW9uIHRoYXQgYWRkcyBjb2RlIHRvIENvZGVHZW4gaW5zdGFuY2UgdXNpbmcgaXRzIG1ldGhvZHNcbmV4cG9ydCB0eXBlIEJsb2NrID0gQ29kZSB8ICgoKSA9PiB2b2lkKVxuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JzID0ge1xuICBHVDogbmV3IF9Db2RlKFwiPlwiKSxcbiAgR1RFOiBuZXcgX0NvZGUoXCI+PVwiKSxcbiAgTFQ6IG5ldyBfQ29kZShcIjxcIiksXG4gIExURTogbmV3IF9Db2RlKFwiPD1cIiksXG4gIEVROiBuZXcgX0NvZGUoXCI9PT1cIiksXG4gIE5FUTogbmV3IF9Db2RlKFwiIT09XCIpLFxuICBOT1Q6IG5ldyBfQ29kZShcIiFcIiksXG4gIE9SOiBuZXcgX0NvZGUoXCJ8fFwiKSxcbiAgQU5EOiBuZXcgX0NvZGUoXCImJlwiKSxcbiAgQUREOiBuZXcgX0NvZGUoXCIrXCIpLFxufVxuXG5hYnN0cmFjdCBjbGFzcyBOb2RlIHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbmFtZXM6IFVzZWROYW1lc1xuXG4gIG9wdGltaXplTm9kZXMoKTogdGhpcyB8IENoaWxkTm9kZSB8IENoaWxkTm9kZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhfbmFtZXM6IFVzZWROYW1lcywgX2NvbnN0YW50czogQ29uc3RhbnRzKTogdGhpcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAvLyAgIHJldHVybiAxXG4gIC8vIH1cbn1cblxuY2xhc3MgRGVmIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFyS2luZDogTmFtZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IE5hbWUsXG4gICAgcHJpdmF0ZSByaHM/OiBTYWZlRXhwclxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICByZW5kZXIoe2VzNSwgX259OiBDR09wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhcktpbmQgPSBlczUgPyB2YXJLaW5kcy52YXIgOiB0aGlzLnZhcktpbmRcbiAgICBjb25zdCByaHMgPSB0aGlzLnJocyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGAgPSAke3RoaXMucmhzfWBcbiAgICByZXR1cm4gYCR7dmFyS2luZH0gJHt0aGlzLm5hbWV9JHtyaHN9O2AgKyBfblxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMgfCB1bmRlZmluZWQge1xuICAgIGlmICghbmFtZXNbdGhpcy5uYW1lLnN0cl0pIHJldHVyblxuICAgIGlmICh0aGlzLnJocykgdGhpcy5yaHMgPSBvcHRpbWl6ZUV4cHIodGhpcy5yaHMsIG5hbWVzLCBjb25zdGFudHMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldCBuYW1lcygpOiBVc2VkTmFtZXMge1xuICAgIHJldHVybiB0aGlzLnJocyBpbnN0YW5jZW9mIF9Db2RlT3JOYW1lID8gdGhpcy5yaHMubmFtZXMgOiB7fVxuICB9XG59XG5cbmNsYXNzIEFzc2lnbiBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBsaHM6IENvZGUsXG4gICAgcHVibGljIHJoczogU2FmZUV4cHIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaWRlRWZmZWN0cz86IGJvb2xlYW5cbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcmVuZGVyKHtfbn06IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMubGhzfSA9ICR7dGhpcy5yaHN9O2AgKyBfblxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmxocyBpbnN0YW5jZW9mIE5hbWUgJiYgIW5hbWVzW3RoaXMubGhzLnN0cl0gJiYgIXRoaXMuc2lkZUVmZmVjdHMpIHJldHVyblxuICAgIHRoaXMucmhzID0gb3B0aW1pemVFeHByKHRoaXMucmhzLCBuYW1lcywgY29uc3RhbnRzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgbmFtZXMoKTogVXNlZE5hbWVzIHtcbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubGhzIGluc3RhbmNlb2YgTmFtZSA/IHt9IDogey4uLnRoaXMubGhzLm5hbWVzfVxuICAgIHJldHVybiBhZGRFeHByTmFtZXMobmFtZXMsIHRoaXMucmhzKVxuICB9XG59XG5cbmNsYXNzIEFzc2lnbk9wIGV4dGVuZHMgQXNzaWduIHtcbiAgY29uc3RydWN0b3IoXG4gICAgbGhzOiBDb2RlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3A6IENvZGUsXG4gICAgcmhzOiBTYWZlRXhwcixcbiAgICBzaWRlRWZmZWN0cz86IGJvb2xlYW5cbiAgKSB7XG4gICAgc3VwZXIobGhzLCByaHMsIHNpZGVFZmZlY3RzKVxuICB9XG5cbiAgcmVuZGVyKHtfbn06IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMubGhzfSAke3RoaXMub3B9PSAke3RoaXMucmhzfTtgICsgX25cbiAgfVxufVxuXG5jbGFzcyBMYWJlbCBleHRlbmRzIE5vZGUge1xuICByZWFkb25seSBuYW1lczogVXNlZE5hbWVzID0ge31cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgbGFiZWw6IE5hbWUpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICByZW5kZXIoe19ufTogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5sYWJlbH06YCArIF9uXG4gIH1cbn1cblxuY2xhc3MgQnJlYWsgZXh0ZW5kcyBOb2RlIHtcbiAgcmVhZG9ubHkgbmFtZXM6IFVzZWROYW1lcyA9IHt9XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGxhYmVsPzogQ29kZSkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIHJlbmRlcih7X259OiBDR09wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbCA/IGAgJHt0aGlzLmxhYmVsfWAgOiBcIlwiXG4gICAgcmV0dXJuIGBicmVhayR7bGFiZWx9O2AgKyBfblxuICB9XG59XG5cbmNsYXNzIFRocm93IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGVycm9yOiBDb2RlKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcmVuZGVyKHtfbn06IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGB0aHJvdyAke3RoaXMuZXJyb3J9O2AgKyBfblxuICB9XG5cbiAgZ2V0IG5hbWVzKCk6IFVzZWROYW1lcyB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3IubmFtZXNcbiAgfVxufVxuXG5jbGFzcyBBbnlDb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29kZTogU2FmZUV4cHIpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICByZW5kZXIoe19ufTogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb2RlfTtgICsgX25cbiAgfVxuXG4gIG9wdGltaXplTm9kZXMoKTogdGhpcyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGAke3RoaXMuY29kZX1gID8gdGhpcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMge1xuICAgIHRoaXMuY29kZSA9IG9wdGltaXplRXhwcih0aGlzLmNvZGUsIG5hbWVzLCBjb25zdGFudHMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldCBuYW1lcygpOiBVc2VkTmFtZXMge1xuICAgIHJldHVybiB0aGlzLmNvZGUgaW5zdGFuY2VvZiBfQ29kZU9yTmFtZSA/IHRoaXMuY29kZS5uYW1lcyA6IHt9XG4gIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgUGFyZW50Tm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBub2RlczogQ2hpbGROb2RlW10gPSBbXSkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIHJlbmRlcihvcHRzOiBDR09wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLnJlZHVjZSgoY29kZSwgbikgPT4gY29kZSArIG4ucmVuZGVyKG9wdHMpLCBcIlwiKVxuICB9XG5cbiAgb3B0aW1pemVOb2RlcygpOiB0aGlzIHwgQ2hpbGROb2RlIHwgQ2hpbGROb2RlW10gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtub2Rlc30gPSB0aGlzXG4gICAgbGV0IGkgPSBub2Rlcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBuID0gbm9kZXNbaV0ub3B0aW1pemVOb2RlcygpXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuKSkgbm9kZXMuc3BsaWNlKGksIDEsIC4uLm4pXG4gICAgICBlbHNlIGlmIChuKSBub2Rlc1tpXSA9IG5cbiAgICAgIGVsc2Ugbm9kZXMuc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gdGhpcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtub2Rlc30gPSB0aGlzXG4gICAgbGV0IGkgPSBub2Rlcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBpdGVyYXRpbmcgYmFja3dhcmRzIGltcHJvdmVzIDEtcGFzcyBvcHRpbWl6YXRpb25cbiAgICAgIGNvbnN0IG4gPSBub2Rlc1tpXVxuICAgICAgaWYgKG4ub3B0aW1pemVOYW1lcyhuYW1lcywgY29uc3RhbnRzKSkgY29udGludWVcbiAgICAgIHN1YnRyYWN0TmFtZXMobmFtZXMsIG4ubmFtZXMpXG4gICAgICBub2Rlcy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA+IDAgPyB0aGlzIDogdW5kZWZpbmVkXG4gIH1cblxuICBnZXQgbmFtZXMoKTogVXNlZE5hbWVzIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5yZWR1Y2UoKG5hbWVzOiBVc2VkTmFtZXMsIG4pID0+IGFkZE5hbWVzKG5hbWVzLCBuLm5hbWVzKSwge30pXG4gIH1cblxuICAvLyBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgLy8gICByZXR1cm4gdGhpcy5ub2Rlcy5yZWR1Y2UoKGMsIG4pID0+IGMgKyBuLmNvdW50LCAxKVxuICAvLyB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEJsb2NrTm9kZSBleHRlbmRzIFBhcmVudE5vZGUge1xuICByZW5kZXIob3B0czogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ7XCIgKyBvcHRzLl9uICsgc3VwZXIucmVuZGVyKG9wdHMpICsgXCJ9XCIgKyBvcHRzLl9uXG4gIH1cbn1cblxuY2xhc3MgUm9vdCBleHRlbmRzIFBhcmVudE5vZGUge31cblxuY2xhc3MgRWxzZSBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIHN0YXRpYyByZWFkb25seSBraW5kID0gXCJlbHNlXCJcbn1cblxuY2xhc3MgSWYgZXh0ZW5kcyBCbG9ja05vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkga2luZCA9IFwiaWZcIlxuICBlbHNlPzogSWYgfCBFbHNlXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZGl0aW9uOiBDb2RlIHwgYm9vbGVhbixcbiAgICBub2Rlcz86IENoaWxkTm9kZVtdXG4gICkge1xuICAgIHN1cGVyKG5vZGVzKVxuICB9XG5cbiAgcmVuZGVyKG9wdHM6IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IGNvZGUgPSBgaWYoJHt0aGlzLmNvbmRpdGlvbn0pYCArIHN1cGVyLnJlbmRlcihvcHRzKVxuICAgIGlmICh0aGlzLmVsc2UpIGNvZGUgKz0gXCJlbHNlIFwiICsgdGhpcy5lbHNlLnJlbmRlcihvcHRzKVxuICAgIHJldHVybiBjb2RlXG4gIH1cblxuICBvcHRpbWl6ZU5vZGVzKCk6IElmIHwgQ2hpbGROb2RlW10gfCB1bmRlZmluZWQge1xuICAgIHN1cGVyLm9wdGltaXplTm9kZXMoKVxuICAgIGNvbnN0IGNvbmQgPSB0aGlzLmNvbmRpdGlvblxuICAgIGlmIChjb25kID09PSB0cnVlKSByZXR1cm4gdGhpcy5ub2RlcyAvLyBlbHNlIGlzIGlnbm9yZWQgaGVyZVxuICAgIGxldCBlID0gdGhpcy5lbHNlXG4gICAgaWYgKGUpIHtcbiAgICAgIGNvbnN0IG5zID0gZS5vcHRpbWl6ZU5vZGVzKClcbiAgICAgIGUgPSB0aGlzLmVsc2UgPSBBcnJheS5pc0FycmF5KG5zKSA/IG5ldyBFbHNlKG5zKSA6IChucyBhcyBFbHNlIHwgdW5kZWZpbmVkKVxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgaWYgKGNvbmQgPT09IGZhbHNlKSByZXR1cm4gZSBpbnN0YW5jZW9mIElmID8gZSA6IGUubm9kZXNcbiAgICAgIGlmICh0aGlzLm5vZGVzLmxlbmd0aCkgcmV0dXJuIHRoaXNcbiAgICAgIHJldHVybiBuZXcgSWYobm90KGNvbmQpLCBlIGluc3RhbmNlb2YgSWYgPyBbZV0gOiBlLm5vZGVzKVxuICAgIH1cbiAgICBpZiAoY29uZCA9PT0gZmFsc2UgfHwgIXRoaXMubm9kZXMubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG9wdGltaXplTmFtZXMobmFtZXM6IFVzZWROYW1lcywgY29uc3RhbnRzOiBDb25zdGFudHMpOiB0aGlzIHwgdW5kZWZpbmVkIHtcbiAgICB0aGlzLmVsc2UgPSB0aGlzLmVsc2U/Lm9wdGltaXplTmFtZXMobmFtZXMsIGNvbnN0YW50cylcbiAgICBpZiAoIShzdXBlci5vcHRpbWl6ZU5hbWVzKG5hbWVzLCBjb25zdGFudHMpIHx8IHRoaXMuZWxzZSkpIHJldHVyblxuICAgIHRoaXMuY29uZGl0aW9uID0gb3B0aW1pemVFeHByKHRoaXMuY29uZGl0aW9uLCBuYW1lcywgY29uc3RhbnRzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgbmFtZXMoKTogVXNlZE5hbWVzIHtcbiAgICBjb25zdCBuYW1lcyA9IHN1cGVyLm5hbWVzXG4gICAgYWRkRXhwck5hbWVzKG5hbWVzLCB0aGlzLmNvbmRpdGlvbilcbiAgICBpZiAodGhpcy5lbHNlKSBhZGROYW1lcyhuYW1lcywgdGhpcy5lbHNlLm5hbWVzKVxuICAgIHJldHVybiBuYW1lc1xuICB9XG5cbiAgLy8gZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gIC8vICAgcmV0dXJuIHN1cGVyLmNvdW50ICsgKHRoaXMuZWxzZT8uY291bnQgfHwgMClcbiAgLy8gfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBGb3IgZXh0ZW5kcyBCbG9ja05vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkga2luZCA9IFwiZm9yXCJcbn1cblxuY2xhc3MgRm9yTG9vcCBleHRlbmRzIEZvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlcmF0aW9uOiBDb2RlKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcmVuZGVyKG9wdHM6IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBmb3IoJHt0aGlzLml0ZXJhdGlvbn0pYCArIHN1cGVyLnJlbmRlcihvcHRzKVxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMgfCB1bmRlZmluZWQge1xuICAgIGlmICghc3VwZXIub3B0aW1pemVOYW1lcyhuYW1lcywgY29uc3RhbnRzKSkgcmV0dXJuXG4gICAgdGhpcy5pdGVyYXRpb24gPSBvcHRpbWl6ZUV4cHIodGhpcy5pdGVyYXRpb24sIG5hbWVzLCBjb25zdGFudHMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldCBuYW1lcygpOiBVc2VkTmFtZXMge1xuICAgIHJldHVybiBhZGROYW1lcyhzdXBlci5uYW1lcywgdGhpcy5pdGVyYXRpb24ubmFtZXMpXG4gIH1cbn1cblxuY2xhc3MgRm9yUmFuZ2UgZXh0ZW5kcyBGb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhcktpbmQ6IE5hbWUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBOYW1lLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnJvbTogU2FmZUV4cHIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0bzogU2FmZUV4cHJcbiAgKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgcmVuZGVyKG9wdHM6IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFyS2luZCA9IG9wdHMuZXM1ID8gdmFyS2luZHMudmFyIDogdGhpcy52YXJLaW5kXG4gICAgY29uc3Qge25hbWUsIGZyb20sIHRvfSA9IHRoaXNcbiAgICByZXR1cm4gYGZvcigke3ZhcktpbmR9ICR7bmFtZX09JHtmcm9tfTsgJHtuYW1lfTwke3RvfTsgJHtuYW1lfSsrKWAgKyBzdXBlci5yZW5kZXIob3B0cylcbiAgfVxuXG4gIGdldCBuYW1lcygpOiBVc2VkTmFtZXMge1xuICAgIGNvbnN0IG5hbWVzID0gYWRkRXhwck5hbWVzKHN1cGVyLm5hbWVzLCB0aGlzLmZyb20pXG4gICAgcmV0dXJuIGFkZEV4cHJOYW1lcyhuYW1lcywgdGhpcy50bylcbiAgfVxufVxuXG5jbGFzcyBGb3JJdGVyIGV4dGVuZHMgRm9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb29wOiBcIm9mXCIgfCBcImluXCIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YXJLaW5kOiBOYW1lLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogTmFtZSxcbiAgICBwcml2YXRlIGl0ZXJhYmxlOiBDb2RlXG4gICkge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIHJlbmRlcihvcHRzOiBDR09wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBgZm9yKCR7dGhpcy52YXJLaW5kfSAke3RoaXMubmFtZX0gJHt0aGlzLmxvb3B9ICR7dGhpcy5pdGVyYWJsZX0pYCArIHN1cGVyLnJlbmRlcihvcHRzKVxuICB9XG5cbiAgb3B0aW1pemVOYW1lcyhuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IHRoaXMgfCB1bmRlZmluZWQge1xuICAgIGlmICghc3VwZXIub3B0aW1pemVOYW1lcyhuYW1lcywgY29uc3RhbnRzKSkgcmV0dXJuXG4gICAgdGhpcy5pdGVyYWJsZSA9IG9wdGltaXplRXhwcih0aGlzLml0ZXJhYmxlLCBuYW1lcywgY29uc3RhbnRzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgbmFtZXMoKTogVXNlZE5hbWVzIHtcbiAgICByZXR1cm4gYWRkTmFtZXMoc3VwZXIubmFtZXMsIHRoaXMuaXRlcmFibGUubmFtZXMpXG4gIH1cbn1cblxuY2xhc3MgRnVuYyBleHRlbmRzIEJsb2NrTm9kZSB7XG4gIHN0YXRpYyByZWFkb25seSBraW5kID0gXCJmdW5jXCJcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IE5hbWUsXG4gICAgcHVibGljIGFyZ3M6IENvZGUsXG4gICAgcHVibGljIGFzeW5jPzogYm9vbGVhblxuICApIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICByZW5kZXIob3B0czogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBfYXN5bmMgPSB0aGlzLmFzeW5jID8gXCJhc3luYyBcIiA6IFwiXCJcbiAgICByZXR1cm4gYCR7X2FzeW5jfWZ1bmN0aW9uICR7dGhpcy5uYW1lfSgke3RoaXMuYXJnc30pYCArIHN1cGVyLnJlbmRlcihvcHRzKVxuICB9XG59XG5cbmNsYXNzIFJldHVybiBleHRlbmRzIFBhcmVudE5vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkga2luZCA9IFwicmV0dXJuXCJcblxuICByZW5kZXIob3B0czogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJyZXR1cm4gXCIgKyBzdXBlci5yZW5kZXIob3B0cylcbiAgfVxufVxuXG5jbGFzcyBUcnkgZXh0ZW5kcyBCbG9ja05vZGUge1xuICBjYXRjaD86IENhdGNoXG4gIGZpbmFsbHk/OiBGaW5hbGx5XG5cbiAgcmVuZGVyKG9wdHM6IENHT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IGNvZGUgPSBcInRyeVwiICsgc3VwZXIucmVuZGVyKG9wdHMpXG4gICAgaWYgKHRoaXMuY2F0Y2gpIGNvZGUgKz0gdGhpcy5jYXRjaC5yZW5kZXIob3B0cylcbiAgICBpZiAodGhpcy5maW5hbGx5KSBjb2RlICs9IHRoaXMuZmluYWxseS5yZW5kZXIob3B0cylcbiAgICByZXR1cm4gY29kZVxuICB9XG5cbiAgb3B0aW1pemVOb2RlcygpOiB0aGlzIHtcbiAgICBzdXBlci5vcHRpbWl6ZU5vZGVzKClcbiAgICB0aGlzLmNhdGNoPy5vcHRpbWl6ZU5vZGVzKCkgYXMgQ2F0Y2ggfCB1bmRlZmluZWRcbiAgICB0aGlzLmZpbmFsbHk/Lm9wdGltaXplTm9kZXMoKSBhcyBGaW5hbGx5IHwgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG9wdGltaXplTmFtZXMobmFtZXM6IFVzZWROYW1lcywgY29uc3RhbnRzOiBDb25zdGFudHMpOiB0aGlzIHtcbiAgICBzdXBlci5vcHRpbWl6ZU5hbWVzKG5hbWVzLCBjb25zdGFudHMpXG4gICAgdGhpcy5jYXRjaD8ub3B0aW1pemVOYW1lcyhuYW1lcywgY29uc3RhbnRzKVxuICAgIHRoaXMuZmluYWxseT8ub3B0aW1pemVOYW1lcyhuYW1lcywgY29uc3RhbnRzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgbmFtZXMoKTogVXNlZE5hbWVzIHtcbiAgICBjb25zdCBuYW1lcyA9IHN1cGVyLm5hbWVzXG4gICAgaWYgKHRoaXMuY2F0Y2gpIGFkZE5hbWVzKG5hbWVzLCB0aGlzLmNhdGNoLm5hbWVzKVxuICAgIGlmICh0aGlzLmZpbmFsbHkpIGFkZE5hbWVzKG5hbWVzLCB0aGlzLmZpbmFsbHkubmFtZXMpXG4gICAgcmV0dXJuIG5hbWVzXG4gIH1cblxuICAvLyBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgLy8gICByZXR1cm4gc3VwZXIuY291bnQgKyAodGhpcy5jYXRjaD8uY291bnQgfHwgMCkgKyAodGhpcy5maW5hbGx5Py5jb3VudCB8fCAwKVxuICAvLyB9XG59XG5cbmNsYXNzIENhdGNoIGV4dGVuZHMgQmxvY2tOb2RlIHtcbiAgc3RhdGljIHJlYWRvbmx5IGtpbmQgPSBcImNhdGNoXCJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZXJyb3I6IE5hbWUpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICByZW5kZXIob3B0czogQ0dPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNhdGNoKCR7dGhpcy5lcnJvcn0pYCArIHN1cGVyLnJlbmRlcihvcHRzKVxuICB9XG59XG5cbmNsYXNzIEZpbmFsbHkgZXh0ZW5kcyBCbG9ja05vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkga2luZCA9IFwiZmluYWxseVwiXG4gIHJlbmRlcihvcHRzOiBDR09wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImZpbmFsbHlcIiArIHN1cGVyLnJlbmRlcihvcHRzKVxuICB9XG59XG5cbnR5cGUgU3RhcnRCbG9ja05vZGUgPSBJZiB8IEZvciB8IEZ1bmMgfCBSZXR1cm4gfCBUcnlcblxudHlwZSBMZWFmTm9kZSA9IERlZiB8IEFzc2lnbiB8IExhYmVsIHwgQnJlYWsgfCBUaHJvdyB8IEFueUNvZGVcblxudHlwZSBDaGlsZE5vZGUgPSBTdGFydEJsb2NrTm9kZSB8IExlYWZOb2RlXG5cbnR5cGUgRW5kQmxvY2tOb2RlVHlwZSA9XG4gIHwgdHlwZW9mIElmXG4gIHwgdHlwZW9mIEVsc2VcbiAgfCB0eXBlb2YgRm9yXG4gIHwgdHlwZW9mIEZ1bmNcbiAgfCB0eXBlb2YgUmV0dXJuXG4gIHwgdHlwZW9mIENhdGNoXG4gIHwgdHlwZW9mIEZpbmFsbHlcblxudHlwZSBDb25zdGFudHMgPSBSZWNvcmQ8c3RyaW5nLCBTYWZlRXhwciB8IHVuZGVmaW5lZD5cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlR2VuT3B0aW9ucyB7XG4gIGVzNT86IGJvb2xlYW5cbiAgbGluZXM/OiBib29sZWFuXG4gIG93blByb3BlcnRpZXM/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBDR09wdGlvbnMgZXh0ZW5kcyBDb2RlR2VuT3B0aW9ucyB7XG4gIF9uOiBcIlxcblwiIHwgXCJcIlxufVxuXG5leHBvcnQgY2xhc3MgQ29kZUdlbiB7XG4gIHJlYWRvbmx5IF9zY29wZTogU2NvcGVcbiAgcmVhZG9ubHkgX2V4dFNjb3BlOiBWYWx1ZVNjb3BlXG4gIHJlYWRvbmx5IF92YWx1ZXM6IFNjb3BlVmFsdWVTZXRzID0ge31cbiAgcHJpdmF0ZSByZWFkb25seSBfbm9kZXM6IFBhcmVudE5vZGVbXVxuICBwcml2YXRlIHJlYWRvbmx5IF9ibG9ja1N0YXJ0czogbnVtYmVyW10gPSBbXVxuICBwcml2YXRlIHJlYWRvbmx5IF9jb25zdGFudHM6IENvbnN0YW50cyA9IHt9XG4gIHByaXZhdGUgcmVhZG9ubHkgb3B0czogQ0dPcHRpb25zXG5cbiAgY29uc3RydWN0b3IoZXh0U2NvcGU6IFZhbHVlU2NvcGUsIG9wdHM6IENvZGVHZW5PcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm9wdHMgPSB7Li4ub3B0cywgX246IG9wdHMubGluZXMgPyBcIlxcblwiIDogXCJcIn1cbiAgICB0aGlzLl9leHRTY29wZSA9IGV4dFNjb3BlXG4gICAgdGhpcy5fc2NvcGUgPSBuZXcgU2NvcGUoe3BhcmVudDogZXh0U2NvcGV9KVxuICAgIHRoaXMuX25vZGVzID0gW25ldyBSb290KCldXG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yb290LnJlbmRlcih0aGlzLm9wdHMpXG4gIH1cblxuICAvLyByZXR1cm5zIHVuaXF1ZSBuYW1lIGluIHRoZSBpbnRlcm5hbCBzY29wZVxuICBuYW1lKHByZWZpeDogc3RyaW5nKTogTmFtZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3BlLm5hbWUocHJlZml4KVxuICB9XG5cbiAgLy8gcmVzZXJ2ZXMgdW5pcXVlIG5hbWUgaW4gdGhlIGV4dGVybmFsIHNjb3BlXG4gIHNjb3BlTmFtZShwcmVmaXg6IHN0cmluZyk6IFZhbHVlU2NvcGVOYW1lIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0U2NvcGUubmFtZShwcmVmaXgpXG4gIH1cblxuICAvLyByZXNlcnZlcyB1bmlxdWUgbmFtZSBpbiB0aGUgZXh0ZXJuYWwgc2NvcGUgYW5kIGFzc2lnbnMgdmFsdWUgdG8gaXRcbiAgc2NvcGVWYWx1ZShwcmVmaXhPck5hbWU6IFZhbHVlU2NvcGVOYW1lIHwgc3RyaW5nLCB2YWx1ZTogTmFtZVZhbHVlKTogTmFtZSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2V4dFNjb3BlLnZhbHVlKHByZWZpeE9yTmFtZSwgdmFsdWUpXG4gICAgY29uc3QgdnMgPSB0aGlzLl92YWx1ZXNbbmFtZS5wcmVmaXhdIHx8ICh0aGlzLl92YWx1ZXNbbmFtZS5wcmVmaXhdID0gbmV3IFNldCgpKVxuICAgIHZzLmFkZChuYW1lKVxuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICBnZXRTY29wZVZhbHVlKHByZWZpeDogc3RyaW5nLCBrZXlPclJlZjogdW5rbm93bik6IFZhbHVlU2NvcGVOYW1lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0U2NvcGUuZ2V0VmFsdWUocHJlZml4LCBrZXlPclJlZilcbiAgfVxuXG4gIC8vIHJldHVybiBjb2RlIHRoYXQgYXNzaWducyB2YWx1ZXMgaW4gdGhlIGV4dGVybmFsIHNjb3BlIHRvIHRoZSBuYW1lcyB0aGF0IGFyZSB1c2VkIGludGVybmFsbHlcbiAgLy8gKHNhbWUgbmFtZXMgdGhhdCB3ZXJlIHJldHVybmVkIGJ5IGdlbi5zY29wZU5hbWUgb3IgZ2VuLnNjb3BlVmFsdWUpXG4gIHNjb3BlUmVmcyhzY29wZU5hbWU6IE5hbWUpOiBDb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0U2NvcGUuc2NvcGVSZWZzKHNjb3BlTmFtZSwgdGhpcy5fdmFsdWVzKVxuICB9XG5cbiAgc2NvcGVDb2RlKCk6IENvZGUge1xuICAgIHJldHVybiB0aGlzLl9leHRTY29wZS5zY29wZUNvZGUodGhpcy5fdmFsdWVzKVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVmKFxuICAgIHZhcktpbmQ6IE5hbWUsXG4gICAgbmFtZU9yUHJlZml4OiBOYW1lIHwgc3RyaW5nLFxuICAgIHJocz86IFNhZmVFeHByLFxuICAgIGNvbnN0YW50PzogYm9vbGVhblxuICApOiBOYW1lIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fc2NvcGUudG9OYW1lKG5hbWVPclByZWZpeClcbiAgICBpZiAocmhzICE9PSB1bmRlZmluZWQgJiYgY29uc3RhbnQpIHRoaXMuX2NvbnN0YW50c1tuYW1lLnN0cl0gPSByaHNcbiAgICB0aGlzLl9sZWFmTm9kZShuZXcgRGVmKHZhcktpbmQsIG5hbWUsIHJocykpXG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIC8vIGBjb25zdGAgZGVjbGFyYXRpb24gKGB2YXJgIGluIGVzNSBtb2RlKVxuICBjb25zdChuYW1lT3JQcmVmaXg6IE5hbWUgfCBzdHJpbmcsIHJoczogU2FmZUV4cHIsIF9jb25zdGFudD86IGJvb2xlYW4pOiBOYW1lIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmKHZhcktpbmRzLmNvbnN0LCBuYW1lT3JQcmVmaXgsIHJocywgX2NvbnN0YW50KVxuICB9XG5cbiAgLy8gYGxldGAgZGVjbGFyYXRpb24gd2l0aCBvcHRpb25hbCBhc3NpZ25tZW50IChgdmFyYCBpbiBlczUgbW9kZSlcbiAgbGV0KG5hbWVPclByZWZpeDogTmFtZSB8IHN0cmluZywgcmhzPzogU2FmZUV4cHIsIF9jb25zdGFudD86IGJvb2xlYW4pOiBOYW1lIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmKHZhcktpbmRzLmxldCwgbmFtZU9yUHJlZml4LCByaHMsIF9jb25zdGFudClcbiAgfVxuXG4gIC8vIGB2YXJgIGRlY2xhcmF0aW9uIHdpdGggb3B0aW9uYWwgYXNzaWdubWVudFxuICB2YXIobmFtZU9yUHJlZml4OiBOYW1lIHwgc3RyaW5nLCByaHM/OiBTYWZlRXhwciwgX2NvbnN0YW50PzogYm9vbGVhbik6IE5hbWUge1xuICAgIHJldHVybiB0aGlzLl9kZWYodmFyS2luZHMudmFyLCBuYW1lT3JQcmVmaXgsIHJocywgX2NvbnN0YW50KVxuICB9XG5cbiAgLy8gYXNzaWdubWVudCBjb2RlXG4gIGFzc2lnbihsaHM6IENvZGUsIHJoczogU2FmZUV4cHIsIHNpZGVFZmZlY3RzPzogYm9vbGVhbik6IENvZGVHZW4ge1xuICAgIHJldHVybiB0aGlzLl9sZWFmTm9kZShuZXcgQXNzaWduKGxocywgcmhzLCBzaWRlRWZmZWN0cykpXG4gIH1cblxuICAvLyBgKz1gIGNvZGVcbiAgYWRkKGxoczogQ29kZSwgcmhzOiBTYWZlRXhwcik6IENvZGVHZW4ge1xuICAgIHJldHVybiB0aGlzLl9sZWFmTm9kZShuZXcgQXNzaWduT3AobGhzLCBvcGVyYXRvcnMuQURELCByaHMpKVxuICB9XG5cbiAgLy8gYXBwZW5kcyBwYXNzZWQgU2FmZUV4cHIgdG8gY29kZSBvciBleGVjdXRlcyBCbG9ja1xuICBjb2RlKGM6IEJsb2NrIHwgU2FmZUV4cHIpOiBDb2RlR2VuIHtcbiAgICBpZiAodHlwZW9mIGMgPT0gXCJmdW5jdGlvblwiKSBjKClcbiAgICBlbHNlIGlmIChjICE9PSBuaWwpIHRoaXMuX2xlYWZOb2RlKG5ldyBBbnlDb2RlKGMpKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyByZXR1cm5zIGNvZGUgZm9yIG9iamVjdCBsaXRlcmFsIGZvciB0aGUgcGFzc2VkIGFyZ3VtZW50IGxpc3Qgb2Yga2V5LXZhbHVlIHBhaXJzXG4gIG9iamVjdCguLi5rZXlWYWx1ZXM6IFtOYW1lIHwgc3RyaW5nLCBTYWZlRXhwciB8IHN0cmluZ11bXSk6IF9Db2RlIHtcbiAgICBjb25zdCBjb2RlOiBDb2RlSXRlbVtdID0gW1wie1wiXVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGtleVZhbHVlcykge1xuICAgICAgaWYgKGNvZGUubGVuZ3RoID4gMSkgY29kZS5wdXNoKFwiLFwiKVxuICAgICAgY29kZS5wdXNoKGtleSlcbiAgICAgIGlmIChrZXkgIT09IHZhbHVlIHx8IHRoaXMub3B0cy5lczUpIHtcbiAgICAgICAgY29kZS5wdXNoKFwiOlwiKVxuICAgICAgICBhZGRDb2RlQXJnKGNvZGUsIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gICAgcmV0dXJuIG5ldyBfQ29kZShjb2RlKVxuICB9XG5cbiAgLy8gYGlmYCBjbGF1c2UgKG9yIHN0YXRlbWVudCBpZiBgdGhlbkJvZHlgIGFuZCwgb3B0aW9uYWxseSwgYGVsc2VCb2R5YCBhcmUgcGFzc2VkKVxuICBpZihjb25kaXRpb246IENvZGUgfCBib29sZWFuLCB0aGVuQm9keT86IEJsb2NrLCBlbHNlQm9keT86IEJsb2NrKTogQ29kZUdlbiB7XG4gICAgdGhpcy5fYmxvY2tOb2RlKG5ldyBJZihjb25kaXRpb24pKVxuXG4gICAgaWYgKHRoZW5Cb2R5ICYmIGVsc2VCb2R5KSB7XG4gICAgICB0aGlzLmNvZGUodGhlbkJvZHkpLmVsc2UoKS5jb2RlKGVsc2VCb2R5KS5lbmRJZigpXG4gICAgfSBlbHNlIGlmICh0aGVuQm9keSkge1xuICAgICAgdGhpcy5jb2RlKHRoZW5Cb2R5KS5lbmRJZigpXG4gICAgfSBlbHNlIGlmIChlbHNlQm9keSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2RlR2VuOiBcImVsc2VcIiBib2R5IHdpdGhvdXQgXCJ0aGVuXCIgYm9keScpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBgZWxzZSBpZmAgY2xhdXNlIC0gaW52YWxpZCB3aXRob3V0IGBpZmAgb3IgYWZ0ZXIgYGVsc2VgIGNsYXVzZXNcbiAgZWxzZUlmKGNvbmRpdGlvbjogQ29kZSB8IGJvb2xlYW4pOiBDb2RlR2VuIHtcbiAgICByZXR1cm4gdGhpcy5fZWxzZU5vZGUobmV3IElmKGNvbmRpdGlvbikpXG4gIH1cblxuICAvLyBgZWxzZWAgY2xhdXNlIC0gb25seSB2YWxpZCBhZnRlciBgaWZgIG9yIGBlbHNlIGlmYCBjbGF1c2VzXG4gIGVsc2UoKTogQ29kZUdlbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vsc2VOb2RlKG5ldyBFbHNlKCkpXG4gIH1cblxuICAvLyBlbmQgYGlmYCBzdGF0ZW1lbnQgKG5lZWRlZCBpZiBnZW4uaWYgd2FzIHVzZWQgb25seSB3aXRoIGNvbmRpdGlvbilcbiAgZW5kSWYoKTogQ29kZUdlbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZEJsb2NrTm9kZShJZiwgRWxzZSlcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcihub2RlOiBGb3IsIGZvckJvZHk/OiBCbG9jayk6IENvZGVHZW4ge1xuICAgIHRoaXMuX2Jsb2NrTm9kZShub2RlKVxuICAgIGlmIChmb3JCb2R5KSB0aGlzLmNvZGUoZm9yQm9keSkuZW5kRm9yKClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gYSBnZW5lcmljIGBmb3JgIGNsYXVzZSAob3Igc3RhdGVtZW50IGlmIGBmb3JCb2R5YCBpcyBwYXNzZWQpXG4gIGZvcihpdGVyYXRpb246IENvZGUsIGZvckJvZHk/OiBCbG9jayk6IENvZGVHZW4ge1xuICAgIHJldHVybiB0aGlzLl9mb3IobmV3IEZvckxvb3AoaXRlcmF0aW9uKSwgZm9yQm9keSlcbiAgfVxuXG4gIC8vIGBmb3JgIHN0YXRlbWVudCBmb3IgYSByYW5nZSBvZiB2YWx1ZXNcbiAgZm9yUmFuZ2UoXG4gICAgbmFtZU9yUHJlZml4OiBOYW1lIHwgc3RyaW5nLFxuICAgIGZyb206IFNhZmVFeHByLFxuICAgIHRvOiBTYWZlRXhwcixcbiAgICBmb3JCb2R5OiAoaW5kZXg6IE5hbWUpID0+IHZvaWQsXG4gICAgdmFyS2luZDogQ29kZSA9IHRoaXMub3B0cy5lczUgPyB2YXJLaW5kcy52YXIgOiB2YXJLaW5kcy5sZXRcbiAgKTogQ29kZUdlbiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX3Njb3BlLnRvTmFtZShuYW1lT3JQcmVmaXgpXG4gICAgcmV0dXJuIHRoaXMuX2ZvcihuZXcgRm9yUmFuZ2UodmFyS2luZCwgbmFtZSwgZnJvbSwgdG8pLCAoKSA9PiBmb3JCb2R5KG5hbWUpKVxuICB9XG5cbiAgLy8gYGZvci1vZmAgc3RhdGVtZW50IChpbiBlczUgbW9kZSByZXBsYWNlIHdpdGggYSBub3JtYWwgZm9yIGxvb3ApXG4gIGZvck9mKFxuICAgIG5hbWVPclByZWZpeDogTmFtZSB8IHN0cmluZyxcbiAgICBpdGVyYWJsZTogQ29kZSxcbiAgICBmb3JCb2R5OiAoaXRlbTogTmFtZSkgPT4gdm9pZCxcbiAgICB2YXJLaW5kOiBDb2RlID0gdmFyS2luZHMuY29uc3RcbiAgKTogQ29kZUdlbiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX3Njb3BlLnRvTmFtZShuYW1lT3JQcmVmaXgpXG4gICAgaWYgKHRoaXMub3B0cy5lczUpIHtcbiAgICAgIGNvbnN0IGFyciA9IGl0ZXJhYmxlIGluc3RhbmNlb2YgTmFtZSA/IGl0ZXJhYmxlIDogdGhpcy52YXIoXCJfYXJyXCIsIGl0ZXJhYmxlKVxuICAgICAgcmV0dXJuIHRoaXMuZm9yUmFuZ2UoXCJfaVwiLCAwLCBfYCR7YXJyfS5sZW5ndGhgLCAoaSkgPT4ge1xuICAgICAgICB0aGlzLnZhcihuYW1lLCBfYCR7YXJyfVske2l9XWApXG4gICAgICAgIGZvckJvZHkobmFtZSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mb3IobmV3IEZvckl0ZXIoXCJvZlwiLCB2YXJLaW5kLCBuYW1lLCBpdGVyYWJsZSksICgpID0+IGZvckJvZHkobmFtZSkpXG4gIH1cblxuICAvLyBgZm9yLWluYCBzdGF0ZW1lbnQuXG4gIC8vIFdpdGggb3B0aW9uIGBvd25Qcm9wZXJ0aWVzYCByZXBsYWNlZCB3aXRoIGEgYGZvci1vZmAgbG9vcCBmb3Igb2JqZWN0IGtleXNcbiAgZm9ySW4oXG4gICAgbmFtZU9yUHJlZml4OiBOYW1lIHwgc3RyaW5nLFxuICAgIG9iajogQ29kZSxcbiAgICBmb3JCb2R5OiAoaXRlbTogTmFtZSkgPT4gdm9pZCxcbiAgICB2YXJLaW5kOiBDb2RlID0gdGhpcy5vcHRzLmVzNSA/IHZhcktpbmRzLnZhciA6IHZhcktpbmRzLmNvbnN0XG4gICk6IENvZGVHZW4ge1xuICAgIGlmICh0aGlzLm9wdHMub3duUHJvcGVydGllcykge1xuICAgICAgcmV0dXJuIHRoaXMuZm9yT2YobmFtZU9yUHJlZml4LCBfYE9iamVjdC5rZXlzKCR7b2JqfSlgLCBmb3JCb2R5KVxuICAgIH1cbiAgICBjb25zdCBuYW1lID0gdGhpcy5fc2NvcGUudG9OYW1lKG5hbWVPclByZWZpeClcbiAgICByZXR1cm4gdGhpcy5fZm9yKG5ldyBGb3JJdGVyKFwiaW5cIiwgdmFyS2luZCwgbmFtZSwgb2JqKSwgKCkgPT4gZm9yQm9keShuYW1lKSlcbiAgfVxuXG4gIC8vIGVuZCBgZm9yYCBsb29wXG4gIGVuZEZvcigpOiBDb2RlR2VuIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kQmxvY2tOb2RlKEZvcilcbiAgfVxuXG4gIC8vIGBsYWJlbGAgc3RhdGVtZW50XG4gIGxhYmVsKGxhYmVsOiBOYW1lKTogQ29kZUdlbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xlYWZOb2RlKG5ldyBMYWJlbChsYWJlbCkpXG4gIH1cblxuICAvLyBgYnJlYWtgIHN0YXRlbWVudFxuICBicmVhayhsYWJlbD86IENvZGUpOiBDb2RlR2VuIHtcbiAgICByZXR1cm4gdGhpcy5fbGVhZk5vZGUobmV3IEJyZWFrKGxhYmVsKSlcbiAgfVxuXG4gIC8vIGByZXR1cm5gIHN0YXRlbWVudFxuICByZXR1cm4odmFsdWU6IEJsb2NrIHwgU2FmZUV4cHIpOiBDb2RlR2VuIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFJldHVybigpXG4gICAgdGhpcy5fYmxvY2tOb2RlKG5vZGUpXG4gICAgdGhpcy5jb2RlKHZhbHVlKVxuICAgIGlmIChub2RlLm5vZGVzLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdDb2RlR2VuOiBcInJldHVyblwiIHNob3VsZCBoYXZlIG9uZSBub2RlJylcbiAgICByZXR1cm4gdGhpcy5fZW5kQmxvY2tOb2RlKFJldHVybilcbiAgfVxuXG4gIC8vIGB0cnlgIHN0YXRlbWVudFxuICB0cnkodHJ5Qm9keTogQmxvY2ssIGNhdGNoQ29kZT86IChlOiBOYW1lKSA9PiB2b2lkLCBmaW5hbGx5Q29kZT86IEJsb2NrKTogQ29kZUdlbiB7XG4gICAgaWYgKCFjYXRjaENvZGUgJiYgIWZpbmFsbHlDb2RlKSB0aHJvdyBuZXcgRXJyb3IoJ0NvZGVHZW46IFwidHJ5XCIgd2l0aG91dCBcImNhdGNoXCIgYW5kIFwiZmluYWxseVwiJylcbiAgICBjb25zdCBub2RlID0gbmV3IFRyeSgpXG4gICAgdGhpcy5fYmxvY2tOb2RlKG5vZGUpXG4gICAgdGhpcy5jb2RlKHRyeUJvZHkpXG4gICAgaWYgKGNhdGNoQ29kZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLm5hbWUoXCJlXCIpXG4gICAgICB0aGlzLl9jdXJyTm9kZSA9IG5vZGUuY2F0Y2ggPSBuZXcgQ2F0Y2goZXJyb3IpXG4gICAgICBjYXRjaENvZGUoZXJyb3IpXG4gICAgfVxuICAgIGlmIChmaW5hbGx5Q29kZSkge1xuICAgICAgdGhpcy5fY3Vyck5vZGUgPSBub2RlLmZpbmFsbHkgPSBuZXcgRmluYWxseSgpXG4gICAgICB0aGlzLmNvZGUoZmluYWxseUNvZGUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9lbmRCbG9ja05vZGUoQ2F0Y2gsIEZpbmFsbHkpXG4gIH1cblxuICAvLyBgdGhyb3dgIHN0YXRlbWVudFxuICB0aHJvdyhlcnJvcjogQ29kZSk6IENvZGVHZW4ge1xuICAgIHJldHVybiB0aGlzLl9sZWFmTm9kZShuZXcgVGhyb3coZXJyb3IpKVxuICB9XG5cbiAgLy8gc3RhcnQgc2VsZi1iYWxhbmNpbmcgYmxvY2tcbiAgYmxvY2soYm9keT86IEJsb2NrLCBub2RlQ291bnQ/OiBudW1iZXIpOiBDb2RlR2VuIHtcbiAgICB0aGlzLl9ibG9ja1N0YXJ0cy5wdXNoKHRoaXMuX25vZGVzLmxlbmd0aClcbiAgICBpZiAoYm9keSkgdGhpcy5jb2RlKGJvZHkpLmVuZEJsb2NrKG5vZGVDb3VudClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gZW5kIHRoZSBjdXJyZW50IHNlbGYtYmFsYW5jaW5nIGJsb2NrXG4gIGVuZEJsb2NrKG5vZGVDb3VudD86IG51bWJlcik6IENvZGVHZW4ge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMuX2Jsb2NrU3RhcnRzLnBvcCgpXG4gICAgaWYgKGxlbiA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJDb2RlR2VuOiBub3QgaW4gc2VsZi1iYWxhbmNpbmcgYmxvY2tcIilcbiAgICBjb25zdCB0b0Nsb3NlID0gdGhpcy5fbm9kZXMubGVuZ3RoIC0gbGVuXG4gICAgaWYgKHRvQ2xvc2UgPCAwIHx8IChub2RlQ291bnQgIT09IHVuZGVmaW5lZCAmJiB0b0Nsb3NlICE9PSBub2RlQ291bnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvZGVHZW46IHdyb25nIG51bWJlciBvZiBub2RlczogJHt0b0Nsb3NlfSB2cyAke25vZGVDb3VudH0gZXhwZWN0ZWRgKVxuICAgIH1cbiAgICB0aGlzLl9ub2Rlcy5sZW5ndGggPSBsZW5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gYGZ1bmN0aW9uYCBoZWFkaW5nIChvciBkZWZpbml0aW9uIGlmIGZ1bmNCb2R5IGlzIHBhc3NlZClcbiAgZnVuYyhuYW1lOiBOYW1lLCBhcmdzOiBDb2RlID0gbmlsLCBhc3luYz86IGJvb2xlYW4sIGZ1bmNCb2R5PzogQmxvY2spOiBDb2RlR2VuIHtcbiAgICB0aGlzLl9ibG9ja05vZGUobmV3IEZ1bmMobmFtZSwgYXJncywgYXN5bmMpKVxuICAgIGlmIChmdW5jQm9keSkgdGhpcy5jb2RlKGZ1bmNCb2R5KS5lbmRGdW5jKClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gZW5kIGZ1bmN0aW9uIGRlZmluaXRpb25cbiAgZW5kRnVuYygpOiBDb2RlR2VuIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kQmxvY2tOb2RlKEZ1bmMpXG4gIH1cblxuICBvcHRpbWl6ZShuID0gMSk6IHZvaWQge1xuICAgIHdoaWxlIChuLS0gPiAwKSB7XG4gICAgICB0aGlzLl9yb290Lm9wdGltaXplTm9kZXMoKVxuICAgICAgdGhpcy5fcm9vdC5vcHRpbWl6ZU5hbWVzKHRoaXMuX3Jvb3QubmFtZXMsIHRoaXMuX2NvbnN0YW50cylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sZWFmTm9kZShub2RlOiBMZWFmTm9kZSk6IENvZGVHZW4ge1xuICAgIHRoaXMuX2N1cnJOb2RlLm5vZGVzLnB1c2gobm9kZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcHJpdmF0ZSBfYmxvY2tOb2RlKG5vZGU6IFN0YXJ0QmxvY2tOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5fY3Vyck5vZGUubm9kZXMucHVzaChub2RlKVxuICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSlcbiAgfVxuXG4gIHByaXZhdGUgX2VuZEJsb2NrTm9kZShOMTogRW5kQmxvY2tOb2RlVHlwZSwgTjI/OiBFbmRCbG9ja05vZGVUeXBlKTogQ29kZUdlbiB7XG4gICAgY29uc3QgbiA9IHRoaXMuX2N1cnJOb2RlXG4gICAgaWYgKG4gaW5zdGFuY2VvZiBOMSB8fCAoTjIgJiYgbiBpbnN0YW5jZW9mIE4yKSkge1xuICAgICAgdGhpcy5fbm9kZXMucG9wKClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ29kZUdlbjogbm90IGluIGJsb2NrIFwiJHtOMiA/IGAke04xLmtpbmR9LyR7TjIua2luZH1gIDogTjEua2luZH1cImApXG4gIH1cblxuICBwcml2YXRlIF9lbHNlTm9kZShub2RlOiBJZiB8IEVsc2UpOiBDb2RlR2VuIHtcbiAgICBjb25zdCBuID0gdGhpcy5fY3Vyck5vZGVcbiAgICBpZiAoIShuIGluc3RhbmNlb2YgSWYpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvZGVHZW46IFwiZWxzZVwiIHdpdGhvdXQgXCJpZlwiJylcbiAgICB9XG4gICAgdGhpcy5fY3Vyck5vZGUgPSBuLmVsc2UgPSBub2RlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yb290KCk6IFJvb3Qge1xuICAgIHJldHVybiB0aGlzLl9ub2Rlc1swXSBhcyBSb290XG4gIH1cblxuICBwcml2YXRlIGdldCBfY3Vyck5vZGUoKTogUGFyZW50Tm9kZSB7XG4gICAgY29uc3QgbnMgPSB0aGlzLl9ub2Rlc1xuICAgIHJldHVybiBuc1tucy5sZW5ndGggLSAxXVxuICB9XG5cbiAgcHJpdmF0ZSBzZXQgX2N1cnJOb2RlKG5vZGU6IFBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBucyA9IHRoaXMuX25vZGVzXG4gICAgbnNbbnMubGVuZ3RoIC0gMV0gPSBub2RlXG4gIH1cblxuICAvLyBnZXQgbm9kZUNvdW50KCk6IG51bWJlciB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3Jvb3QuY291bnRcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBhZGROYW1lcyhuYW1lczogVXNlZE5hbWVzLCBmcm9tOiBVc2VkTmFtZXMpOiBVc2VkTmFtZXMge1xuICBmb3IgKGNvbnN0IG4gaW4gZnJvbSkgbmFtZXNbbl0gPSAobmFtZXNbbl0gfHwgMCkgKyAoZnJvbVtuXSB8fCAwKVxuICByZXR1cm4gbmFtZXNcbn1cblxuZnVuY3Rpb24gYWRkRXhwck5hbWVzKG5hbWVzOiBVc2VkTmFtZXMsIGZyb206IFNhZmVFeHByKTogVXNlZE5hbWVzIHtcbiAgcmV0dXJuIGZyb20gaW5zdGFuY2VvZiBfQ29kZU9yTmFtZSA/IGFkZE5hbWVzKG5hbWVzLCBmcm9tLm5hbWVzKSA6IG5hbWVzXG59XG5cbmZ1bmN0aW9uIG9wdGltaXplRXhwcjxUIGV4dGVuZHMgU2FmZUV4cHIgfCBDb2RlPihleHByOiBULCBuYW1lczogVXNlZE5hbWVzLCBjb25zdGFudHM6IENvbnN0YW50cyk6IFRcbmZ1bmN0aW9uIG9wdGltaXplRXhwcihleHByOiBTYWZlRXhwciwgbmFtZXM6IFVzZWROYW1lcywgY29uc3RhbnRzOiBDb25zdGFudHMpOiBTYWZlRXhwciB7XG4gIGlmIChleHByIGluc3RhbmNlb2YgTmFtZSkgcmV0dXJuIHJlcGxhY2VOYW1lKGV4cHIpXG4gIGlmICghY2FuT3B0aW1pemUoZXhwcikpIHJldHVybiBleHByXG4gIHJldHVybiBuZXcgX0NvZGUoXG4gICAgZXhwci5faXRlbXMucmVkdWNlKChpdGVtczogQ29kZUl0ZW1bXSwgYzogU2FmZUV4cHIgfCBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChjIGluc3RhbmNlb2YgTmFtZSkgYyA9IHJlcGxhY2VOYW1lKGMpXG4gICAgICBpZiAoYyBpbnN0YW5jZW9mIF9Db2RlKSBpdGVtcy5wdXNoKC4uLmMuX2l0ZW1zKVxuICAgICAgZWxzZSBpdGVtcy5wdXNoKGMpXG4gICAgICByZXR1cm4gaXRlbXNcbiAgICB9LCBbXSlcbiAgKVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VOYW1lKG46IE5hbWUpOiBTYWZlRXhwciB7XG4gICAgY29uc3QgYyA9IGNvbnN0YW50c1tuLnN0cl1cbiAgICBpZiAoYyA9PT0gdW5kZWZpbmVkIHx8IG5hbWVzW24uc3RyXSAhPT0gMSkgcmV0dXJuIG5cbiAgICBkZWxldGUgbmFtZXNbbi5zdHJdXG4gICAgcmV0dXJuIGNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbk9wdGltaXplKGU6IFNhZmVFeHByKTogZSBpcyBfQ29kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBfQ29kZSAmJlxuICAgICAgZS5faXRlbXMuc29tZShcbiAgICAgICAgKGMpID0+IGMgaW5zdGFuY2VvZiBOYW1lICYmIG5hbWVzW2Muc3RyXSA9PT0gMSAmJiBjb25zdGFudHNbYy5zdHJdICE9PSB1bmRlZmluZWRcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gc3VidHJhY3ROYW1lcyhuYW1lczogVXNlZE5hbWVzLCBmcm9tOiBVc2VkTmFtZXMpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBuIGluIGZyb20pIG5hbWVzW25dID0gKG5hbWVzW25dIHx8IDApIC0gKGZyb21bbl0gfHwgMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdDxUIGV4dGVuZHMgQ29kZSB8IFNhZmVFeHByPih4OiBUKTogVFxuZXhwb3J0IGZ1bmN0aW9uIG5vdCh4OiBDb2RlIHwgU2FmZUV4cHIpOiBDb2RlIHwgU2FmZUV4cHIge1xuICByZXR1cm4gdHlwZW9mIHggPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHggPT0gXCJudW1iZXJcIiB8fCB4ID09PSBudWxsID8gIXggOiBfYCEke3Bhcih4KX1gXG59XG5cbmNvbnN0IGFuZENvZGUgPSBtYXBwZW5kKG9wZXJhdG9ycy5BTkQpXG5cbi8vIGJvb2xlYW4gQU5EICgmJikgZXhwcmVzc2lvbiB3aXRoIHRoZSBwYXNzZWQgYXJndW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gYW5kKC4uLmFyZ3M6IENvZGVbXSk6IENvZGUge1xuICByZXR1cm4gYXJncy5yZWR1Y2UoYW5kQ29kZSlcbn1cblxuY29uc3Qgb3JDb2RlID0gbWFwcGVuZChvcGVyYXRvcnMuT1IpXG5cbi8vIGJvb2xlYW4gT1IgKHx8KSBleHByZXNzaW9uIHdpdGggdGhlIHBhc3NlZCBhcmd1bWVudHNcbmV4cG9ydCBmdW5jdGlvbiBvciguLi5hcmdzOiBDb2RlW10pOiBDb2RlIHtcbiAgcmV0dXJuIGFyZ3MucmVkdWNlKG9yQ29kZSlcbn1cblxudHlwZSBNQXBwZW5kID0gKHg6IENvZGUsIHk6IENvZGUpID0+IENvZGVcblxuZnVuY3Rpb24gbWFwcGVuZChvcDogQ29kZSk6IE1BcHBlbmQge1xuICByZXR1cm4gKHgsIHkpID0+ICh4ID09PSBuaWwgPyB5IDogeSA9PT0gbmlsID8geCA6IF9gJHtwYXIoeCl9ICR7b3B9ICR7cGFyKHkpfWApXG59XG5cbmZ1bmN0aW9uIHBhcih4OiBDb2RlKTogQ29kZSB7XG4gIHJldHVybiB4IGluc3RhbmNlb2YgTmFtZSA/IHggOiBfYCgke3h9KWBcbn1cbiIsICJpbXBvcnQgdHlwZSBBanYgZnJvbSBcImFqdlwiXG5pbXBvcnQgdHlwZSB7XG4gIFBsdWdpbixcbiAgQ29kZUtleXdvcmREZWZpbml0aW9uLFxuICBLZXl3b3JkRXJyb3JEZWZpbml0aW9uLFxuICBDb2RlLFxuICBOYW1lLFxuICBFcnJvck9iamVjdCxcbn0gZnJvbSBcImFqdlwiXG5pbXBvcnQgdHlwZSB7QWRkZWRGb3JtYXR9IGZyb20gXCJhanYvZGlzdC90eXBlc1wiXG5pbXBvcnQgdHlwZSB7UnVsZX0gZnJvbSBcImFqdi9kaXN0L2NvbXBpbGUvcnVsZXNcIlxuaW1wb3J0IHtLZXl3b3JkQ3h0fSBmcm9tIFwiYWp2XCJcbmltcG9ydCB7Xywgc3RyLCBvciwgZ2V0UHJvcGVydHksIG9wZXJhdG9yc30gZnJvbSBcImFqdi9kaXN0L2NvbXBpbGUvY29kZWdlblwiXG5cbnR5cGUgS3dkID0gXCJmb3JtYXRNYXhpbXVtXCIgfCBcImZvcm1hdE1pbmltdW1cIiB8IFwiZm9ybWF0RXhjbHVzaXZlTWF4aW11bVwiIHwgXCJmb3JtYXRFeGNsdXNpdmVNaW5pbXVtXCJcblxudHlwZSBDb21wYXJpc29uID0gXCI8PVwiIHwgXCI+PVwiIHwgXCI8XCIgfCBcIj5cIlxuXG5jb25zdCBvcHMgPSBvcGVyYXRvcnNcblxuY29uc3QgS1dEczoge1tLIGluIEt3ZF06IHtva1N0cjogQ29tcGFyaXNvbjsgb2s6IENvZGU7IGZhaWw6IENvZGV9fSA9IHtcbiAgZm9ybWF0TWF4aW11bToge29rU3RyOiBcIjw9XCIsIG9rOiBvcHMuTFRFLCBmYWlsOiBvcHMuR1R9LFxuICBmb3JtYXRNaW5pbXVtOiB7b2tTdHI6IFwiPj1cIiwgb2s6IG9wcy5HVEUsIGZhaWw6IG9wcy5MVH0sXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IHtva1N0cjogXCI8XCIsIG9rOiBvcHMuTFQsIGZhaWw6IG9wcy5HVEV9LFxuICBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtOiB7b2tTdHI6IFwiPlwiLCBvazogb3BzLkdULCBmYWlsOiBvcHMuTFRFfSxcbn1cblxuZXhwb3J0IHR5cGUgTGltaXRGb3JtYXRFcnJvciA9IEVycm9yT2JqZWN0PEt3ZCwge2xpbWl0OiBzdHJpbmc7IGNvbXBhcmlzb246IENvbXBhcmlzb259PlxuXG5jb25zdCBlcnJvcjogS2V5d29yZEVycm9yRGVmaW5pdGlvbiA9IHtcbiAgbWVzc2FnZTogKHtrZXl3b3JkLCBzY2hlbWFDb2RlfSkgPT4gc3RyYHNob3VsZCBiZSAke0tXRHNba2V5d29yZCBhcyBLd2RdLm9rU3RyfSAke3NjaGVtYUNvZGV9YCxcbiAgcGFyYW1zOiAoe2tleXdvcmQsIHNjaGVtYUNvZGV9KSA9PlxuICAgIF9ge2NvbXBhcmlzb246ICR7S1dEc1trZXl3b3JkIGFzIEt3ZF0ub2tTdHJ9LCBsaW1pdDogJHtzY2hlbWFDb2RlfX1gLFxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TGltaXREZWZpbml0aW9uOiBDb2RlS2V5d29yZERlZmluaXRpb24gPSB7XG4gIGtleXdvcmQ6IE9iamVjdC5rZXlzKEtXRHMpLFxuICB0eXBlOiBcInN0cmluZ1wiLFxuICBzY2hlbWFUeXBlOiBcInN0cmluZ1wiLFxuICAkZGF0YTogdHJ1ZSxcbiAgZXJyb3IsXG4gIGNvZGUoY3h0KSB7XG4gICAgY29uc3Qge2dlbiwgZGF0YSwgc2NoZW1hQ29kZSwga2V5d29yZCwgaXR9ID0gY3h0XG4gICAgY29uc3Qge29wdHMsIHNlbGZ9ID0gaXRcbiAgICBpZiAoIW9wdHMudmFsaWRhdGVGb3JtYXRzKSByZXR1cm5cblxuICAgIGNvbnN0IGZDeHQgPSBuZXcgS2V5d29yZEN4dChpdCwgKHNlbGYuUlVMRVMuYWxsLmZvcm1hdCBhcyBSdWxlKS5kZWZpbml0aW9uLCBcImZvcm1hdFwiKVxuICAgIGlmIChmQ3h0LiRkYXRhKSB2YWxpZGF0ZSREYXRhRm9ybWF0KClcbiAgICBlbHNlIHZhbGlkYXRlRm9ybWF0KClcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlJERhdGFGb3JtYXQoKTogdm9pZCB7XG4gICAgICBjb25zdCBmbXRzID0gZ2VuLnNjb3BlVmFsdWUoXCJmb3JtYXRzXCIsIHtcbiAgICAgICAgcmVmOiBzZWxmLmZvcm1hdHMsXG4gICAgICAgIGNvZGU6IG9wdHMuY29kZS5mb3JtYXRzLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IGZtdCA9IGdlbi5jb25zdChcImZtdFwiLCBfYCR7Zm10c31bJHtmQ3h0LnNjaGVtYUNvZGV9XWApXG4gICAgICBjeHQuZmFpbCRkYXRhKFxuICAgICAgICBvcihcbiAgICAgICAgICBfYHR5cGVvZiAke2ZtdH0gIT0gXCJvYmplY3RcImAsXG4gICAgICAgICAgX2Ake2ZtdH0gaW5zdGFuY2VvZiBSZWdFeHBgLFxuICAgICAgICAgIF9gdHlwZW9mICR7Zm10fS5jb21wYXJlICE9IFwiZnVuY3Rpb25cImAsXG4gICAgICAgICAgY29tcGFyZUNvZGUoZm10KVxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoKTogdm9pZCB7XG4gICAgICBjb25zdCBmb3JtYXQgPSBmQ3h0LnNjaGVtYSBhcyBzdHJpbmdcbiAgICAgIGNvbnN0IGZtdERlZjogQWRkZWRGb3JtYXQgfCB1bmRlZmluZWQgPSBzZWxmLmZvcm1hdHNbZm9ybWF0XVxuICAgICAgaWYgKCFmbXREZWYgfHwgZm10RGVmID09PSB0cnVlKSByZXR1cm5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGZtdERlZiAhPSBcIm9iamVjdFwiIHx8XG4gICAgICAgIGZtdERlZiBpbnN0YW5jZW9mIFJlZ0V4cCB8fFxuICAgICAgICB0eXBlb2YgZm10RGVmLmNvbXBhcmUgIT0gXCJmdW5jdGlvblwiXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7a2V5d29yZH1cIjogZm9ybWF0IFwiJHtmb3JtYXR9XCIgZG9lcyBub3QgZGVmaW5lIFwiY29tcGFyZVwiIGZ1bmN0aW9uYClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZtdCA9IGdlbi5zY29wZVZhbHVlKFwiZm9ybWF0c1wiLCB7XG4gICAgICAgIGtleTogZm9ybWF0LFxuICAgICAgICByZWY6IGZtdERlZixcbiAgICAgICAgY29kZTogb3B0cy5jb2RlLmZvcm1hdHMgPyBfYCR7b3B0cy5jb2RlLmZvcm1hdHN9JHtnZXRQcm9wZXJ0eShmb3JtYXQpfWAgOiB1bmRlZmluZWQsXG4gICAgICB9KVxuXG4gICAgICBjeHQuZmFpbCRkYXRhKGNvbXBhcmVDb2RlKGZtdCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGFyZUNvZGUoZm10OiBOYW1lKTogQ29kZSB7XG4gICAgICByZXR1cm4gX2Ake2ZtdH0uY29tcGFyZSgke2RhdGF9LCAke3NjaGVtYUNvZGV9KSAke0tXRHNba2V5d29yZCBhcyBLd2RdLmZhaWx9IDBgXG4gICAgfVxuICB9LFxuICBkZXBlbmRlbmNpZXM6IFtcImZvcm1hdFwiXSxcbn1cblxuY29uc3QgZm9ybWF0TGltaXRQbHVnaW46IFBsdWdpbjx1bmRlZmluZWQ+ID0gKGFqdjogQWp2KTogQWp2ID0+IHtcbiAgYWp2LmFkZEtleXdvcmQoZm9ybWF0TGltaXREZWZpbml0aW9uKVxuICByZXR1cm4gYWp2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExpbWl0UGx1Z2luXG4iLCAiaW1wb3J0IHtcbiAgRGVmaW5lZEZvcm1hdHMsXG4gIEZvcm1hdE1vZGUsXG4gIEZvcm1hdE5hbWUsXG4gIGZvcm1hdE5hbWVzLFxuICBmYXN0Rm9ybWF0cyxcbiAgZnVsbEZvcm1hdHMsXG59IGZyb20gXCIuL2Zvcm1hdHNcIlxuaW1wb3J0IGZvcm1hdExpbWl0IGZyb20gXCIuL2xpbWl0XCJcbmltcG9ydCB0eXBlIEFqdiBmcm9tIFwiYWp2XCJcbmltcG9ydCB0eXBlIHtQbHVnaW4sIEZvcm1hdH0gZnJvbSBcImFqdlwiXG5pbXBvcnQge18sIE5hbWV9IGZyb20gXCJhanYvZGlzdC9jb21waWxlL2NvZGVnZW5cIlxuXG5leHBvcnQge0Zvcm1hdE1vZGUsIEZvcm1hdE5hbWV9IGZyb20gXCIuL2Zvcm1hdHNcIlxuZXhwb3J0IHtMaW1pdEZvcm1hdEVycm9yfSBmcm9tIFwiLi9saW1pdFwiXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1hdE9wdGlvbnMge1xuICBtb2RlPzogRm9ybWF0TW9kZVxuICBmb3JtYXRzPzogRm9ybWF0TmFtZVtdXG4gIGtleXdvcmRzPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBGb3JtYXRzUGx1Z2luT3B0aW9ucyA9IEZvcm1hdE5hbWVbXSB8IEZvcm1hdE9wdGlvbnNcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXRzUGx1Z2luIGV4dGVuZHMgUGx1Z2luPEZvcm1hdHNQbHVnaW5PcHRpb25zPiB7XG4gIGdldDogKGZvcm1hdDogRm9ybWF0TmFtZSwgbW9kZT86IEZvcm1hdE1vZGUpID0+IEZvcm1hdFxufVxuXG5jb25zdCBmdWxsTmFtZSA9IG5ldyBOYW1lKFwiZnVsbEZvcm1hdHNcIilcbmNvbnN0IGZhc3ROYW1lID0gbmV3IE5hbWUoXCJmYXN0Rm9ybWF0c1wiKVxuXG5jb25zdCBmb3JtYXRzUGx1Z2luOiBGb3JtYXRzUGx1Z2luID0gKFxuICBhanY6IEFqdixcbiAgb3B0czogRm9ybWF0c1BsdWdpbk9wdGlvbnMgPSB7a2V5d29yZHM6IHRydWV9XG4pOiBBanYgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgIGFkZEZvcm1hdHMoYWp2LCBvcHRzLCBmdWxsRm9ybWF0cywgZnVsbE5hbWUpXG4gICAgcmV0dXJuIGFqdlxuICB9XG4gIGNvbnN0IFtmb3JtYXRzLCBleHBvcnROYW1lXSA9XG4gICAgb3B0cy5tb2RlID09PSBcImZhc3RcIiA/IFtmYXN0Rm9ybWF0cywgZmFzdE5hbWVdIDogW2Z1bGxGb3JtYXRzLCBmdWxsTmFtZV1cbiAgY29uc3QgbGlzdCA9IG9wdHMuZm9ybWF0cyB8fCBmb3JtYXROYW1lc1xuICBhZGRGb3JtYXRzKGFqdiwgbGlzdCwgZm9ybWF0cywgZXhwb3J0TmFtZSlcbiAgaWYgKG9wdHMua2V5d29yZHMpIGZvcm1hdExpbWl0KGFqdilcbiAgcmV0dXJuIGFqdlxufVxuXG5mb3JtYXRzUGx1Z2luLmdldCA9IChuYW1lOiBGb3JtYXROYW1lLCBtb2RlOiBGb3JtYXRNb2RlID0gXCJmdWxsXCIpOiBGb3JtYXQgPT4ge1xuICBjb25zdCBmb3JtYXRzID0gbW9kZSA9PT0gXCJmYXN0XCIgPyBmYXN0Rm9ybWF0cyA6IGZ1bGxGb3JtYXRzXG4gIGNvbnN0IGYgPSBmb3JtYXRzW25hbWVdXG4gIGlmICghZikgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZvcm1hdCBcIiR7bmFtZX1cImApXG4gIHJldHVybiBmXG59XG5cbmZ1bmN0aW9uIGFkZEZvcm1hdHMoYWp2OiBBanYsIGxpc3Q6IEZvcm1hdE5hbWVbXSwgZnM6IERlZmluZWRGb3JtYXRzLCBleHBvcnROYW1lOiBOYW1lKTogdm9pZCB7XG4gIGFqdi5vcHRzLmNvZGUuZm9ybWF0cyA/Pz0gX2ByZXF1aXJlKFwiYWp2LWZvcm1hdHMvZGlzdC9mb3JtYXRzXCIpLiR7ZXhwb3J0TmFtZX1gXG4gIGZvciAoY29uc3QgZiBvZiBsaXN0KSBhanYuYWRkRm9ybWF0KGYsIGZzW2ZdKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmb3JtYXRzUGx1Z2luXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHNQbHVnaW5cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUdhLHlCQUVBLDZCQUVBLHVCQUdBLGlCQVdQLG9CQUlPLHFCQUtBLGNBS0EsMEJBWUEsb0JBUUEsMkJBSVAsbUJBY0EseUJBVU8sa0NBa0JBLDhCQUdBLGVBS1AsMkJBUU8sb0JBS0EsY0FXQSxpQkFLQSxzQkFRQSxrQkFLQSwyQkFPQSx1QkFLQSw2QkFjQSx5QkFhRCxXQW1CQyw0QkFnQ0Esd0JBUUEsc0JBT0EsdUJBTUEsbUJBRUEsbUNBc0JBLDZCQVNBLFlBOEJBLGFBa0JBLG9CQWtCQSxzQkFtQlAsaUNBT0EsNkJBcUJPLDZCQXFDQSw2QkE2QkEsMEJBOENBLCtCQVdBLHlCQVVBLDBCQWdFQSx3QkFrQkEsK0JBS0EsMkJBT0EsbUJBTUEsZ0JBZUEsa0NBYUEsNEJBS0EsOEJBU0Esd0JBSUEsdUJBV0Esa0JBTUEsWUEwQkEsd0JBT0Esb0NBS0EsOEJBUUEsc0JBVUEscUJBS0EsNkJBYUEsNEJBS0Esd0JBT0EsdUJBT0EseUJBVUEsd0JBTUEsd0JBZ0JBLDRCQVlQLGNBY08sNEJBVUEsWUFLQSxtQkFvQkEsZ0JBMENBLHdCQW1DQSw0QkFPQSwyQkFPQSxvQ0FPQSxtQ0FJQSw2QkFZQSxpQ0FLQSwyQkFRQSwwQkFPQSx1Q0FLQSw4QkFJQSx3QkFLQSxnQ0FJQSwwQkFRQSx5Q0FVQSxtQ0FTQSxzQkFrQkEsY0FxQkEsMEJBT0EseUJBT0EsOEJB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QUssUUFBUSxLQUFLO0FBQUEsUUFDdkMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLE1BQU0sU0FBUztBQUNYLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxTQUFTLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDM0U7QUFBQSxNQUNBLElBQUksU0FBUztBQUNULGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxPQUFPLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDekU7QUFBQSxNQUNBLE1BQU0sU0FBUztBQUNYLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxTQUFTLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDM0U7QUFBQSxNQUNBLEtBQUssU0FBUztBQUNWLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxRQUFRLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDMUU7QUFBQSxNQUNBLE9BQU8sU0FBUztBQUNaLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxVQUFVLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDNUU7QUFBQSxNQUNBLEtBQUssU0FBUztBQUNWLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxRQUFRLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDMUU7QUFBQSxNQUNBLE1BQU0sU0FBUztBQUNYLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxTQUFTLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDM0U7QUFBQSxNQUNBLEtBQUssU0FBUztBQUNWLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxRQUFRLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDMUU7QUFBQSxNQUNBLE9BQU8sU0FBUztBQUNaLGVBQU8sS0FBSyxVQUFVLEVBQUUsTUFBTSxVQUFVLEdBQUcsVUFBVSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFD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QU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxVQUFVO0FBQUEsTUFDakU7QUFBQSxNQUNBLElBQUksU0FBUztBQUNULGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxNQUFNO0FBQUEsTUFDN0Q7QUFBQSxNQUNBLElBQUksU0FBUztBQUNULGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxNQUFNO0FBQUEsTUFDN0Q7QUFBQSxNQUNBLElBQUksYUFBYTtBQUNiLGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxVQUFVO0FBQUEsTUFDakU7QUFBQSxNQUNBLElBQUksVUFBVTtBQUNWLGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPO0FBQUEsTUFDOUQ7QUFBQSxNQUNBLElBQUksUUFBUTtBQUNSLGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLElBQUksVUFBVTtBQUNWLGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPO0FBQUEsTUFDOUQ7QUFBQSxNQUNBLElBQUksU0FBUztBQUNULGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxNQUFNO0FBQUEsTUFDN0Q7QUFBQSxNQUNBLElBQUksV0FBVztBQUNYLGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxRQUFRO0FBQUEsTUFDL0Q7QUFBQSxNQUNBLElBQUksU0FBUztBQUNULGVBQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEtBQUssQ0FB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O0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7OztBQzlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUNIQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUNRTSxTQUFVLGlCQUFpQixRQUF1QjtBQUNwRCxRQUFNLFFBQVEsZUFBZSxNQUFNO0FBQ25DLFFB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ZWN0IiwgImFycmF5IiwgIm9iamVjdFV0aWwiLCAiaW5pdF91dGlsIiwgImluaXRfdXRpbCIsICJlcnJvclV0aWwiLCAiZXJyb3JNYXAiLCAiaW5pdF90eXBlcyIsICJpbml0X3V0aWwiLCAiY3R4IiwgInJlc3VsdCIsICJpc3N1ZXMiLCAiZWxlbWVudHMiLCAicHJvY2Vzc2VkIiwgInByZXByb2Nlc3MiLCAiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwgImluaXRfdXRpbCIsICJpbml0X3R5cGVzIiwgImluaXRfZXh0ZXJuYWwiLCAiaW5pdF9leHRlcm5hbCIsICJzYWZlUGFyc2UiLCAicmVzdWx0IiwgImRlZiIsICJzYWZlUGFyc2UiLCAidGFzayIsICJlcnJvciIsICJzYWZlUGFyc2UiLCAianNvbnJwY05vdGlmaWNhdGlvbiIsICJyZXF1aXJlIiwgInN0ciIsICJOYW1lIiwgIl8iLCAic3RyIiwgInN0cmluZ2lmeSIsICJVc2VkVmFsdWVTdGF0ZSIsICJDb2RlR2VuIiwgImFqdiIsICJhanYiLCAiYWp2IiwgIl9hZGRGb3JtYXRzIiwgImluaXRfc2VydmVyIiwgInNhZmVQYXJzZSJdCn0K
