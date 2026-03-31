import https from "https";

export class HttpsProxyAgent extends https.Agent {
  constructor(proxy, options = {}) {
    super(options);
    this.proxy = proxy;
  }
}

export default HttpsProxyAgent;
