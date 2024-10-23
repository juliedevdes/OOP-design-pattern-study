import { AbstractProduct } from "./AbstractProduct.mjs";

export class Earings extends AbstractProduct {
  constructor(name, price, extraParams) {
    super(name, price);
    this.material = extraParams.material;
  }

  getMaterial() {
    return this.material;
  }
}
