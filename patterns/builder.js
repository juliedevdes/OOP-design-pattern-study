var HOST = "https://api.thecatapi.com";

var URLS = {
  uploadUrl: "/v1/images/upload",
};

var METHODS = {
  put: "PUT",
  post: "POST",
  get: "GET",
};

class APIRequest {
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

function APIRequestBuilder() {
  this.request = null;

  this.create = function (url) {
    this.request = new APIRequest(url);
  };

  this.build = function (method, headers, body) {
    this.request.setMethod(method);
    this.request.addHeaders(headers);
    this.request.addBody(body);
  };

  this.get = function () {
    return this.request.get();
  };
}

const headers = {
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY",
};

const body = {
  id: "9ccXTANkb",
  url: "https://cdn2.thecatapi.com/images/9ccXTANkb.jpg",
  pending: 0,
  approved: 1,
};

const APIRequest = new APIRequestBuilder()
  .create(URLS.uploadUrl)
  .build(METHODS.post, headers, body)
  .get();

console.log(APIRequest);
