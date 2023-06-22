import './style.css'
import { ItemFactory, ItemName } from './models'

const itemFactory = new ItemFactory()

const domOutput = document.createElement('div')
domOutput.classList.add('items')

const items = (['sword', 'shield', 'bow'] as const).map((textContent) => {
  const button = document.createElement('button')
  button.textContent = textContent

  return button
})

domOutput.append(...items)
const textarea = document.createElement('textarea')
textarea.innerText = 'War is opened...!'
items.forEach((item) => {
  item.addEventListener('click', (event) => {
    const itemName = (event.target as HTMLElement).innerText as ItemName

    const item = itemFactory.create(itemName)
    if (item) {
      textarea.value += `\n${item.use()}`
    } else {
      textarea.value += `\n${itemName} is not available item. empty now`
    }
    textarea.scrollTop = textarea.scrollHeight
  })
})

document.body.append(domOutput, textarea)
