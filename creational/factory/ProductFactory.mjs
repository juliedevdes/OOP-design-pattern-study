import { ProductEarings } from "./ProductEarings.mjs";
import { ProductClothes } from "./ProductClothes.mjs";

export class ProductFactory {
  createProduct(type) {
    let product;
    switch (type) {
      case "Clothes":
        product = new ProductClothes();
        break;
      case "Earings":
        product = new ProductEarings();
        break;
      default:
        throw new Error("Unknown product type");
    }
    return product;
  }
}
