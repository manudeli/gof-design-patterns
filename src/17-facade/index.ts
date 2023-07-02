import './style.css'
import { Cache, DBMS, DBMSwithCacheFacade } from './models'

const input = document.createElement('input')
const button = document.createElement('button')
button.textContent = 'find'
const resultDiv = document.createElement('div')
resultDiv.classList.add('result')

document.body.append(input, button, resultDiv)

const dbmsWithCacheFacade = new DBMSwithCacheFacade({
  dbms: new DBMS(),
  cache: new Cache(),
})

button.addEventListener('click', () => {
  const name = input.value

  dbmsWithCacheFacade.query(name, {
    onLoading() {
      input.value = '(finding...)'
      button.disabled = true
    },
    onSuccess() {
      input.value = name
      button.disabled = false
    },
    domOutput: resultDiv,
  })
})
