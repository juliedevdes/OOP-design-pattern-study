let globalColorCatalog = {
  ligthBlue: 565,
  blue: 65456,
  red: 87,
  burgundy: 654,
};

export class globalColorCatalogOperator {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      throw new Error("New instance cannot be created!!"); // or return instance
    }

    this.constructor.instance = this;
  }

  getColorByName(colorName) {
    return globalColorCatalog[colorName];
  }

  setColorValue(colorName, colorValue) {
    globalColorCatalog[colorName] = colorValue;
  }
}
