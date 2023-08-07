import { Unit } from './Unit'
import { Visitor } from './Visitor'

export class ItemList implements Unit {
  private list = new Array<Unit>()

  add(unit: Unit): void {
    this.list.push(unit)
  }

  accept(visitor: Visitor): void {
    this.list.forEach((unit) => visitor.visit(unit))
  }
}
