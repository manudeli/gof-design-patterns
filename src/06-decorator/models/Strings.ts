import Item from './Item'

export default class Strings extends Item {
  getLinesCount(): number {
    return this.data.length
  }
  getLength(index: number): number {
    return this.data[index].length
  }
  getMaxLength(): number {
    return this.data.reduce((acc, cur) => (acc.length > cur.length ? acc : cur), '').length
  }
  getString(index: number): string {
    return this.data[index]
  }

  constructor(private data = new Array<string>()) {
    super()
  }

  add(str: string) {
    this.data.push(str)
  }
}
