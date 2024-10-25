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

import { Document } from "./creational/prototype/Document.mjs";

const document = new Document("Content for text document", 'Yuliius');
console.log(document)

const clonedDoc = document.clone();
clonedDoc.setContent("Content for cloned text document");
console.log(clonedDoc);

/* ====== 🏭 FACTORY 🏭 ======*/

// import { ProductFactory } from "./creational/factory/ProductFactory.mjs";

// const productFactory = new ProductFactory();

// const product1 = productFactory.createProduct("Clothes");
// console.log(product1.getProduct());

// const product2 = productFactory.createProduct("Earings");
// console.log(product2.getProduct());

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
