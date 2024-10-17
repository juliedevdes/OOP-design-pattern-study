export class GlobalColorCatalogOperator {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
    this.globalColorCatalog = {
      ligthBlue: 565,
      blue: 65456,
      red: 87,
      burgundy: 654,
    };
  }

  getColorByName(colorName) {
    return this.globalColorCatalog[colorName];
  }

  setColorValue(colorName, colorValue) {
    this.globalColorCatalog[colorName] = colorValue;
  }
}
