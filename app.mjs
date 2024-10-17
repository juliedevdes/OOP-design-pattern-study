

/* ====== Builder ======*/

import {APIRequestDirector} from "./creational/builder/APIRequestDirector.mjs";

const apiDirector = new APIRequestDirector();
const apiRequest = apiDirector.createAddImageRequest();

console.log(apiRequest);

/* ====== Singleton ======*/
