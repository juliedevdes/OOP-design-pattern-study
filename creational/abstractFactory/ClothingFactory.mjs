import { AbstractFactory } from "./AbstractFactory.mjs";
import { Clothing } from "./Clothing.mjs";

export class ClothingFactory extends AbstractFactory {
  createProduct(name, price, extraParams) {
    return new Clothing(name, price, extraParams);
  }
}
