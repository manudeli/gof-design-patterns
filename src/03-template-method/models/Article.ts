export default class Article {
  constructor(private title: string, private content: string[], private footer: string) {}

  public getTitle() {
    return this.title
  }

  public getContent() {
    return this.content
  }

  public getFooter() {
    return this.footer
  }
}
