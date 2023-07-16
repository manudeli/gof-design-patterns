import { TextEdit } from './TextEdit'

export class FlatTextEdit extends TextEdit {
  constructor(dom: HTMLElement, text: string) {
    super(dom, text)
    this.render()
  }

  render(): void {
    this.dom.innerHTML = `<input value="${this.text}">`
    this.dom.classList.add('flat-input')
  }
}
