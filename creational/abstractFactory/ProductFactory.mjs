import { ClothingFactory } from "./ClothingFactory.mjs";
import { EaringsFactory } from "./EaringsFactory.mjs";

export class ProductFactory {
  constructor() {
    this.types = ["Clothes", "Earings"];
  }

  getProductFactory(type) {
    switch (type) {
      case "Clothes":
        return new ClothingFactory();
      case "Earings":
        return new EaringsFactory();
      default:
        throw new Error("Unknown product factory type");
    }
  }

  getAvailableFactories() {
    return this.types;
  }
}
