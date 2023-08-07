import { Visitor } from './Visitor'

export interface Unit {
  accept(visitor: Visitor): void
}
