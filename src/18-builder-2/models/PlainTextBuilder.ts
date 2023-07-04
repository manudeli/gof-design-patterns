import { Builder } from './Builder'
import { Data } from './Data'

export class PlainTextBuilder extends Builder {
  head(): string {
    return ''
  }
  body(): string {
    return `Name: ${this.data.name}, Age: ${this.data.age}`
  }
  foot(): string {
    return ''
  }

  constructor(data: Data) {
    super(data)
  }
}
