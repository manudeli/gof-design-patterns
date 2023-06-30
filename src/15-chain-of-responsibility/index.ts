import './style.css'
import { DomainHandler, PortHandler, ProtocolHandler } from './models'

const urlLabel = document.createElement('label')
const urlInput = document.createElement('input')
const urlButton = document.createElement('button')
urlLabel.textContent = 'URL'
urlLabel.htmlFor = 'url'
urlInput.id = 'url'
urlButton.id = 'btn'
urlButton.textContent = 'translate'

const resultDiv = document.createElement('div')
resultDiv.classList.add('result')

document.body.append(urlLabel, urlInput, urlButton, resultDiv)

const handler1 = new ProtocolHandler()
const handler2 = new PortHandler()
const handler3 = new DomainHandler()

handler1.setNext(handler2).setNext(handler3)

urlButton.addEventListener('click', () => {
  const url = urlInput.value
  handler1.run(url)
})
