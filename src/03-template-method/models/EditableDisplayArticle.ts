import Article from './Article'
import DisplayArticleTemplate from './DisplayArticleTemplate'

export default class EditableDisplayArticle extends DisplayArticleTemplate {
  constructor(article: Article) {
    super(article)
  }

  protected titleHtml(): string {
    return `<div>
      <span>제목</span>
      <input value="${this.article.getTitle()}" />
    </div>`
  }
  protected contentHtml(): string {
    const items = this.article.getContent().map((item) => `${item}\n`)
    return `<span>내용</span><br /><textarea>${items.join('')}</textarea>`
  }
  protected footerHtml(): string {
    return `<div><span>글쓴이</span><input value="${this.article.getFooter()}" /></div>`
  }
}
