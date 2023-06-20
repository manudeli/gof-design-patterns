import SumStrategy from './SumStrategy'

export default class SumPrinter {
  print(strategy: SumStrategy, n: number, domOutput: Element) {
    const value = strategy.get(n)
    domOutput.innerHTML = `Sum of 1~${n} = ${value}`
  }
}
