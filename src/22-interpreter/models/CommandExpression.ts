import { Context } from './Context'
import { Expression } from './Expression'

export abstract class CommandExpression implements Expression {
  constructor(protected keyword: string) {}

  abstract parse(context: Context): boolean
  abstract run(): boolean
  abstract getDescription(): string
}
