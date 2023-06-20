import Aggregator from './Aggregator'
import ArrayIterator from './ArrayIterator'
import Iterator from './Iterator'

export default class Array<Item> implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number) {
    return this.items[index]
  }

  public get count() {
    return this.items.length
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this)
  }
}
