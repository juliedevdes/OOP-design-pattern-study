import { Document } from "./DocumentPrototype.mjs";

export class TableDocument extends Document {
  constructor() {
    super();
    this.type = "Tables";
  }
}
