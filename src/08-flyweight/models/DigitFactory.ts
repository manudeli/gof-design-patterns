import { Digit } from './Digit'

export class DigitFactory {
  private pool: Array<Digit | null> = [null, null, null, null, null, null, null, null, null, null]

  getDigit(n: number): Digit {
    if (!this.pool[n]) this.pool[n] = new Digit(n)
    return this.pool[n] as Digit
  }
}
