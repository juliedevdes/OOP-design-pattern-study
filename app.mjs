/* ====== 🏫 BUILDER 🏫 ========*/

// import { APIRequestDirector } from "./creational/builder/APIRequestDirector.mjs";

// const apiDirector = new APIRequestDirector();
// const apiRequest = apiDirector.createAddImageRequest();

// console.log(apiRequest);

/* ====== 🎒 SINGLETON 🎒 ======*/

// import { GlobalColorCatalogOperator } from "./creational/singleton/GlobalColorCatalogOperator.mjs";

// let v1 = new GlobalColorCatalogOperator();
// let v2 = new GlobalColorCatalogOperator();

// console.log("Are they identical? " + (v1 === v2)); // true

// console.log(v1.getColorByName("blue"));

// v1.setColorValue("violet", 56982);
// console.log(v1.getColorByName("violet"));

/* ====== 📘 PROTOTYPE 📘 ======*/

// import { TextDocument } from "./creational/prototype/TextDocument.mjs";
// import { TableDocument } from "./creational/prototype/TableDocument.mjs";

// const textDocPrototype = new TextDocument();
// textDocPrototype.init("Text Document content.", "Yuliia");
// console.log(
//   textDocPrototype.getContent() + "by " + textDocPrototype.getAuthor()
// ); // Output: Text Document content.by Yuliia

// const clonedTextDoc = textDocPrototype.clone();
// clonedTextDoc.init("This is a cloned text document.", "Oleg");

// console.log(clonedTextDoc.getContent() + "by " + clonedTextDoc.getAuthor()); // Output: This is a cloned text document.by Oleg
// console.log(clonedTextDoc.type); // Output: text

// const tableDocPrototype = new TableDocument();
// tableDocPrototype.init("Table Document content.", "Yuliia");
// console.log(tableDocPrototype); // Output: tables

/* ====== 🏭 FACTORY 🏭 ======*/

import { ProductFactory } from "./creational/factory/ProductFactory.mjs";

const productFactory = new ProductFactory();

const product1 = productFactory.createProduct("Clothes");
console.log(product1.getProduct());

const product2 = productFactory.createProduct("Earings");
console.log(product2.getProduct());

/* ====== 🏫 ABSTRACT FACTORY 🏫 ======*/

// function createProduct(factory, name, price, extraParams = {}) {
//   return factory.createProduct(name, price, extraParams);
// }

// import { ClothingFactory } from "./creational/abstractFactory/ClothingFactory.mjs";
// import { EaringsFactory } from "./creational/abstractFactory/EaringsFactory.mjs";

// const clothingFactory = new ClothingFactory();
// const earingsFactory = new EaringsFactory();

// const tshirt = createProduct(clothingFactory, "T-Shirt", 20, { size: "XL" });
// const earings = createProduct(earingsFactory, "Hoop Earings", 10, {
//   material: "silver",
// });

// console.log(tshirt);
// console.log(earings);
