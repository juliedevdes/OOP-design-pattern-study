export class Document {
  clone() {
    return Object.create(this);
  }

  init(content, author) {
    this.content = content;
    this.author = author;
  }

  getContent() {
    return this.content;
  }

  getAuthor() {
    return this.author;
  }
}
