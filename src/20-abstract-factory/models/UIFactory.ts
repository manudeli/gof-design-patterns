import { Button } from './Button'
import { CheckBox } from './CheckBox'
import { TextEdit } from './TextEdit'

export abstract class UIFactory {
  abstract createButton(dom: HTMLElement, caption: string): Button
  abstract createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox
  abstract createTextEdit(dom: HTMLElement, text: string): TextEdit
}
