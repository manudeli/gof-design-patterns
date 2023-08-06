import { assert } from '../utils/assert'
import { CommandListExpression } from './CommandListExpression'
import { Context } from './Context'
import { Expression } from './Expression'

export class BeginExpression implements Expression {
  private expression: CommandListExpression | null = null

  parse(context: Context): boolean {
    const currentKeyword = context.getCurrentKeyword()
    if (currentKeyword && BeginExpression.checkValidKeyword(currentKeyword)) {
      context.readNextKeyword()
      this.expression = new CommandListExpression()
      return this.expression.parse(context)
    } else {
      return false
    }
  }

  run(): boolean {
    assert(this.expression !== null, 'expression is required')
    return this.expression.run()
  }

  getDescription(): string {
    assert(this.expression !== null, 'expression is required')
    return `BEGIN ${this.expression.getDescription()}`
  }

  static checkValidKeyword(keyword: string): boolean {
    return keyword === 'BEGIN'
  }
}
