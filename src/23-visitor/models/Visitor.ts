import { Unit } from './Unit'

export interface Visitor {
  visit(unit: Unit): void
}
