import './style.css'
import { DigitFactory, Number } from './models'

const tmp = document.createElement('div')
tmp.id = 'tmp'
tmp.style.cssText = `
  display: flex;
  gap: 2px;
  padding: 4px;
  border: 1px solid black;
  width: fit-content;
  border-radius: 4px;
`
document.body.append(tmp)

let value = 434331
const digitFactory = new DigitFactory()
setInterval(() => new Number(digitFactory, value++).put(tmp), 10)
