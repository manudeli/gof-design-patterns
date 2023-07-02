import { Row } from './Row'

export class Cache {
  private cache = new Map<string, Row>()

  put(row: Row) {
    this.cache.set(row.name, row)
  }

  get(name: string) {
    return this.cache.get(name)
  }
}
