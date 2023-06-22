import { Item } from './Item'

export type ItemName = 'sword' | 'shield' | 'bow'

export abstract class Factory {
  protected abstract isCreatable(name: ItemName): boolean
  protected abstract createItem(name: ItemName): Item
  protected abstract postprocessItem(name: ItemName): void

  create(name: ItemName): Item | null {
    const bCreatable = this.isCreatable(name)
    if (bCreatable) {
      const item = this.createItem(name)
      this.postprocessItem(name)
      return item
    }

    return null
  }
}
