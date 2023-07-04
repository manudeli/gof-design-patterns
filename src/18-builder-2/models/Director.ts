import { Builder } from './Builder'

export class Director {
  constructor(private builder: Builder) {}

  build() {
    return `${this.builder.head()}${this.builder.body()}${this.builder.foot()}`
  }
}
