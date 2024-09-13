export default class APIRequest {
  constructor(url) {
    this.request = {
      url: host + url,
    };
  }

  setMethod(method) {
    this.request.method = method;
  }

  addHeaders(headers) {
    this.request.headers = headers;
  }

  addBody(body) {
    this.body = body;
  }

  get() {
    return this.request;
  }
}
