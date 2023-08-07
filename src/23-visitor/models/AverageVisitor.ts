import { Item } from './Item'
import { Unit } from './Unit'
import { Visitor } from './Visitor'

export class AverageVisitor implements Visitor {
  private sum = 0
  private count = 0

  getValue() {
    return this.sum / this.count
  }

  visit(unit: Unit): void {
    if (unit instanceof Item) {
      this.sum += unit.getValue()
      this.count++
    } else {
      unit.accept(this)
    }
  }
}
