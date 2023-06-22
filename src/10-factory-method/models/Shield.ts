import { Item } from './Item'

export class Shield implements Item {
  use() {
    return 'Blocked using a shield. Very strong!'
  }
}
