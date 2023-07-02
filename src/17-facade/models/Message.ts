import { Row } from './Row'

export class Message {
  constructor(private row: Row | undefined) {}

  print(dom: Element) {
    const domLayout = document.createElement('div')
    domLayout.classList.add('layout')

    if (this.row) {
      domLayout.innerHTML = `
        <div class="name">${this.row.name}</div>
        <div class="birthday">${this.row.birthday}</div>
        <div class="email">${this.row.email}</div>
        `
    } else {
      domLayout.innerText = `NO RESULT`
    }

    dom.append(domLayout)
  }
}
