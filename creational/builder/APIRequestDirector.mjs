import { APIRequestBuilder } from "../builder/APIRequestBuilder.mjs";
import { APIConfigs } from "../../config.mjs";

export class APIRequestDirector {
  constructor() {
    this.request = null;
  }

  createAddImageRequest() {
    const builder = new APIRequestBuilder();

    builder.create(APIConfigs.URLS.uploadUrl);
    builder.buildHeaders({
      "Client-id": "xdwr-587845",
    });
    builder.buildMethod(APIConfigs.METHODS.post);
    builder.buildBody({
      id: "66565665",
      url: "https://cdn2.thecatapi.com/images/9ccXTANkb.jpg",
    });

    return builder.get();
  }

  // + could be extended many other options - getAllImages, getImageById
}
