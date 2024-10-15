import { APIRequest } from "../builder/APIRequest.mjs";
import { APIConfigs } from "../../config.mjs";

const defaultHeaders = APIConfigs.headers;
const defaultBody = APIConfigs.body;
const host = APIConfigs.HOST;

export class APIRequestBuilder {
  constructor() {
    this.request = null;
  }

  create(url) {
    this.request = new APIRequest(host + url);
  }

  buildHeaders(additionalHeaders = {}) {
    const headers = Object.assign(additionalHeaders, defaultHeaders);
    this.request.addHeaders(headers);
  }

  buildMethod(method) {
    this.request.setMethod(method);
  }

  buildBody(additionalBody = {}) {
    const body = Object.assign(additionalBody, defaultBody);
    this.request.addBody(body);
  }

  get() {
    return this.request.get();
  }
}
