import Array from './Array'
import Iterator from './Iterator'

export default class ArrayIterator<Item> implements Iterator<Item> {
  private index: number

  constructor(private array: Array<Item>) {
    this.index = -1
  }

  next(): boolean {
    this.index++
    return this.index < this.array.count
  }

  current(): Item {
    return this.array.getItem(this.index)
  }
}
