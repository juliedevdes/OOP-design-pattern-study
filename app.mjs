

/* ====== Builder ======*/

import {APIRequestDirector} from "./creational/builder/APIRequestDirector.mjs";

const APIDirector = new APIRequestDirector();
const APIRequest = APIDirector.createAddImageRequest();

console.log(APIRequest);

/* ====== Singleton ======*/
