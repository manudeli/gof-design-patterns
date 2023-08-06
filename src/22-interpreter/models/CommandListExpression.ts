import { ActionCommandExpression } from './ActionCommandExpression'
import { CommandExpression } from './CommandExpression'
import { Context } from './Context'
import { Expression } from './Expression'
import { LoopCommandExpression } from './LoopCommandExpression'

export class CommandListExpression implements Expression {
  private commands = new Array<CommandExpression>()

  parse(context: Context): boolean {
    for (;;) {
      const currentKeyword = context.getCurrentKeyword()

      if (currentKeyword === null) {
        return false
      } else if (currentKeyword === 'END') {
        context.readNextKeyword()
        break
      } else {
        let command: null | LoopCommandExpression | ActionCommandExpression = null
        if (LoopCommandExpression.checkValidKeyword(currentKeyword)) {
          command = new LoopCommandExpression(currentKeyword)
        } else if (ActionCommandExpression.checkValidKeyword(currentKeyword)) {
          command = new ActionCommandExpression(currentKeyword)
        }

        if (command !== null) {
          if (command.parse(context)) {
            this.commands.push(command)
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }

    return true
  }

  run(): boolean {
    const countCommands = this.commands.length
    for (let i = 0; i < countCommands; i++) {
      const bOK = this.commands[i].run()
      if (!bOK) return false
    }

    return true
  }

  getDescription(): string {
    return `{ ${this.commands.map((command) => command.getDescription()).join(', ')} }`
  }
}
