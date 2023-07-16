import { Button } from './Button'

export class FlatButton extends Button {
  constructor(dom: HTMLElement, caption: string) {
    super(dom, caption)
    this.render()
  }

  render(): void {
    this.dom.innerText = this.caption
    this.dom.classList.add('flat-button')
  }
}
