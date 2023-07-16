import { Command } from './Command'
import { Draw } from './Draw'

export class BoxCommand extends Draw implements Command {
  constructor(
    canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {
    super(canvas)
  }
  run(): void {
    const context = this.canvas.getContext('2d')
    if (context) {
      context.beginPath()
      context.rect(this.x, this.y, this.width, this.height)

      context.fillStyle = this.fillColor
      context.strokeStyle = this.strokeColor

      context.fill()
      context.stroke()
    }
  }
}
