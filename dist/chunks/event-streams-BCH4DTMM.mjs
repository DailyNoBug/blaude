#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs3 as require_dist_cjs
} from "./chunk-HJNATCD3.mjs";
import {
  __esm,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var import_util_utf8, EventStreamSerde;
var init_EventStreamSerde = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
    import_util_utf8 = __toESM(require_dist_cjs());
    EventStreamSerde = class {
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = /* @__PURE__ */ Symbol("initialRequestMarker");
        const eventStreamIterable = {
          async *[Symbol.asyncIterator]() {
            if (initialRequest) {
              const headers = {
                ":event-type": { type: "string", value: "initial-request" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: defaultContentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers,
                body
              };
            }
            for await (const page of eventStream) {
              yield page;
            }
          }
        };
        return marshaller.serialize(eventStreamIterable, (event) => {
          if (event[initialRequestMarker]) {
            return {
              headers: event.headers,
              body: event.body
            };
          }
          const unionMember = Object.keys(event).find((key) => {
            return key !== "__type";
          }) ?? "";
          const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
          const headers = {
            ":event-type": { type: "string", value: eventType },
            ":message-type": { type: "string", value: "event" },
            ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType },
            ...additionalHeaders
          };
          return {
            headers,
            body
          };
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = /* @__PURE__ */ Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event) => {
          const unionMember = Object.keys(event).find((key) => {
            return key !== "__type";
          }) ?? "";
          const body = event[unionMember].body;
          if (unionMember === "initial-response") {
            const dataObject = await this.deserializer.read(responseSchema, body);
            delete dataObject[eventStreamMember];
            return {
              [initialResponseMarker]: true,
              ...dataObject
            };
          } else if (unionMember in memberSchemas) {
            const eventStreamSchema = memberSchemas[unionMember];
            if (eventStreamSchema.isStructSchema()) {
              const out = {};
              let hasBindings = false;
              for (const [name, member] of eventStreamSchema.structIterator()) {
                const { eventHeader, eventPayload } = member.getMergedTraits();
                hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                if (eventPayload) {
                  if (member.isBlobSchema()) {
                    out[name] = body;
                  } else if (member.isStringSchema()) {
                    out[name] = (this.serdeContext?.utf8Encoder ?? import_util_utf8.toUtf8)(body);
                  } else if (member.isStructSchema()) {
                    out[name] = await this.deserializer.read(member, body);
                  }
                } else if (eventHeader) {
                  const value = event[unionMember].headers[name]?.value;
                  if (value != null) {
                    if (member.isNumericSchema()) {
                      if (value && typeof value === "object" && "bytes" in value) {
                        out[name] = BigInt(value.toString());
                      } else {
                        out[name] = Number(value);
                      }
                    } else {
                      out[name] = value;
                    }
                  }
                }
              }
              if (hasBindings) {
                return {
                  [unionMember]: out
                };
              }
              if (body.byteLength === 0) {
                return {
                  [unionMember]: {}
                };
              }
            }
            return {
              [unionMember]: await this.deserializer.read(eventStreamSchema, body)
            };
          } else {
            return {
              $unknown: event
            };
          }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
          return asyncIterable;
        }
        if (firstEvent.value?.[initialResponseMarker]) {
          if (!responseSchema) {
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          }
          for (const [key, value] of Object.entries(firstEvent.value)) {
            initialResponseContainer[key] = value;
          }
        }
        return {
          async *[Symbol.asyncIterator]() {
            if (!firstEvent?.value?.[initialResponseMarker]) {
              yield firstEvent.value;
            }
            while (true) {
              const { done, value } = await asyncIterator.next();
              if (done) {
                break;
              }
              yield value;
            }
          }
        };
      }
      writeEventBody(unionMember, unionSchema, event) {
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (() => {
          const struct = unionSchema.getSchema();
          return struct[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
          const [type, value] = event[unionMember];
          eventType = type;
          serializer.write(15, value);
        } else {
          const eventSchema = unionSchema.getMemberSchema(unionMember);
          if (eventSchema.isStructSchema()) {
            for (const [memberName, memberSchema] of eventSchema.structIterator()) {
              const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
              if (eventPayload) {
                explicitPayloadMember = memberName;
              } else if (eventHeader) {
                const value = event[unionMember][memberName];
                let type = "binary";
                if (memberSchema.isNumericSchema()) {
                  if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                    type = "integer";
                  } else {
                    type = "long";
                  }
                } else if (memberSchema.isTimestampSchema()) {
                  type = "timestamp";
                } else if (memberSchema.isStringSchema()) {
                  type = "string";
                } else if (memberSchema.isBooleanSchema()) {
                  type = "boolean";
                }
                if (value != null) {
                  additionalHeaders[memberName] = {
                    type,
                    value
                  };
                  delete event[unionMember][memberName];
                }
              }
            }
            if (explicitPayloadMember !== null) {
              const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
              if (payloadSchema.isBlobSchema()) {
                explicitPayloadContentType = "application/octet-stream";
              } else if (payloadSchema.isStringSchema()) {
                explicitPayloadContentType = "text/plain";
              }
              serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
            } else {
              serializer.write(eventSchema, event[unionMember]);
            }
          } else if (eventSchema.isUnitSchema()) {
            serializer.write(eventSchema, {});
          } else {
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          }
        }
        const messageSerialization = serializer.flush() ?? new Uint8Array();
        const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? import_util_utf8.fromUtf8)(messageSerialization) : messageSerialization;
        return {
          body,
          eventType,
          explicitPayloadContentType,
          additionalHeaders
        };
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js
var init_event_streams = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js"() {
    init_EventStreamSerde();
  }
});
init_event_streams();
export {
  EventStreamSerde
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL2V2ZW50LXN0cmVhbXMvRXZlbnRTdHJlYW1TZXJkZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvZXZlbnQtc3RyZWFtcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZnJvbVV0ZjgsIHRvVXRmOCB9IGZyb20gXCJAc21pdGh5L3V0aWwtdXRmOFwiO1xuZXhwb3J0IGNsYXNzIEV2ZW50U3RyZWFtU2VyZGUge1xuICAgIG1hcnNoYWxsZXI7XG4gICAgc2VyaWFsaXplcjtcbiAgICBkZXNlcmlhbGl6ZXI7XG4gICAgc2VyZGVDb250ZXh0O1xuICAgIGRlZmF1bHRDb250ZW50VHlwZTtcbiAgICBjb25zdHJ1Y3Rvcih7IG1hcnNoYWxsZXIsIHNlcmlhbGl6ZXIsIGRlc2VyaWFsaXplciwgc2VyZGVDb250ZXh0LCBkZWZhdWx0Q29udGVudFR5cGUsIH0pIHtcbiAgICAgICAgdGhpcy5tYXJzaGFsbGVyID0gbWFyc2hhbGxlcjtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVyID0gc2VyaWFsaXplcjtcbiAgICAgICAgdGhpcy5kZXNlcmlhbGl6ZXIgPSBkZXNlcmlhbGl6ZXI7XG4gICAgICAgIHRoaXMuc2VyZGVDb250ZXh0ID0gc2VyZGVDb250ZXh0O1xuICAgICAgICB0aGlzLmRlZmF1bHRDb250ZW50VHlwZSA9IGRlZmF1bHRDb250ZW50VHlwZTtcbiAgICB9XG4gICAgYXN5bmMgc2VyaWFsaXplRXZlbnRTdHJlYW0oeyBldmVudFN0cmVhbSwgcmVxdWVzdFNjaGVtYSwgaW5pdGlhbFJlcXVlc3QsIH0pIHtcbiAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IHRoaXMubWFyc2hhbGxlcjtcbiAgICAgICAgY29uc3QgZXZlbnRTdHJlYW1NZW1iZXIgPSByZXF1ZXN0U2NoZW1hLmdldEV2ZW50U3RyZWFtTWVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHVuaW9uU2NoZW1hID0gcmVxdWVzdFNjaGVtYS5nZXRNZW1iZXJTY2hlbWEoZXZlbnRTdHJlYW1NZW1iZXIpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVyID0gdGhpcy5zZXJpYWxpemVyO1xuICAgICAgICBjb25zdCBkZWZhdWx0Q29udGVudFR5cGUgPSB0aGlzLmRlZmF1bHRDb250ZW50VHlwZTtcbiAgICAgICAgY29uc3QgaW5pdGlhbFJlcXVlc3RNYXJrZXIgPSBTeW1ib2woXCJpbml0aWFsUmVxdWVzdE1hcmtlclwiKTtcbiAgICAgICAgY29uc3QgZXZlbnRTdHJlYW1JdGVyYWJsZSA9IHtcbiAgICAgICAgICAgIGFzeW5jICpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI6ZXZlbnQtdHlwZVwiOiB7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiBcImluaXRpYWwtcmVxdWVzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjptZXNzYWdlLXR5cGVcIjogeyB0eXBlOiBcInN0cmluZ1wiLCB2YWx1ZTogXCJldmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjpjb250ZW50LXR5cGVcIjogeyB0eXBlOiBcInN0cmluZ1wiLCB2YWx1ZTogZGVmYXVsdENvbnRlbnRUeXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXIud3JpdGUocmVxdWVzdFNjaGVtYSwgaW5pdGlhbFJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbaW5pdGlhbFJlcXVlc3RNYXJrZXJdOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgcGFnZSBvZiBldmVudFN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBwYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtYXJzaGFsbGVyLnNlcmlhbGl6ZShldmVudFN0cmVhbUl0ZXJhYmxlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudFtpbml0aWFsUmVxdWVzdE1hcmtlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBldmVudC5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBldmVudC5ib2R5LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1bmlvbk1lbWJlciA9IE9iamVjdC5rZXlzKGV2ZW50KS5maW5kKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9PSBcIl9fdHlwZVwiO1xuICAgICAgICAgICAgfSkgPz8gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkaXRpb25hbEhlYWRlcnMsIGJvZHksIGV2ZW50VHlwZSwgZXhwbGljaXRQYXlsb2FkQ29udGVudFR5cGUgfSA9IHRoaXMud3JpdGVFdmVudEJvZHkodW5pb25NZW1iZXIsIHVuaW9uU2NoZW1hLCBldmVudCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIFwiOmV2ZW50LXR5cGVcIjogeyB0eXBlOiBcInN0cmluZ1wiLCB2YWx1ZTogZXZlbnRUeXBlIH0sXG4gICAgICAgICAgICAgICAgXCI6bWVzc2FnZS10eXBlXCI6IHsgdHlwZTogXCJzdHJpbmdcIiwgdmFsdWU6IFwiZXZlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFwiOmNvbnRlbnQtdHlwZVwiOiB7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiBleHBsaWNpdFBheWxvYWRDb250ZW50VHlwZSA/PyBkZWZhdWx0Q29udGVudFR5cGUgfSxcbiAgICAgICAgICAgICAgICAuLi5hZGRpdGlvbmFsSGVhZGVycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBkZXNlcmlhbGl6ZUV2ZW50U3RyZWFtKHsgcmVzcG9uc2UsIHJlc3BvbnNlU2NoZW1hLCBpbml0aWFsUmVzcG9uc2VDb250YWluZXIsIH0pIHtcbiAgICAgICAgY29uc3QgbWFyc2hhbGxlciA9IHRoaXMubWFyc2hhbGxlcjtcbiAgICAgICAgY29uc3QgZXZlbnRTdHJlYW1NZW1iZXIgPSByZXNwb25zZVNjaGVtYS5nZXRFdmVudFN0cmVhbU1lbWJlcigpO1xuICAgICAgICBjb25zdCB1bmlvblNjaGVtYSA9IHJlc3BvbnNlU2NoZW1hLmdldE1lbWJlclNjaGVtYShldmVudFN0cmVhbU1lbWJlcik7XG4gICAgICAgIGNvbnN0IG1lbWJlclNjaGVtYXMgPSB1bmlvblNjaGVtYS5nZXRNZW1iZXJTY2hlbWFzKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxSZXNwb25zZU1hcmtlciA9IFN5bWJvbChcImluaXRpYWxSZXNwb25zZU1hcmtlclwiKTtcbiAgICAgICAgY29uc3QgYXN5bmNJdGVyYWJsZSA9IG1hcnNoYWxsZXIuZGVzZXJpYWxpemUocmVzcG9uc2UuYm9keSwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bmlvbk1lbWJlciA9IE9iamVjdC5rZXlzKGV2ZW50KS5maW5kKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9PSBcIl9fdHlwZVwiO1xuICAgICAgICAgICAgfSkgPz8gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBldmVudFt1bmlvbk1lbWJlcl0uYm9keTtcbiAgICAgICAgICAgIGlmICh1bmlvbk1lbWJlciA9PT0gXCJpbml0aWFsLXJlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhT2JqZWN0ID0gYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZXIucmVhZChyZXNwb25zZVNjaGVtYSwgYm9keSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFPYmplY3RbZXZlbnRTdHJlYW1NZW1iZXJdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIFtpbml0aWFsUmVzcG9uc2VNYXJrZXJdOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhT2JqZWN0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmlvbk1lbWJlciBpbiBtZW1iZXJTY2hlbWFzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRTdHJlYW1TY2hlbWEgPSBtZW1iZXJTY2hlbWFzW3VuaW9uTWVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRTdHJlYW1TY2hlbWEuaXNTdHJ1Y3RTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcl0gb2YgZXZlbnRTdHJlYW1TY2hlbWEuc3RydWN0SXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBldmVudEhlYWRlciwgZXZlbnRQYXlsb2FkIH0gPSBtZW1iZXIuZ2V0TWVyZ2VkVHJhaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmdzIHx8IEJvb2xlYW4oZXZlbnRIZWFkZXIgfHwgZXZlbnRQYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyLmlzQmxvYlNjaGVtYSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lbWJlci5pc1N0cmluZ1NjaGVtYSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9ICh0aGlzLnNlcmRlQ29udGV4dD8udXRmOEVuY29kZXIgPz8gdG9VdGY4KShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVtYmVyLmlzU3RydWN0U2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0gYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZXIucmVhZChtZW1iZXIsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50SGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudFt1bmlvbk1lbWJlcl0uaGVhZGVyc1tuYW1lXT8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlci5pc051bWVyaWNTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBcImJ5dGVzXCIgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSBCaWdJbnQodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1bmlvbk1lbWJlcl06IG91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdW5pb25NZW1iZXJdOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgW3VuaW9uTWVtYmVyXTogYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZXIucmVhZChldmVudFN0cmVhbVNjaGVtYSwgYm9keSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICR1bmtub3duOiBldmVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYXN5bmNJdGVyYXRvciA9IGFzeW5jSXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICAgIGNvbnN0IGZpcnN0RXZlbnQgPSBhd2FpdCBhc3luY0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKGZpcnN0RXZlbnQuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jSXRlcmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0RXZlbnQudmFsdWU/Lltpbml0aWFsUmVzcG9uc2VNYXJrZXJdKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeTo6Y29yZS9wcm90b2NvbHMgLSBpbml0aWFsLXJlc3BvbnNlIGV2ZW50IGVuY291bnRlcmVkIGluIGV2ZW50IHN0cmVhbSBidXQgbm8gcmVzcG9uc2Ugc2NoZW1hIGdpdmVuLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZpcnN0RXZlbnQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlc3BvbnNlQ29udGFpbmVyW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXN5bmMgKltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdEV2ZW50Py52YWx1ZT8uW2luaXRpYWxSZXNwb25zZU1hcmtlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlyc3RFdmVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgYXN5bmNJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3cml0ZUV2ZW50Qm9keSh1bmlvbk1lbWJlciwgdW5pb25TY2hlbWEsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSB0aGlzLnNlcmlhbGl6ZXI7XG4gICAgICAgIGxldCBldmVudFR5cGUgPSB1bmlvbk1lbWJlcjtcbiAgICAgICAgbGV0IGV4cGxpY2l0UGF5bG9hZE1lbWJlciA9IG51bGw7XG4gICAgICAgIGxldCBleHBsaWNpdFBheWxvYWRDb250ZW50VHlwZTtcbiAgICAgICAgY29uc3QgaXNLbm93blNjaGVtYSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHJ1Y3QgPSB1bmlvblNjaGVtYS5nZXRTY2hlbWEoKTtcbiAgICAgICAgICAgIHJldHVybiBzdHJ1Y3RbNF0uaW5jbHVkZXModW5pb25NZW1iZXIpO1xuICAgICAgICB9KSgpO1xuICAgICAgICBjb25zdCBhZGRpdGlvbmFsSGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAoIWlzS25vd25TY2hlbWEpIHtcbiAgICAgICAgICAgIGNvbnN0IFt0eXBlLCB2YWx1ZV0gPSBldmVudFt1bmlvbk1lbWJlcl07XG4gICAgICAgICAgICBldmVudFR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZSgxNSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRTY2hlbWEgPSB1bmlvblNjaGVtYS5nZXRNZW1iZXJTY2hlbWEodW5pb25NZW1iZXIpO1xuICAgICAgICAgICAgaWYgKGV2ZW50U2NoZW1hLmlzU3RydWN0U2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttZW1iZXJOYW1lLCBtZW1iZXJTY2hlbWFdIG9mIGV2ZW50U2NoZW1hLnN0cnVjdEl0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBldmVudEhlYWRlciwgZXZlbnRQYXlsb2FkIH0gPSBtZW1iZXJTY2hlbWEuZ2V0TWVyZ2VkVHJhaXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2l0UGF5bG9hZE1lbWJlciA9IG1lbWJlck5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnRIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnRbdW5pb25NZW1iZXJdW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBcImJpbmFyeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlclNjaGVtYS5pc051bWVyaWNTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoLTIpICoqIDMxIDw9IHZhbHVlICYmIHZhbHVlIDw9IDIgKiogMzEgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImludGVnZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImxvbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtZW1iZXJTY2hlbWEuaXNUaW1lc3RhbXBTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRpbWVzdGFtcFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVtYmVyU2NoZW1hLmlzU3RyaW5nU2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lbWJlclNjaGVtYS5pc0Jvb2xlYW5TY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImJvb2xlYW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbEhlYWRlcnNbbWVtYmVyTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50W3VuaW9uTWVtYmVyXVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhwbGljaXRQYXlsb2FkTWVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWRTY2hlbWEgPSBldmVudFNjaGVtYS5nZXRNZW1iZXJTY2hlbWEoZXhwbGljaXRQYXlsb2FkTWVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBheWxvYWRTY2hlbWEuaXNCbG9iU2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2l0UGF5bG9hZENvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXlsb2FkU2NoZW1hLmlzU3RyaW5nU2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2l0UGF5bG9hZENvbnRlbnRUeXBlID0gXCJ0ZXh0L3BsYWluXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShwYXlsb2FkU2NoZW1hLCBldmVudFt1bmlvbk1lbWJlcl1bZXhwbGljaXRQYXlsb2FkTWVtYmVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVyLndyaXRlKGV2ZW50U2NoZW1hLCBldmVudFt1bmlvbk1lbWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50U2NoZW1hLmlzVW5pdFNjaGVtYSgpKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShldmVudFNjaGVtYSwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS9jb3JlL2V2ZW50LXN0cmVhbXMgLSBub24tc3RydWN0IG1lbWJlciBub3Qgc3VwcG9ydGVkIGluIGV2ZW50IHN0cmVhbSB1bmlvbi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZVNlcmlhbGl6YXRpb24gPSBzZXJpYWxpemVyLmZsdXNoKCkgPz8gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICAgICAgY29uc3QgYm9keSA9IHR5cGVvZiBtZXNzYWdlU2VyaWFsaXphdGlvbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyAodGhpcy5zZXJkZUNvbnRleHQ/LnV0ZjhEZWNvZGVyID8/IGZyb21VdGY4KShtZXNzYWdlU2VyaWFsaXphdGlvbilcbiAgICAgICAgICAgIDogbWVzc2FnZVNlcmlhbGl6YXRpb247XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgZXhwbGljaXRQYXlsb2FkQ29udGVudFR5cGUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsSGVhZGVycyxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vRXZlbnRTdHJlYW1TZXJkZVwiO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQ2E7QUFEYjtBQUFBO0FBQUEsdUJBQWlDO0FBQzFCLElBQU0sbUJBQU4sTUFBdUI7QUFBQSxNQUMxQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFlBQVksRUFBRSxZQUFZLFlBQVksY0FBYyxjQUFjLG1CQUFvQixHQUFHO0FBQ3JGLGFBQUssYUFBYTtBQUNsQixhQUFLLGFBQWE7QUFDbEIsYUFBSyxlQUFlO0FBQ3BCLGFBQUssZUFBZTtBQUNwQixhQUFLLHFCQUFxQjtBQUFBLE1BQzlCO0FBQUEsTUFDQSxNQUFNLHFCQUFxQixFQUFFLGFBQWEsZUFBZSxlQUFnQixHQUFHO0FBQ3hFLGNBQU0sYUFBYSxLQUFLO0FBQ3hCLGNBQU0sb0JBQW9CLGNBQWMscUJBQXFCO0FBQzdELGNBQU0sY0FBYyxjQUFjLGdCQUFnQixpQkFBaUI7QUFDbkUsY0FBTSxhQUFhLEtBQUs7QUFDeEIsY0FBTSxxQkFBcUIsS0FBSztBQUNoQyxjQUFNLHVCQUF1Qix1QkFBTyxzQkFBc0I7QUFDMUQsY0FBTSxzQkFBc0I7QUFBQSxVQUN4QixRQUFRLE9BQU8sYUFBYSxJQUFJO0FBQzVCLGdCQUFJLGdCQUFnQjtBQUNoQixvQkFBTSxVQUFVO0FBQUEsZ0JBQ1osZUFBZSxFQUFFLE1BQU0sVUFBVSxPQUFPLGtCQUFrQjtBQUFBLGdCQUMxRCxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsT0FBTyxRQUFRO0FBQUEsZ0JBQ2xELGlCQUFpQixFQUFFLE1BQU0sVUFBVSxPQUFPLG1CQUFtQjtBQUFBLGNBQ2pFO0FBQ0EseUJBQVcsTUFBTSxlQUFlLGNBQWM7QUFDOUMsb0JBQU0sT0FBTyxXQUFXLE1BQU07QUFDOUIsb0JBQU07QUFBQSxn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
