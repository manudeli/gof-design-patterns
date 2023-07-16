import { Command } from './Command'
import { Draw } from './Draw'

export class PlayCommand extends Draw implements Command {
  private playIndex = 0

  constructor(canvas: HTMLCanvasElement, private commands: Command[] = []) {
    super(canvas)
  }

  add(command: Command): void {
    this.commands.push(command)
  }

  run(): void {
    if (this.playIndex < this.commands.length) {
      const command = this.commands[this.playIndex]
      command.run()

      this.playIndex++

      setTimeout(() => this.run(), 500)
    } else {
      this.playIndex = 0
    }
  }
}
