/* ====== Builder ======*/

// import { APIRequestDirector } from "./creational/builder/APIRequestDirector.mjs";

// const apiDirector = new APIRequestDirector();
// const apiRequest = apiDirector.createAddImageRequest();

// console.log(apiRequest);

/* ====== Singleton ======*/

import { GlobalColorCatalogOperator } from "./creational/singleton/GlobalColorCatalogOperator.mjs";

let v1 = new GlobalColorCatalogOperator();
let v2 = new GlobalColorCatalogOperator();

console.log("Are they identical? " + (v1 === v2)); // true

console.log(v1.getColorByName("blue"));

v1.setColorValue("violet", 56982);
console.log(v1.getColorByName("violet"));
