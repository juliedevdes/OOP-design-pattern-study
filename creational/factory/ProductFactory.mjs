import { Earings } from "./Earings.mjs";
import { Clothes } from "./Clothes.mjs";

export class ProductFactory {
  createClothesProduct() {
    return new Clothes();
  }

  createEaringsProduct() {
    return new Earings();
  }
}
