#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/p-map@7.0.4/node_modules/p-map/index.js
async function pMap(iterable, mapper, {
  concurrency = Number.POSITIVE_INFINITY,
  stopOnError = true,
  signal
} = {}) {
  return new Promise((resolve_, reject_) => {
    if (iterable[Symbol.iterator] === void 0 && iterable[Symbol.asyncIterator] === void 0) {
      throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof iterable})`);
    }
    if (typeof mapper !== "function") {
      throw new TypeError("Mapper function is required");
    }
    if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) {
      throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    }
    const result = [];
    const errors = [];
    const skippedIndexesMap = /* @__PURE__ */ new Map();
    let isRejected = false;
    let isResolved = false;
    let isIterableDone = false;
    let resolvingCount = 0;
    let currentIndex = 0;
    const iterator = iterable[Symbol.iterator] === void 0 ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
    const signalListener = () => {
      reject(signal.reason);
    };
    const cleanup = () => {
      signal?.removeEventListener("abort", signalListener);
    };
    const resolve = (value) => {
      resolve_(value);
      cleanup();
    };
    const reject = (reason) => {
      isRejected = true;
      isResolved = true;
      reject_(reason);
      cleanup();
    };
    if (signal) {
      if (signal.aborted) {
        reject(signal.reason);
      }
      signal.addEventListener("abort", signalListener, { once: true });
    }
    const next = async () => {
      if (isResolved) {
        return;
      }
      const nextItem = await iterator.next();
      const index = currentIndex;
      currentIndex++;
      if (nextItem.done) {
        isIterableDone = true;
        if (resolvingCount === 0 && !isResolved) {
          if (!stopOnError && errors.length > 0) {
            reject(new AggregateError(errors));
            return;
          }
          isResolved = true;
          if (skippedIndexesMap.size === 0) {
            resolve(result);
            return;
          }
          const pureResult = [];
          for (const [index2, value] of result.entries()) {
            if (skippedIndexesMap.get(index2) === pMapSkip) {
              continue;
            }
            pureResult.push(value);
          }
          resolve(pureResult);
        }
        return;
      }
      resolvingCount++;
      (async () => {
        try {
          const element = await nextItem.value;
          if (isResolved) {
            return;
          }
          const value = await mapper(element, index);
          if (value === pMapSkip) {
            skippedIndexesMap.set(index, value);
          }
          result[index] = value;
          resolvingCount--;
          await next();
        } catch (error) {
          if (stopOnError) {
            reject(error);
          } else {
            errors.push(error);
            resolvingCount--;
            try {
              await next();
            } catch (error2) {
              reject(error2);
            }
          }
        }
      })();
    };
    (async () => {
      for (let index = 0; index < concurrency; index++) {
        try {
          await next();
        } catch (error) {
          reject(error);
          break;
        }
        if (isIterableDone || isRejected) {
          break;
        }
      }
    })();
  });
}
function pMapIterable(iterable, mapper, {
  concurrency = Number.POSITIVE_INFINITY,
  backpressure = concurrency
} = {}) {
  if (iterable[Symbol.iterator] === void 0 && iterable[Symbol.asyncIterator] === void 0) {
    throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof iterable})`);
  }
  if (typeof mapper !== "function") {
    throw new TypeError("Mapper function is required");
  }
  if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) {
    throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
  }
  if (!(Number.isSafeInteger(backpressure) && backpressure >= concurrency || backpressure === Number.POSITIVE_INFINITY)) {
    throw new TypeError(`Expected \`backpressure\` to be an integer from \`concurrency\` (${concurrency}) and up or \`Infinity\`, got \`${backpressure}\` (${typeof backpressure})`);
  }
  return {
    async *[Symbol.asyncIterator]() {
      const iterator = iterable[Symbol.asyncIterator] === void 0 ? iterable[Symbol.iterator]() : iterable[Symbol.asyncIterator]();
      const promises = [];
      let pendingPromisesCount = 0;
      let isDone = false;
      let index = 0;
      function trySpawn() {
        if (isDone || !(pendingPromisesCount < concurrency && promises.length < backpressure)) {
          return;
        }
        pendingPromisesCount++;
        const promise = (async () => {
          const { done, value } = await iterator.next();
          if (done) {
            pendingPromisesCount--;
            return { done: true };
          }
          trySpawn();
          try {
            const returnValue = await mapper(await value, index++);
            pendingPromisesCount--;
            if (returnValue === pMapSkip) {
              const index2 = promises.indexOf(promise);
              if (index2 > 0) {
                promises.splice(index2, 1);
              }
            }
            trySpawn();
            return { done: false, value: returnValue };
          } catch (error) {
            pendingPromisesCount--;
            isDone = true;
            return { error };
          }
        })();
        promises.push(promise);
      }
      trySpawn();
      while (promises.length > 0) {
        const { error, done, value } = await promises[0];
        promises.shift();
        if (error) {
          throw error;
        }
        if (done) {
          return;
        }
        trySpawn();
        if (value === pMapSkip) {
          continue;
        }
        yield value;
      }
    }
  };
}
var pMapSkip;
var init_p_map = __esm({
  "node_modules/.pnpm/p-map@7.0.4/node_modules/p-map/index.js"() {
    pMapSkip = /* @__PURE__ */ Symbol("skip");
  }
});

