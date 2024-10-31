import { AbstractProduct } from "./AbstractProduct.mjs";

export class Clothing extends AbstractProduct {
  constructor(name, price, extraParams) {
    super(name, price);
    this.size = extraParams.size;
  }

  getSize() {
    return this.size;
  }
}
