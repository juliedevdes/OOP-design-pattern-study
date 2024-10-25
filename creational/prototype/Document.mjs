export class Document {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }

  clone() {
    return new Document(this.content, this.author);
  }

  setContent(content) {
    this.content = content;
  }
}
