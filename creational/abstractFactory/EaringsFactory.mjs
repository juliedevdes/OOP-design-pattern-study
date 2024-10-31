import { Earings } from "./Earings.mjs";

export class EaringsFactory {
  createProduct(name, price, extraParams = {}) {
    return new Earings(name, price, extraParams);
  }
}
