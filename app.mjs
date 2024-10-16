import { globalColorCatalogOperator } from "./creational/singleton/globalColorCatalogOperator.mjs";

let v1 = new globalColorCatalogOperator();

//let v2 = new globalColorCatalogOperator();
// console.log("Are they identical? " + (v1 === v2));

console.log(v1.getColorByName("blue"));

v1.setColorValue("violet", 56982);
console.log(v1.getColorByName("violet"));
