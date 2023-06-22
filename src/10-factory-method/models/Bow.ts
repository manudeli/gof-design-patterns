import { Item } from './Item'

export class Bow implements Item {
  use() {
    return 'I shot an arrow from a distance. Are you nervous?'
  }
}
