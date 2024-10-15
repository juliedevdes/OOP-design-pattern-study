export class APIRequest {
  constructor(url) {
    this.request = {
      url: url,
    };
  }

  setMethod(method) {
    this.request.method = method;
  }

  addHeaders(headers) {
    this.request.headers = headers;
  }

  addBody(body) {
    this.request.body = body;
  }

  get() {
    return this.request;
  }
}