export {
  pMap,
  pMapIterable,
  pMapSkip,
  init_p_map
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3AtbWFwQDcuMC40L25vZGVfbW9kdWxlcy9wLW1hcC9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcE1hcChcblx0aXRlcmFibGUsXG5cdG1hcHBlcixcblx0e1xuXHRcdGNvbmN1cnJlbmN5ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdHN0b3BPbkVycm9yID0gdHJ1ZSxcblx0XHRzaWduYWwsXG5cdH0gPSB7fSxcbikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVfLCByZWplY3RfKSA9PiB7XG5cdFx0aWYgKGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0gPT09IHVuZGVmaW5lZCAmJiBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgZWl0aGVyIGFuIFxcYEl0ZXJhYmxlXFxgIG9yIFxcYEFzeW5jSXRlcmFibGVcXGAsIGdvdCAoJHt0eXBlb2YgaXRlcmFibGV9KWApO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgbWFwcGVyICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXBwZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHR9XG5cblx0XHRpZiAoISgoTnVtYmVyLmlzU2FmZUludGVnZXIoY29uY3VycmVuY3kpICYmIGNvbmN1cnJlbmN5ID49IDEpIHx8IGNvbmN1cnJlbmN5ID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBjb25jdXJyZW5jeVxcYCB0byBiZSBhbiBpbnRlZ2VyIGZyb20gMSBhbmQgdXAgb3IgXFxgSW5maW5pdHlcXGAsIGdvdCBcXGAke2NvbmN1cnJlbmN5fVxcYCAoJHt0eXBlb2YgY29uY3VycmVuY3l9KWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdGNvbnN0IHNraXBwZWRJbmRleGVzTWFwID0gbmV3IE1hcCgpO1xuXHRcdGxldCBpc1JlamVjdGVkID0gZmFsc2U7XG5cdFx0bGV0IGlzUmVzb2x2ZWQgPSBmYWxzZTtcblx0XHRsZXQgaXNJdGVyYWJsZURvbmUgPSBmYWxzZTtcblx0XHRsZXQgcmVzb2x2aW5nQ291bnQgPSAwO1xuXHRcdGxldCBjdXJyZW50SW5kZXggPSAwO1xuXHRcdGNvbnN0IGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSA9PT0gdW5kZWZpbmVkID8gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgOiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG5cblx0XHRjb25zdCBzaWduYWxMaXN0ZW5lciA9ICgpID0+IHtcblx0XHRcdHJlamVjdChzaWduYWwucmVhc29uKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2xlYW51cCA9ICgpID0+IHtcblx0XHRcdHNpZ25hbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBzaWduYWxMaXN0ZW5lcik7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc29sdmUgPSB2YWx1ZSA9PiB7XG5cdFx0XHRyZXNvbHZlXyh2YWx1ZSk7XG5cdFx0XHRjbGVhbnVwKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlamVjdCA9IHJlYXNvbiA9PiB7XG5cdFx0XHRpc1JlamVjdGVkID0gdHJ1ZTtcblx0XHRcdGlzUmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0cmVqZWN0XyhyZWFzb24pO1xuXHRcdFx0Y2xlYW51cCgpO1xuXHRcdH07XG5cblx0XHRpZiAoc2lnbmFsKSB7XG5cdFx0XHRpZiAoc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdFx0cmVqZWN0KHNpZ25hbC5yZWFzb24pO1xuXHRcdFx0fVxuXG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBzaWduYWxMaXN0ZW5lciwge29uY2U6IHRydWV9KTtcblx0XHR9XG5cblx0XHRjb25zdCBuZXh0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKGlzUmVzb2x2ZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuZXh0SXRlbSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcblxuXHRcdFx0Y29uc3QgaW5kZXggPSBjdXJyZW50SW5kZXg7XG5cdFx0XHRjdXJyZW50SW5kZXgrKztcblxuXHRcdFx0Ly8gTm90ZTogYGl0ZXJhdG9yLm5leHQoKWAgY2FuIGJlIGNhbGxlZCBtYW55IHRpbWVzIGluIHBhcmFsbGVsLlxuXHRcdFx0Ly8gVGhpcyBjYW4gY2F1c2UgbXVsdGlwbGUgY2FsbHMgdG8gdGhpcyBgbmV4dCgpYCBmdW5jdGlvbiB0b1xuXHRcdFx0Ly8gcmVjZWl2ZSBhIGBuZXh0SXRlbWAgd2l0aCBgZG9uZSA9PT0gdHJ1ZWAuXG5cdFx0XHQvLyBUaGUgc2h1dGRvd24gbG9naWMgdGhhdCByZWplY3RzL3Jlc29sdmVzIG11c3QgYmUgcHJvdGVjdGVkXG5cdFx0XHQvLyBzbyBpdCBydW5zIG9ubHkgb25lIHRpbWUgYXMgdGhlIGBza2lwcGVkSW5kZXhgIGxvZ2ljIGlzXG5cdFx0XHQvLyBub24taWRlbXBvdGVudC5cblx0XHRcdGlmIChuZXh0SXRlbS5kb25lKSB7XG5cdFx0XHRcdGlzSXRlcmFibGVEb25lID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAocmVzb2x2aW5nQ291bnQgPT09IDAgJiYgIWlzUmVzb2x2ZWQpIHtcblx0XHRcdFx0XHRpZiAoIXN0b3BPbkVycm9yICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHVuaWNvcm4vZXJyb3ItbWVzc2FnZVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlzUmVzb2x2ZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYgKHNraXBwZWRJbmRleGVzTWFwLnNpemUgPT09IDApIHtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBwdXJlUmVzdWx0ID0gW107XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0IG11bHRpcGxlIGBwTWFwU2tpcGAncy5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIHJlc3VsdC5lbnRyaWVzKCkpIHtcblx0XHRcdFx0XHRcdGlmIChza2lwcGVkSW5kZXhlc01hcC5nZXQoaW5kZXgpID09PSBwTWFwU2tpcCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHVyZVJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXNvbHZlKHB1cmVSZXN1bHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNvbHZpbmdDb3VudCsrO1xuXG5cdFx0XHQvLyBJbnRlbnRpb25hbGx5IGRldGFjaGVkXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhd2FpdCBuZXh0SXRlbS52YWx1ZTtcblxuXHRcdFx0XHRcdGlmIChpc1Jlc29sdmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhd2FpdCBtYXBwZXIoZWxlbWVudCwgaW5kZXgpO1xuXG5cdFx0XHRcdFx0Ly8gVXNlIE1hcCB0byBzdGFnZSB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQuXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBwTWFwU2tpcCkge1xuXHRcdFx0XHRcdFx0c2tpcHBlZEluZGV4ZXNNYXAuc2V0KGluZGV4LCB2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzdWx0W2luZGV4XSA9IHZhbHVlO1xuXG5cdFx0XHRcdFx0cmVzb2x2aW5nQ291bnQtLTtcblx0XHRcdFx0XHRhd2FpdCBuZXh0KCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0aWYgKHN0b3BPbkVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlcnJvcnMucHVzaChlcnJvcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZpbmdDb3VudC0tO1xuXG5cdFx0XHRcdFx0XHQvLyBJbiB0aGF0IGNhc2Ugd2UgY2FuJ3QgcmVhbGx5IGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgYHN0b3BPbkVycm9yYCBzdGF0ZVxuXHRcdFx0XHRcdFx0Ly8gc2luY2UgYW4gaXRlcmFibGUgaXMgbGlrZWx5IHRvIGNvbnRpbnVlIHRocm93aW5nIGFmdGVyIGl0IHRocm93cyBvbmNlLlxuXHRcdFx0XHRcdFx0Ly8gSWYgd2UgY29udGludWUgY2FsbGluZyBgbmV4dCgpYCBpbmRlZmluaXRlbHkgd2Ugd2lsbCBsaWtlbHkgZW5kIHVwXG5cdFx0XHRcdFx0XHQvLyBpbiBhbiBpbmZpbml0ZSBsb29wIG9mIGZhaWxlZCBpdGVyYXRpb24uXG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBuZXh0KCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblx0XHR9O1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSBjb25jdXJyZW50IHJ1bm5lcnMgaW4gYSBkZXRhY2hlZCAobm9uLWF3YWl0ZWQpXG5cdFx0Ly8gcHJvbWlzZS4gV2UgbmVlZCB0aGlzIHNvIHdlIGNhbiBhd2FpdCB0aGUgYG5leHQoKWAgY2FsbHNcblx0XHQvLyB0byBzdG9wIGNyZWF0aW5nIHJ1bm5lcnMgYmVmb3JlIGhpdHRpbmcgdGhlIGNvbmN1cnJlbmN5IGxpbWl0XG5cdFx0Ly8gaWYgdGhlIGl0ZXJhYmxlIGhhcyBhbHJlYWR5IGJlZW4gbWFya2VkIGFzIGRvbmUuXG5cdFx0Ly8gTk9URTogV2UgKm11c3QqIGRvIHRoaXMgZm9yIGFzeW5jIGl0ZXJhdG9ycyBvdGhlcndpc2Ugd2UnbGwgc3BpbiB1cFxuXHRcdC8vIGluZmluaXRlIGBuZXh0KClgIGNhbGxzIGJ5IGRlZmF1bHQgYW5kIG5ldmVyIHN0YXJ0IHRoZSBldmVudCBsb29wLlxuXHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uY3VycmVuY3k7IGluZGV4KyspIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdFx0XHRcdGF3YWl0IG5leHQoKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzSXRlcmFibGVEb25lIHx8IGlzUmVqZWN0ZWQpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcE1hcEl0ZXJhYmxlKFxuXHRpdGVyYWJsZSxcblx0bWFwcGVyLFxuXHR7XG5cdFx0Y29uY3VycmVuY3kgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG5cdFx0YmFja3ByZXNzdXJlID0gY29uY3VycmVuY3ksXG5cdH0gPSB7fSxcbikge1xuXHRpZiAoaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSA9PT0gdW5kZWZpbmVkICYmIGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgZWl0aGVyIGFuIFxcYEl0ZXJhYmxlXFxgIG9yIFxcYEFzeW5jSXRlcmFibGVcXGAsIGdvdCAoJHt0eXBlb2YgaXRlcmFibGV9KWApO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtYXBwZXIgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXBwZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0fVxuXG5cdGlmICghKChOdW1iZXIuaXNTYWZlSW50ZWdlcihjb25jdXJyZW5jeSkgJiYgY29uY3VycmVuY3kgPj0gMSkgfHwgY29uY3VycmVuY3kgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBjb25jdXJyZW5jeVxcYCB0byBiZSBhbiBpbnRlZ2VyIGZyb20gMSBhbmQgdXAgb3IgXFxgSW5maW5pdHlcXGAsIGdvdCBcXGAke2NvbmN1cnJlbmN5fVxcYCAoJHt0eXBlb2YgY29uY3VycmVuY3l9KWApO1xuXHR9XG5cblx0aWYgKCEoKE51bWJlci5pc1NhZmVJbnRlZ2VyKGJhY2twcmVzc3VyZSkgJiYgYmFja3ByZXNzdXJlID49IGNvbmN1cnJlbmN5KSB8fCBiYWNrcHJlc3N1cmUgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBiYWNrcHJlc3N1cmVcXGAgdG8gYmUgYW4gaW50ZWdlciBmcm9tIFxcYGNvbmN1cnJlbmN5XFxgICgke2NvbmN1cnJlbmN5fSkgYW5kIHVwIG9yIFxcYEluZmluaXR5XFxgLCBnb3QgXFxgJHtiYWNrcHJlc3N1cmV9XFxgICgke3R5cGVvZiBiYWNrcHJlc3N1cmV9KWApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRhc3luYyAqIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG5cdFx0XHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gdW5kZWZpbmVkID8gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpIDogaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG5cblx0XHRcdGNvbnN0IHByb21pc2VzID0gW107XG5cdFx0XHRsZXQgcGVuZGluZ1Byb21pc2VzQ291bnQgPSAwO1xuXHRcdFx0bGV0IGlzRG9uZSA9IGZhbHNlO1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblxuXHRcdFx0ZnVuY3Rpb24gdHJ5U3Bhd24oKSB7XG5cdFx0XHRcdGlmIChpc0RvbmUgfHwgIShwZW5kaW5nUHJvbWlzZXNDb3VudCA8IGNvbmN1cnJlbmN5ICYmIHByb21pc2VzLmxlbmd0aCA8IGJhY2twcmVzc3VyZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwZW5kaW5nUHJvbWlzZXNDb3VudCsrO1xuXG5cdFx0XHRcdGNvbnN0IHByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkb25lLCB2YWx1ZX0gPSBhd2FpdCBpdGVyYXRvci5uZXh0KCk7XG5cblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cGVuZGluZ1Byb21pc2VzQ291bnQtLTtcblx0XHRcdFx0XHRcdHJldHVybiB7ZG9uZTogdHJ1ZX07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3Bhd24gaWYgc3RpbGwgYmVsb3cgY29uY3VycmVuY3kgYW5kIGJhY2twcmVzc3VyZSBsaW1pdFxuXHRcdFx0XHRcdHRyeVNwYXduKCk7XG5cblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmV0dXJuVmFsdWUgPSBhd2FpdCBtYXBwZXIoYXdhaXQgdmFsdWUsIGluZGV4KyspO1xuXG5cdFx0XHRcdFx0XHRwZW5kaW5nUHJvbWlzZXNDb3VudC0tO1xuXG5cdFx0XHRcdFx0XHRpZiAocmV0dXJuVmFsdWUgPT09IHBNYXBTa2lwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gcHJvbWlzZXMuaW5kZXhPZihwcm9taXNlKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvbWlzZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBTcGF3biBpZiBzdGlsbCBiZWxvdyBiYWNrcHJlc3N1cmUgbGltaXQgYW5kIGp1c3QgZHJvcHBlZCBiZWxvdyBjb25jdXJyZW5jeSBsaW1pdFxuXHRcdFx0XHRcdFx0dHJ5U3Bhd24oKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHtkb25lOiBmYWxzZSwgdmFsdWU6IHJldHVyblZhbHVlfTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cGVuZGluZ1Byb21pc2VzQ291bnQtLTtcblx0XHRcdFx0XHRcdGlzRG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge2Vycm9yfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKCk7XG5cblx0XHRcdFx0cHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5U3Bhd24oKTtcblxuXHRcdFx0d2hpbGUgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3Qge2Vycm9yLCBkb25lLCB2YWx1ZX0gPSBhd2FpdCBwcm9taXNlc1swXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cblx0XHRcdFx0cHJvbWlzZXMuc2hpZnQoKTtcblxuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkb25lKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3Bhd24gaWYganVzdCBkcm9wcGVkIGJlbG93IGJhY2twcmVzc3VyZSBsaW1pdCBhbmQgYmVsb3cgdGhlIGNvbmN1cnJlbmN5IGxpbWl0XG5cdFx0XHRcdHRyeVNwYXduKCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBwTWFwU2tpcCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0eWllbGQgdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IHBNYXBTa2lwID0gU3ltYm9sKCdza2lwJyk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLGVBQU8sS0FDTixVQUNBLFFBQ0E7QUFBQSxFQUNDLGNBQWMsT0FBTztBQUFBLEVBQ3JCLGNBQWM7QUFBQSxFQUNkO0FBQ0QsSUFBSSxDQUFDLEdBQ0o7QUFDRCxTQUFPLElBQUksUUFBUSxDQUFDLFVBQVUsWUFBWTtBQUN6QyxRQUFJLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBYSxTQUFTLE9BQU8sYUFBYSxNQUFNLFFBQVc7QUFDNUYsWUFBTSxJQUFJLFVBQVUsOEVBQThFLE9BQU8sUUFBUSxHQUFHO0FBQUEsSUFDckg7QUFFQSxRQUFJLE9BQU8sV0FBVyxZQUFZO0FBQ2pDLFlBQU0sSUFBSSxVQUFVLDZCQUE2QjtBQUFBLElBQ2xEO0FBRUEsUUFBSSxFQUFHLE9BQU8sY0FBYyxXQUFXLEtBQUssZUFBZSxLQUFNLGdCQUFnQixPQUFPLG9CQUFvQjtBQUMzRyxZQUFNLElBQUksVUFBVSxrRkFBa0YsV0FBVyxPQUFPLE9BQU8sV0FBVyxHQUFHO0FBQUEsSUFDOUk7QUFFQSxVQUFNLFNBQVMsQ0FBQztBQUNoQixVQUFNLFNBQVMsQ0FBQztBQUNoQixVQUFNLG9CQUFvQixvQkFBSSxJQUFJO0FBQ2xDLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSxl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
