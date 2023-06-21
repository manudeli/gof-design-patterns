import Display from './Display'
import Draft from './Draft'

export default class SimpleDisplay implements Display {
  title(draft: Draft) {
    console.log(draft.getTitle())
  }
  author(draft: Draft): void {
    console.log(draft.getAuthor())
  }
  content(draft: Draft): void {
    const content = draft.getContent()
    content.forEach((item) => {
      console.log(item)
    })
  }
}
