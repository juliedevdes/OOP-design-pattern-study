import { AbstractProduct } from "./AbstractProduct.mjs";
export class AbstractFactory {
  createProduct(name, price) {
    return (product = new AbstractProduct(name, price)); // Do we need this? Not sure
  }
}
