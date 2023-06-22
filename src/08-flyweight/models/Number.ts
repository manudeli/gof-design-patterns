import { DigitFactory } from './DigitFactory'

export class Number {
  constructor(private factory: DigitFactory, private num: number) {}

  put(dom: Element) {
    const strNum = this.num.toString()
    const len = strNum.length
    dom.innerHTML = ''
    for (let i = 0; i < len; i++) {
      const div = document.createElement('div')
      this.factory.getDigit(parseInt(strNum[i])).put(div)
      dom.append(div)
    }
  }
}
