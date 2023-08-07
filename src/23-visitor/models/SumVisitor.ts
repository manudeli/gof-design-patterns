import { Item } from './Item'
import { Unit } from './Unit'
import { Visitor } from './Visitor'

export class SumVisitor implements Visitor {
  private sum = 0

  getValue() {
    return this.sum
  }

  visit(unit: Unit): void {
    if (unit instanceof Item) {
      this.sum += unit.getValue()
    } else {
      unit.accept(this)
    }
  }
}
