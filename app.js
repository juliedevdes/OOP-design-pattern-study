/* ====== Builder ======*/

import {APIConfigs} from ('./config');
const APIRequestBuilder = require("./creational/builder/APIRequestBuilder");

const APIRequest = new APIRequestBuilder()
  .create(APIConfigs.URLS.uploadUrl)
  .build(APIConfigs.METHODS.post, APIConfigs.headers, APIConfigs.body)
  .get();

console.log(APIRequest);
