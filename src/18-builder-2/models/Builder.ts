import { Data } from './Data'

export abstract class Builder {
  constructor(protected data: Data) {}

  abstract head(): string
  abstract body(): string
  abstract foot(): string
}
