import { AbstractFactory } from "./AbstractFactory.mjs";
import { Earings } from "./Earings.mjs";

export class EaringsFactory extends AbstractFactory {
  createProduct(name, price, extraParams) {
    return new Earings(name, price, extraParams);
  }
}
