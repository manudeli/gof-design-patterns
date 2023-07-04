import { Builder } from './Builder'
import { Data } from './Data'

export class XMLBuilder extends Builder {
  head(): string {
    return `<?xml version="1.0" encoding="utf-8"?><DATA>`
  }
  body(): string {
    return `<NAME>${this.data.name}</NAME><AGE>${this.data.age}</AGE>`
  }
  foot(): string {
    return `</DATA>`
  }
  constructor(data: Data) {
    super(data)
  }
}
