export async function startCapture() {
  throw new Error(
    "audio-capture-napi is unavailable in the leaked-src compatibility runtime.",
  );
}

export default {
  startCapture,
};
