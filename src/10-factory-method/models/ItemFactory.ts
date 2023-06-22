import { Bow } from './Bow'
import { Factory, ItemName } from './Factory'
import { Item } from './Item'
import { Shield } from './Shield'
import { Sword } from './Sword'

class ItemCount {
  private _currentCount = 0

  constructor(private _maxCount: number) {}
  get maxCount() {
    return this._maxCount
  }

  isCreatable(): boolean {
    return this._currentCount < this.maxCount
  }

  increaseCount(): void {
    if (this.isCreatable()) this._currentCount++
  }
}

export class ItemFactory extends Factory {
  private repository = new Map<ItemName, ItemCount>()

  constructor() {
    super()

    this.repository.set('sword', new ItemCount(3))
    this.repository.set('shield', new ItemCount(5))
    this.repository.set('bow', new ItemCount(2))
  }

  protected isCreatable(name: ItemName): boolean {
    const itemCount = this.repository.get(name)
    if (itemCount) {
      return itemCount.isCreatable()
    }

    throw new Error('no Item')
  }
  protected createItem(name: ItemName): Item {
    switch (name) {
      case 'bow':
        return new Bow()
      case 'shield':
        return new Shield()
      case 'sword':
        return new Sword()

      default:
        throw new Error('no name')
    }
  }
  protected postprocessItem(name: ItemName): void {
    const itemCount = this.repository.get(name)
    itemCount?.increaseCount()
  }
}
