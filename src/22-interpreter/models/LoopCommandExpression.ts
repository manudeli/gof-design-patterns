import { CommandExpression } from './CommandExpression'
import { CommandListExpression } from './CommandListExpression'
import { Context } from './Context'

export class LoopCommandExpression extends CommandExpression {
  private loopCount = 0
  private expression: CommandListExpression = new CommandListExpression()

  constructor(keyword: string) {
    super(keyword)
  }

  parse(context: Context): boolean {
    if (!LoopCommandExpression.checkValidKeyword(this.keyword)) {
      return false
    }

    const countKeyword = context.readNextKeyword()
    if (countKeyword === null) {
      return false
    }

    const count = parseInt(countKeyword)
    if (isNaN(count)) return false
    this.loopCount = count

    if (context.readNextKeyword() === null) {
      return false
    }

    return this.expression.parse(context)
  }

  run(): boolean {
    for (let i = 0; i < this.loopCount; i++) {
      if (!this.expression.run()) {
        return false
      }
    }

    return true
  }

  getDescription(): string {
    return `LOOP(${this.loopCount}) ${this.expression.getDescription()}`
  }

  static checkValidKeyword(keyword: string) {
    return keyword === 'LOOP'
  }
}
