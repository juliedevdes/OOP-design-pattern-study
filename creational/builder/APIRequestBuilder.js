const APIRequest = require("./APIRequest");

export default class APIRequestBuilder {
  constructor() {
    this.request = null;
  }

  create(url) {
    this.request = new APIRequest(url);
  }

  build(method, headers, body) {
    this.request.setMethod(method);
    this.request.addHeaders(headers);
    this.request.addBody(body);
  }

  get() {
    return this.request.get();
  }
}
