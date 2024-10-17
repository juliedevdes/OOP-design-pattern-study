import { GlobalColorCatalogOperator } from "./creational/singleton/GlobalColorCatalogOperator.mjs";

let v1 = new GlobalColorCatalogOperator();
let v2 = new GlobalColorCatalogOperator();

console.log("Are they identical? " + (v1 === v2));

console.log(v1.getColorByName("blue"));

v1.setColorValue("violet", 56982);
console.log(v1.getColorByName("violet"));
