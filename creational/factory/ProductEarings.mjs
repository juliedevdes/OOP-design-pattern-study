export class ProductEarings {
  constructor() {
    this.type = "Earings";
    this.material = "silver";
  }

  getType() {
    return this.type;
  }

  getProduct() {
    return this;
  }
}
