import 'the-new-css-reset/css/reset.css'
import '../../public/global.css'
import { Array, Item } from './models'

const items = [new Item('Apple', 2500), new Item('Banana', 1800), new Item('Melon', 1200), new Item('Grape', 4600)]

const array = new Array(items)
const iter = array.iterator()

while (iter.next()) {
  const domItem = document.createElement('div')

  const item = iter.current()
  domItem.innerHTML = `${item.name}: $${item.cost}`
  domItem.classList.add('iterator-item')

  document.body.appendChild(domItem)
}
