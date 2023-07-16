import './style.css'
import { FlatUIFactory, ThreeDUIFactory, UIFactory } from './models'

const [button, checkbox, textedit] = (['button', 'checkbox', 'textedit'] as const).map((item) => {
  const div = document.createElement('div')
  div.classList.add(item)
  return div
})

document.body.append(button, checkbox, textedit)

let factory: UIFactory

const flatMode = true

if (flatMode) {
  factory = new FlatUIFactory()
} else {
  factory = new ThreeDUIFactory()
}

factory.createButton(button, 'BUTTON')
factory.createCheckBox(checkbox, 'CheckBox', true)
factory.createTextEdit(textedit, 'DesignPattern')
