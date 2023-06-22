export class Digit {
  private data: Array<string> | null = null

  constructor(private digitNumber: number) {}

  private load(digitNumber: number, domOutput: Element) {
    loadNumbers(digitNumber)
      .then((json) => {
        this.data = json
        domOutput && this.put(domOutput)
      })
      .catch((error) => console.warn(error))
  }

  put(dom: Element): void {
    if (!this.data) this.load(this.digitNumber, dom)
    else {
      dom.innerHTML = `<div class="digit-layout"></div>`
      const domLayout = dom.querySelector('.digit-layout')

      this.data.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          const domCell = document.createElement('div')
          domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333'
          domLayout?.append(domCell)
        }
      })
    }
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve('resolved'), ms))

const loadNumbers = (digitNumber: number) => delay(200).then(() => numbers[digitNumber])

const numbers = [
  // 숫자 0
  ['11111111', '10000001', '10000001', '10000001', '10000001', '10000001', '10000001', '11111111'],

  // 숫자 1
  ['00000010', '00000010', '00000010', '00000010', '00000010', '00000010', '00000010', '00000010'],

  // 숫자 2
  ['11111111', '00000001', '00000001', '11111111', '10000000', '10000000', '10000000', '11111111'],

  // 숫자 3
  ['11111111', '00000001', '00000001', '11111111', '00000001', '00000001', '00000001', '11111111'],

  // 숫자 4
  ['10000001', '10000001', '10000001', '11111111', '00000001', '00000001', '00000001', '00000001'],

  // 숫자 5
  ['11111111', '10000000', '10000000', '11111111', '00000001', '00000001', '00000001', '11111111'],

  // 숫자 6
  ['11111111', '10000000', '10000000', '11111111', '10000001', '10000001', '10000001', '11111111'],

  // 숫자 7
  ['11111111', '00000001', '00000001', '00000001', '00000001', '00000001', '00000001', '00000001'],

  // 숫자 8
  ['11111111', '10000001', '10000001', '11111111', '10000001', '10000001', '10000001', '11111111'],

  // 숫자 9
  ['11111111', '10000001', '10000001', '11111111', '00000001', '00000001', '00000001', '11111111'],
]
