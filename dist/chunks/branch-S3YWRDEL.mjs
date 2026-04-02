#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getProjectDir,
  getTranscriptPath,
  getTranscriptPathForSession,
  init_sessionStorage,
  isTranscriptMessage,
  saveCustomTitle,
  searchSessionsByCustomTitle
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  escapeRegExp,
  init_stringUtils
} from "./chunk-JQ55XPLZ.mjs";
import {
  init_json,
  parseJSONL
} from "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/branch/branch.ts
import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
function deriveFirstPrompt(firstUserMessage) {
  const content = firstUserMessage?.message?.content;
  if (!content) return "Branched conversation";
  const raw = typeof content === "string" ? content : content.find(
    (block) => block.type === "text"
  )?.text;
  if (!raw) return "Branched conversation";
  return raw.replace(/\s+/g, " ").trim().slice(0, 100) || "Branched conversation";
}
async function createFork(customTitle) {
  const forkSessionId = randomUUID();
  const originalSessionId = getSessionId();
  const projectDir = getProjectDir(getOriginalCwd());
  const forkSessionPath = getTranscriptPathForSession(forkSessionId);
  const currentTranscriptPath = getTranscriptPath();
  await mkdir(projectDir, { recursive: true, mode: 448 });
  let transcriptContent;
  try {
    transcriptContent = await readFile(currentTranscriptPath);
  } catch {
    throw new Error("No conversation to branch");
  }
  if (transcriptContent.length === 0) {
    throw new Error("No conversation to branch");
  }
  const entries = parseJSONL(transcriptContent);
  const mainConversationEntries = entries.filter(
    (entry) => isTranscriptMessage(entry) && !entry.isSidechain
  );
  const contentReplacementRecords = entries.filter(
    (entry) => entry.type === "content-replacement" && entry.sessionId === originalSessionId
  ).flatMap((entry) => entry.replacements);
  if (mainConversationEntries.length === 0) {
    throw new Error("No messages to branch");
  }
  let parentUuid = null;
  const lines = [];
  const serializedMessages = [];
  for (const entry of mainConversationEntries) {
    const forkedEntry = {
      ...entry,
      sessionId: forkSessionId,
      parentUuid,
      isSidechain: false,
      forkedFrom: {
        sessionId: originalSessionId,
        messageUuid: entry.uuid
      }
    };
    const serialized = {
      ...entry,
      sessionId: forkSessionId
    };
    serializedMessages.push(serialized);
    lines.push(jsonStringify(forkedEntry));
    if (entry.type !== "progress") {
      parentUuid = entry.uuid;
    }
  }
  if (contentReplacementRecords.length > 0) {
    const forkedReplacementEntry = {
      type: "content-replacement",
      sessionId: forkSessionId,
      replacements: contentReplacementRecords
    };
    lines.push(jsonStringify(forkedReplacementEntry));
  }
  await writeFile(forkSessionPath, lines.join("\n") + "\n", {
    encoding: "utf8",
    mode: 384
  });
  return {
    sessionId: forkSessionId,
    title: customTitle,
    forkPath: forkSessionPath,
    serializedMessages,
    contentReplacementRecords
  };
}
async function getUniqueForkName(baseName) {
  const candidateName = `${baseName} (Branch)`;
  const existingWithExactName = await searchSessionsByCustomTitle(
    candidateName,
    { exact: true }
  );
  if (existingWithExactName.length === 0) {
    return candidateName;
  }
  const existingForks = await searchSessionsByCustomTitle(`${baseName} (Branch`);
  const usedNumbers = /* @__PURE__ */ new Set([1]);
  const forkNumberPattern = new RegExp(
    `^${escapeRegExp(baseName)} \\(Branch(?: (\\d+))?\\)$`
  );
  for (const session of existingForks) {
    const match = session.customTitle?.match(forkNumberPattern);
    if (match) {
      if (match[1]) {
        usedNumbers.add(parseInt(match[1], 10));
      } else {
        usedNumbers.add(1);
      }
    }
  }
  let nextNumber = 2;
  while (usedNumbers.has(nextNumber)) {
    nextNumber++;
  }
  return `${baseName} (Branch ${nextNumber})`;
}
async function call(onDone, context, args) {
  const customTitle = args?.trim() || void 0;
  const originalSessionId = getSessionId();
  try {
    const {
      sessionId,
      title,
      forkPath,
      serializedMessages,
      contentReplacementRecords
    } = await createFork(customTitle);
    const now = /* @__PURE__ */ new Date();
    const firstPrompt = deriveFirstPrompt(
      serializedMessages.find((m) => m.type === "user")
    );
    const baseName = title ?? firstPrompt;
    const effectiveTitle = await getUniqueForkName(baseName);
    await saveCustomTitle(sessionId, effectiveTitle, forkPath);
    logEvent("tengu_conversation_forked", {
      message_count: serializedMessages.length,
      has_custom_title: !!title
    });
    const forkLog = {
      date: now.toISOString().split("T")[0],
      messages: serializedMessages,
      fullPath: forkPath,
      value: now.getTime(),
      created: now,
      modified: now,
      firstPrompt,
      messageCount: serializedMessages.length,
      isSidechain: false,
      sessionId,
      customTitle: effectiveTitle,
      contentReplacements: contentReplacementRecords
    };
    const titleInfo = title ? ` "${title}"` : "";
    const resumeHint = `
To resume the original: claude -r ${originalSessionId}`;
    const successMessage = `Branched conversation${titleInfo}. You are now in the branch.${resumeHint}`;
    if (context.resume) {
      await context.resume(sessionId, forkLog, "fork");
      onDone(successMessage, { display: "system" });
    } else {
      onDone(
        `Branched conversation${titleInfo}. Resume with: /resume ${sessionId}`
      );
    }
    return null;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    onDone(`Failed to branch conversation: ${message}`);
    return null;
  }
}
var init_branch = __esm({
  "src/commands/branch/branch.ts"() {
    init_state();
    init_analytics();
    init_json();
    init_sessionStorage();
    init_slowOperations();
    init_stringUtils();
  }
});
init_branch();
export {
  call,
  deriveFirstPrompt
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2JyYW5jaC9icmFuY2gudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHJhbmRvbVVVSUQsIHR5cGUgVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IG1rZGlyLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBnZXRPcmlnaW5hbEN3ZCwgZ2V0U2Vzc2lvbklkIH0gZnJvbSAnLi4vLi4vYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB0eXBlIHtcbiAgQ29udGVudFJlcGxhY2VtZW50RW50cnksXG4gIEVudHJ5LFxuICBMb2dPcHRpb24sXG4gIFNlcmlhbGl6ZWRNZXNzYWdlLFxuICBUcmFuc2NyaXB0TWVzc2FnZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvbG9ncy5qcydcbmltcG9ydCB7IHBhcnNlSlNPTkwgfSBmcm9tICcuLi8uLi91dGlscy9qc29uLmpzJ1xuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdERpcixcbiAgZ2V0VHJhbnNjcmlwdFBhdGgsXG4gIGdldFRyYW5zY3JpcHRQYXRoRm9yU2Vzc2lvbixcbiAgaXNUcmFuc2NyaXB0TWVzc2FnZSxcbiAgc2F2ZUN1c3RvbVRpdGxlLFxuICBzZWFyY2hTZXNzaW9uc0J5Q3VzdG9tVGl0bGUsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4uLy4uL3V0aWxzL3Nsb3dPcGVyYXRpb25zLmpzJ1xuaW1wb3J0IHsgZXNjYXBlUmVnRXhwIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5cbnR5cGUgVHJhbnNjcmlwdEVudHJ5ID0gVHJhbnNjcmlwdE1lc3NhZ2UgJiB7XG4gIGZvcmtlZEZyb20/OiB7XG4gICAgc2Vzc2lvbklkOiBzdHJpbmdcbiAgICBtZXNzYWdlVXVpZDogVVVJRFxuICB9XG59XG5cbi8qKlxuICogRGVyaXZlIGEgc2luZ2xlLWxpbmUgdGl0bGUgYmFzZSBmcm9tIHRoZSBmaXJzdCB1c2VyIG1lc3NhZ2UuXG4gKiBDb2xsYXBzZXMgd2hpdGVzcGFjZSBcdTIwMTQgbXVsdGlsaW5lIGZpcnN0IG1lc3NhZ2VzIChwYXN0ZWQgc3RhY2tzLCBjb2RlKVxuICogb3RoZXJ3aXNlIGZsb3cgaW50byB0aGUgc2F2ZWQgdGl0bGUgYW5kIGJyZWFrIHRoZSByZXN1bWUgaGludC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZUZpcnN0UHJvbXB0KFxuICBmaXJzdFVzZXJNZXNzYWdlOiBFeHRyYWN0PFNlcmlhbGl6ZWRNZXNzYWdlLCB7IHR5cGU6ICd1c2VyJyB9PiB8IHVuZGVmaW5lZCxcbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbnRlbnQgPSBmaXJzdFVzZXJNZXNzYWdlPy5tZXNzYWdlPy5jb250ZW50XG4gIGlmICghY29udGVudCkgcmV0dXJuICdCcmFuY2hlZCBjb252ZXJzYXRpb24nXG4gIGNvbnN0IHJhdyA9XG4gICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IGNvbnRlbnRcbiAgICAgIDogY29udGVudC5maW5kKFxuICAgICAgICAgIChibG9jayk6IGJsb2NrIGlzIHsgdHlwZTogJ3RleHQnOyB0ZXh0OiBzdHJpbmcgfSA9PlxuICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ3RleHQnLFxuICAgICAgICApPy50ZXh0XG4gIGlmICghcmF3KSByZXR1cm4gJ0JyYW5jaGVkIGNvbnZlcnNhdGlvbidcbiAgcmV0dXJuIChcbiAgICByYXcucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKS5zbGljZSgwLCAxMDApIHx8ICdCcmFuY2hlZCBjb252ZXJzYXRpb24nXG4gIClcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZm9yayBvZiB0aGUgY3VycmVudCBjb252ZXJzYXRpb24gYnkgY29weWluZyBmcm9tIHRoZSB0cmFuc2NyaXB0IGZpbGUuXG4gKiBQcmVzZXJ2ZXMgYWxsIG9yaWdpbmFsIG1ldGFkYXRhICh0aW1lc3RhbXBzLCBnaXRCcmFuY2gsIGV0Yy4pIHdoaWxlIHVwZGF0aW5nXG4gKiBzZXNzaW9uSWQgYW5kIGFkZGluZyBmb3JrZWRGcm9tIHRyYWNlYWJpbGl0eS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9yayhjdXN0b21UaXRsZT86IHN0cmluZyk6IFByb21pc2U8e1xuICBzZXNzaW9uSWQ6IFVVSURcbiAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBmb3JrUGF0aDogc3RyaW5nXG4gIHNlcmlhbGl6ZWRNZXNzYWdlczogU2VyaWFsaXplZE1lc3NhZ2VbXVxuICBjb250ZW50UmVwbGFjZW1lbnRSZWNvcmRzOiBDb250ZW50UmVwbGFjZW1lbnRFbnRyeVsncmVwbGFjZW1lbnRzJ11cbn0+IHtcbiAgY29uc3QgZm9ya1Nlc3Npb25JZCA9IHJhbmRvbVVVSUQoKSBhcyBVVUlEXG4gIGNvbnN0IG9yaWdpbmFsU2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkKClcbiAgY29uc3QgcHJvamVjdERpciA9IGdldFByb2plY3REaXIoZ2V0T3JpZ2luYWxDd2QoKSlcbiAgY29uc3QgZm9ya1Nlc3Npb25QYXRoID0gZ2V0VHJhbnNjcmlwdFBhdGhGb3JTZXNzaW9uKGZvcmtTZXNzaW9uSWQpXG4gIGNvbnN0IGN1cnJlbnRUcmFuc2NyaXB0UGF0aCA9IGdldFRyYW5zY3JpcHRQYXRoKClcblxuICAvLyBFbnN1cmUgcHJvamVjdCBkaXJlY3RvcnkgZXhpc3RzXG4gIGF3YWl0IG1rZGlyKHByb2plY3REaXIsIHsgcmVjdXJzaXZlOiB0cnVlLCBtb2RlOiAwbzcwMCB9KVxuXG4gIC8vIFJlYWQgY3VycmVudCB0cmFuc2NyaXB0IGZpbGVcbiAgbGV0IHRyYW5zY3JpcHRDb250ZW50OiBCdWZmZXJcbiAgdHJ5IHtcbiAgICB0cmFuc2NyaXB0Q29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGN1cnJlbnRUcmFuc2NyaXB0UGF0aClcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb252ZXJzYXRpb24gdG8gYnJhbmNoJylcbiAgfVxuXG4gIGlmICh0cmFuc2NyaXB0Q29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbnZlcnNhdGlvbiB0byBicmFuY2gnKVxuICB9XG5cbiAgLy8gUGFyc2UgYWxsIHRyYW5zY3JpcHQgZW50cmllcyAobWVzc2FnZXMgKyBtZXRhZGF0YSBlbnRyaWVzIGxpa2UgY29udGVudC1yZXBsYWNlbWVudClcbiAgY29uc3QgZW50cmllcyA9IHBhcnNlSlNPTkw8RW50cnk+KHRyYW5zY3JpcHRDb250ZW50KVxuXG4gIC8vIEZpbHRlciB0byBvbmx5IG1haW4gY29udmVyc2F0aW9uIG1lc3NhZ2VzIChleGNsdWRlIHNpZGVjaGFpbnMgYW5kIG5vbi1tZXNzYWdlIGVudHJpZXMpXG4gIGNvbnN0IG1haW5Db252ZXJzYXRpb25FbnRyaWVzID0gZW50cmllcy5maWx0ZXIoXG4gICAgKGVudHJ5KTogZW50cnkgaXMgVHJhbnNjcmlwdE1lc3NhZ2UgPT5cbiAgICAgIGlzVHJhbnNjcmlwdE1lc3NhZ2UoZW50cnkpICYmICFlbnRyeS5pc1NpZGVjaGFpbixcbiAgKVxuXG4gIC8vIENvbnRlbnQtcmVwbGFjZW1lbnQgZW50cmllcyBmb3IgdGhlIG9yaWdpbmFsIHNlc3Npb24uIFRoZXNlIHJlY29yZCB3aGljaFxuICAvLyB0b29sX3Jlc3VsdCBibG9ja3Mgd2VyZSByZXBsYWNlZCB3aXRoIHByZXZpZXdzIGJ5IHRoZSBwZXItbWVzc2FnZSBidWRnZXQuXG4gIC8vIFdpdGhvdXQgdGhlbSBpbiB0aGUgZm9yayBKU09OTCwgYGNsYXVkZSAtciB7Zm9ya0lkfWAgcmVjb25zdHJ1Y3RzIHN0YXRlXG4gIC8vIHdpdGggYW4gZW1wdHkgcmVwbGFjZW1lbnRzIE1hcCBcdTIxOTIgcHJldmlvdXNseS1yZXBsYWNlZCByZXN1bHRzIGFyZSBjbGFzc2lmaWVkXG4gIC8vIGFzIEZST1pFTiBhbmQgc2VudCBhcyBmdWxsIGNvbnRlbnQgKHByb21wdCBjYWNoZSBtaXNzICsgcGVybWFuZW50IG92ZXJhZ2UpLlxuICAvLyBzZXNzaW9uSWQgbXVzdCBiZSByZXdyaXR0ZW4gc2luY2UgbG9hZFRyYW5zY3JpcHRGaWxlIGtleXMgbG9va3VwIGJ5IHRoZVxuICAvLyBzZXNzaW9uJ3MgbWVzc2FnZXMnIHNlc3Npb25JZC5cbiAgY29uc3QgY29udGVudFJlcGxhY2VtZW50UmVjb3JkcyA9IGVudHJpZXNcbiAgICAuZmlsdGVyKFxuICAgICAgKGVudHJ5KTogZW50cnkgaXMgQ29udGVudFJlcGxhY2VtZW50RW50cnkgPT5cbiAgICAgICAgZW50cnkudHlwZSA9PT0gJ2NvbnRlbnQtcmVwbGFjZW1lbnQnICYmXG4gICAgICAgIGVudHJ5LnNlc3Npb25JZCA9PT0gb3JpZ2luYWxTZXNzaW9uSWQsXG4gICAgKVxuICAgIC5mbGF0TWFwKGVudHJ5ID0+IGVudHJ5LnJlcGxhY2VtZW50cylcblxuICBpZiAobWFpbkNvbnZlcnNhdGlvbkVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXNzYWdlcyB0byBicmFuY2gnKVxuICB9XG5cbiAgLy8gQnVpbGQgZm9ya2VkIGVudHJpZXMgd2l0aCBuZXcgc2Vzc2lvbklkIGFuZCBwcmVzZXJ2ZWQgbWV0YWRhdGFcbiAgbGV0IHBhcmVudFV1aWQ6IFVVSUQgfCBudWxsID0gbnVsbFxuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBjb25zdCBzZXJpYWxpemVkTWVzc2FnZXM6IFNlcmlhbGl6ZWRNZXNzYWdlW10gPSBbXVxuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgbWFpbkNvbnZlcnNhdGlvbkVudHJpZXMpIHtcbiAgICAvLyBDcmVhdGUgZm9ya2VkIHRyYW5zY3JpcHQgZW50cnkgcHJlc2VydmluZyBhbGwgb3JpZ2luYWwgbWV0YWRhdGFcbiAgICBjb25zdCBmb3JrZWRFbnRyeTogVHJhbnNjcmlwdEVudHJ5ID0ge1xuICAgICAgLi4uZW50cnksXG4gICAgICBzZXNzaW9uSWQ6IGZvcmtTZXNzaW9uSWQsXG4gICAgICBwYXJlbnRVdWlkLFxuICAgICAgaXNTaWRlY2hhaW46IGZhbHNlLFxuICAgICAgZm9ya2VkRnJvbToge1xuICAgICAgICBzZXNzaW9uSWQ6IG9yaWdpbmFsU2Vzc2lvbklkLFxuICAgICAgICBtZXNzYWdlVXVpZDogZW50cnkudXVpZCxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgc2VyaWFsaXplZCBtZXNzYWdlIGZvciBMb2dPcHRpb25cbiAgICBjb25zdCBzZXJpYWxpemVkOiBTZXJpYWxpemVkTWVzc2FnZSA9IHtcbiAgICAgIC4uLmVudHJ5LFxuICAgICAgc2Vzc2lvbklkOiBmb3JrU2Vzc2lvbklkLFxuICAgIH1cblxuICAgIHNlcmlhbGl6ZWRNZXNzYWdlcy5wdXNoKHNlcmlhbGl6ZWQpXG4gICAgbGluZXMucHVzaChqc29uU3RyaW5naWZ5KGZvcmtlZEVudHJ5KSlcbiAgICBpZiAoZW50cnkudHlwZSAhPT0gJ3Byb2dyZXNzJykge1xuICAgICAgcGFyZW50VXVpZCA9IGVudHJ5LnV1aWRcbiAgICB9XG4gIH1cblxuICAvLyBBcHBlbmQgY29udGVudC1yZXBsYWNlbWVudCBlbnRyeSAoaWYgYW55KSB3aXRoIHRoZSBmb3JrJ3Mgc2Vzc2lvbklkLlxuICAvLyBXcml0dGVuIGFzIGEgU0lOR0xFIGVudHJ5IChzYW1lIHNoYXBlIGFzIGluc2VydENvbnRlbnRSZXBsYWNlbWVudCkgc29cbiAgLy8gbG9hZFRyYW5zY3JpcHRGaWxlJ3MgY29udGVudC1yZXBsYWNlbWVudCBicmFuY2ggcGlja3MgaXQgdXAuXG4gIGlmIChjb250ZW50UmVwbGFjZW1lbnRSZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmb3JrZWRSZXBsYWNlbWVudEVudHJ5OiBDb250ZW50UmVwbGFjZW1lbnRFbnRyeSA9IHtcbiAgICAgIHR5cGU6ICdjb250ZW50LXJlcGxhY2VtZW50JyxcbiAgICAgIHNlc3Npb25JZDogZm9ya1Nlc3Npb25JZCxcbiAgICAgIHJlcGxhY2VtZW50czogY29udGVudFJlcGxhY2VtZW50UmVjb3JkcyxcbiAgICB9XG4gICAgbGluZXMucHVzaChqc29uU3RyaW5naWZ5KGZvcmtlZFJlcGxhY2VtZW50RW50cnkpKVxuICB9XG5cbiAgLy8gV3JpdGUgdGhlIGZvcmsgc2Vzc2lvbiBmaWxlXG4gIGF3YWl0IHdyaXRlRmlsZShmb3JrU2Vzc2lvblBhdGgsIGxpbmVzLmpvaW4oJ1xcbicpICsgJ1xcbicsIHtcbiAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgIG1vZGU6IDBvNjAwLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc2Vzc2lvbklkOiBmb3JrU2Vzc2lvbklkLFxuICAgIHRpdGxlOiBjdXN0b21UaXRsZSxcbiAgICBmb3JrUGF0aDogZm9ya1Nlc3Npb25QYXRoLFxuICAgIHNlcmlhbGl6ZWRNZXNzYWdlcyxcbiAgICBjb250ZW50UmVwbGFjZW1lbnRSZWNvcmRzLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdW5pcXVlIGZvcmsgbmFtZSBieSBjaGVja2luZyBmb3IgY29sbGlzaW9ucyB3aXRoIGV4aXN0aW5nIHNlc3Npb24gbmFtZXMuXG4gKiBJZiBcImJhc2VOYW1lIChCcmFuY2gpXCIgYWxyZWFkeSBleGlzdHMsIHRyaWVzIFwiYmFzZU5hbWUgKEJyYW5jaCAyKVwiLCBcImJhc2VOYW1lIChCcmFuY2ggMylcIiwgZXRjLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVGb3JrTmFtZShiYXNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgY2FuZGlkYXRlTmFtZSA9IGAke2Jhc2VOYW1lfSAoQnJhbmNoKWBcblxuICAvLyBDaGVjayBpZiB0aGlzIGV4YWN0IG5hbWUgYWxyZWFkeSBleGlzdHNcbiAgY29uc3QgZXhpc3RpbmdXaXRoRXhhY3ROYW1lID0gYXdhaXQgc2VhcmNoU2Vzc2lvbnNCeUN1c3RvbVRpdGxlKFxuICAgIGNhbmRpZGF0ZU5hbWUsXG4gICAgeyBleGFjdDogdHJ1ZSB9LFxuICApXG5cbiAgaWYgKGV4aXN0aW5nV2l0aEV4YWN0TmFtZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY2FuZGlkYXRlTmFtZVxuICB9XG5cbiAgLy8gTmFtZSBjb2xsaXNpb24gLSBmaW5kIGEgdW5pcXVlIG51bWJlcmVkIHN1ZmZpeFxuICAvLyBTZWFyY2ggZm9yIGFsbCBzZXNzaW9ucyB0aGF0IHN0YXJ0IHdpdGggdGhlIGJhc2UgcGF0dGVyblxuICBjb25zdCBleGlzdGluZ0ZvcmtzID0gYXdhaXQgc2VhcmNoU2Vzc2lvbnNCeUN1c3RvbVRpdGxlKGAke2Jhc2VOYW1lfSAoQnJhbmNoYClcblxuICAvLyBFeHRyYWN0IGV4aXN0aW5nIGZvcmsgbnVtYmVycyB0byBmaW5kIHRoZSBuZXh0IGF2YWlsYWJsZVxuICBjb25zdCB1c2VkTnVtYmVycyA9IG5ldyBTZXQ8bnVtYmVyPihbMV0pIC8vIENvbnNpZGVyIFwiIChCcmFuY2gpXCIgYXMgbnVtYmVyIDFcbiAgY29uc3QgZm9ya051bWJlclBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgIGBeJHtlc2NhcGVSZWdFeHAoYmFzZU5hbWUpfSBcXFxcKEJyYW5jaCg/OiAoXFxcXGQrKSk/XFxcXCkkYCxcbiAgKVxuXG4gIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBleGlzdGluZ0ZvcmtzKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBzZXNzaW9uLmN1c3RvbVRpdGxlPy5tYXRjaChmb3JrTnVtYmVyUGF0dGVybilcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgICB1c2VkTnVtYmVycy5hZGQocGFyc2VJbnQobWF0Y2hbMV0sIDEwKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZWROdW1iZXJzLmFkZCgxKSAvLyBcIiAoQnJhbmNoKVwiIHdpdGhvdXQgbnVtYmVyIGlzIHRyZWF0ZWQgYXMgMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIG5leHQgYXZhaWxhYmxlIG51bWJlclxuICBsZXQgbmV4dE51bWJlciA9IDJcbiAgd2hpbGUgKHVzZWROdW1iZXJzLmhhcyhuZXh0TnVtYmVyKSkge1xuICAgIG5leHROdW1iZXIrK1xuICB9XG5cbiAgcmV0dXJuIGAke2Jhc2VOYW1lfSAoQnJhbmNoICR7bmV4dE51bWJlcn0pYFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4gIGFyZ3M6IHN0cmluZyxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIGNvbnN0IGN1c3RvbVRpdGxlID0gYXJncz8udHJpbSgpIHx8IHVuZGVmaW5lZFxuXG4gIGNvbnN0IG9yaWdpbmFsU2Vzc2lvbklkID0gZ2V0U2Vzc2lvbklkKClcblxuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlc3Npb25JZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZm9ya1BhdGgsXG4gICAgICBzZXJpYWxpemVkTWVzc2FnZXMsXG4gICAgICBjb250ZW50UmVwbGFjZW1lbnRSZWNvcmRzLFxuICAgIH0gPSBhd2FpdCBjcmVhdGVGb3JrKGN1c3RvbVRpdGxlKVxuXG4gICAgLy8gQnVpbGQgTG9nT3B0aW9uIGZvciByZXN1bWVcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZmlyc3RQcm9tcHQgPSBkZXJpdmVGaXJzdFByb21wdChcbiAgICAgIHNlcmlhbGl6ZWRNZXNzYWdlcy5maW5kKG0gPT4gbS50eXBlID09PSAndXNlcicpLFxuICAgIClcblxuICAgIC8vIFNhdmUgY3VzdG9tIHRpdGxlIC0gdXNlIHByb3ZpZGVkIHRpdGxlIG9yIGZpcnN0UHJvbXB0IGFzIGRlZmF1bHRcbiAgICAvLyBUaGlzIGVuc3VyZXMgL3N0YXR1cyBhbmQgL3Jlc3VtZSBzaG93IHRoZSBzYW1lIHNlc3Npb24gbmFtZVxuICAgIC8vIEFsd2F5cyBhZGQgXCIgKEJyYW5jaClcIiBzdWZmaXggdG8gbWFrZSBpdCBjbGVhciB0aGlzIGlzIGEgYnJhbmNoZWQgc2Vzc2lvblxuICAgIC8vIEhhbmRsZSBjb2xsaXNpb25zIGJ5IGFkZGluZyBhIG51bWJlciBzdWZmaXggKGUuZy4sIFwiIChCcmFuY2ggMilcIiwgXCIgKEJyYW5jaCAzKVwiKVxuICAgIGNvbnN0IGJhc2VOYW1lID0gdGl0bGUgPz8gZmlyc3RQcm9tcHRcbiAgICBjb25zdCBlZmZlY3RpdmVUaXRsZSA9IGF3YWl0IGdldFVuaXF1ZUZvcmtOYW1lKGJhc2VOYW1lKVxuICAgIGF3YWl0IHNhdmVDdXN0b21UaXRsZShzZXNzaW9uSWQsIGVmZmVjdGl2ZVRpdGxlLCBmb3JrUGF0aClcblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9jb252ZXJzYXRpb25fZm9ya2VkJywge1xuICAgICAgbWVzc2FnZV9jb3VudDogc2VyaWFsaXplZE1lc3NhZ2VzLmxlbmd0aCxcbiAgICAgIGhhc19jdXN0b21fdGl0bGU6ICEhdGl0bGUsXG4gICAgfSlcblxuICAgIGNvbnN0IGZvcmtMb2c6IExvZ09wdGlvbiA9IHtcbiAgICAgIGRhdGU6IG5vdy50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0hLFxuICAgICAgbWVzc2FnZXM6IHNlcmlhbGl6ZWRNZXNzYWdlcyxcbiAgICAgIGZ1bGxQYXRoOiBmb3JrUGF0aCxcbiAgICAgIHZhbHVlOiBub3cuZ2V0VGltZSgpLFxuICAgICAgY3JlYXRlZDogbm93LFxuICAgICAgbW9kaWZpZWQ6IG5vdyxcbiAgICAgIGZpcnN0UHJvbXB0LFxuICAgICAgbWVzc2FnZUNvdW50OiBzZXJpYWxpemVkTWVzc2FnZXMubGVuZ3RoLFxuICAgICAgaXNTaWRlY2hhaW46IGZhbHNlLFxuICAgICAgc2Vzc2lvbklkLFxuICAgICAgY3VzdG9tVGl0bGU6IGVmZmVjdGl2ZVRpdGxlLFxuICAgICAgY29udGVudFJlcGxhY2VtZW50czogY29udGVudFJlcGxhY2VtZW50UmVjb3JkcyxcbiAgICB9XG5cbiAgICAvLyBSZXN1bWUgaW50byB0aGUgZm9ya1xuICAgIGNvbnN0IHRpdGxlSW5mbyA9IHRpdGxlID8gYCBcIiR7dGl0bGV9XCJgIDogJydcbiAgICBjb25zdCByZXN1bWVIaW50ID0gYFxcblRvIHJlc3VtZSB0aGUgb3JpZ2luYWw6IGNsYXVkZSAtciAke29yaWdpbmFsU2Vzc2lvbklkfWBcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGBCcmFuY2hlZCBjb252ZXJzYXRpb24ke3RpdGxlSW5mb30uIFlvdSBhcmUgbm93IGluIHRoZSBicmFuY2guJHtyZXN1bWVIaW50fWBcblxuICAgIGlmIChjb250ZXh0LnJlc3VtZSkge1xuICAgICAgYXdhaXQgY29udGV4dC5yZXN1bWUoc2Vzc2lvbklkLCBmb3JrTG9nLCAnZm9yaycpXG4gICAgICBvbkRvbmUoc3VjY2Vzc01lc3NhZ2UsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2sgaWYgcmVzdW1lIG5vdCBhdmFpbGFibGVcbiAgICAgIG9uRG9uZShcbiAgICAgICAgYEJyYW5jaGVkIGNvbnZlcnNhdGlvbiR7dGl0bGVJbmZvfS4gUmVzdW1lIHdpdGg6IC9yZXN1bWUgJHtzZXNzaW9uSWR9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBvY2N1cnJlZCdcbiAgICBvbkRvbmUoYEZhaWxlZCB0byBicmFuY2ggY29udmVyc2F0aW9uOiAke21lc3NhZ2V9YClcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsa0JBQTZCO0FBQ3RDLFNBQVMsT0FBTyxVQUFVLGlCQUFpQjtBQW9DcEMsU0FBUyxrQkFDZCxrQkFDUTtBQUNSLFFBQU0sVUFBVSxrQkFBa0IsU0FBUztBQUMzQyxNQUFJLENBQUMsUUFBUyxRQUFPO0FBQ3JCLFFBQU0sTUFDSixPQUFPLFlBQVksV0FDZixVQUNBLFFBQVE7QUFBQSxJQUNOLENBQUMsVUFDQyxNQUFNLFNBQVM7QUFBQSxFQUNuQixHQUFHO0FBQ1QsTUFBSSxDQUFDLElBQUssUUFBTztBQUNqQixTQUNFLElBQUksUUFBUSxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHLEdBQUcsS0FBSztBQUVyRDtBQU9BLGVBQWUsV0FBVyxhQU12QjtBQUNELFFBQU0sZ0JBQWdCLFdBQVc7QUFDakMsUUFBTSxvQkFBb0IsYUFBYTtBQUN2QyxRQUFNLGFBQWEsY0FBYyxlQUFlLENBQUM7QUFDakQsUUFBTSxrQkFBa0IsNEJBQTRCLGFBQWE7QUFDakUsUUFBTSx3QkFBd0Isa0JBQWtCO0FBR2hELFFBQU0sTUFBTSxZQUFZLEVBQUUsV0FBVyxNQUFNLE1BQU0sSUFBTSxDQUFDO0FBR3hELE1BQUk7QUFDSixNQUFJO0FBQ0Ysd0JBQW9CLE1BQU0sU0FBUyxxQkFBcUI7QUFBQSxFQUMxRCxRQUFRO0FBQ04sVUFBTSxJQUFJLE1BQU0sMkJBQTJCO0FBQUEsRUFDN0M7QUFFQSxNQUFJLGtCQUFrQixXQUFXLEdBQUc7QUFDbEMsVUFBTSxJQUFJ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
