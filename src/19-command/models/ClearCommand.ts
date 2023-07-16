import { Command } from './Command'
import { Draw } from './Draw'

export class ClearCommand extends Draw implements Command {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
  }
  run(): void {
    const context = this.canvas.getContext('2d')
    if (context) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }
}
