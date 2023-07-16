import { CheckBox } from './CheckBox'

export class FlatCheckBox extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked)
    this.render()
  }

  render(): void {
    this.dom.innerHTML = `
    <label>
      <input type="checkbox" ${this.checked ? 'checked="checked"' : ''}>
      <span></span>
    </label>
    `
    this.dom.classList.add('flat-checkbox')
  }
}
