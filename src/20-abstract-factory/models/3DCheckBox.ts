import { CheckBox } from './CheckBox'

export class ThreeDCheckBox extends CheckBox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked)
    this.render()
  }

  render(): void {
    this.dom.innerHTML = `
    <label>
      <input type="checkbox" ${this.checked ? 'checked="checked"' : ''}>
      <div class="box"></div>
      <div class="line"></div>
    </label>
    `
    this.dom.classList.add('threeD-checkbox')
  }
}
