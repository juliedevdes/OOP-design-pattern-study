export class ProductClothes {
  constructor() {
    this.type = "Clothes";
    this.size = "XL";
    this.color = "blue";
    this.category = "pants;";
  }

  getType() {
    return this.type;
  }

  getProduct() {
    return this;
  }
}
