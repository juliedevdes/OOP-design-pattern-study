import { Document } from "./DocumentPrototype.mjs";

export class TextDocument extends Document {
  constructor() {
    super();
    this.type = "Text";
  }
}
