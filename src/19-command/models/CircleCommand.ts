import { Command } from './Command'
import { Draw } from './Draw'

export class CircleCommand extends Draw implements Command {
  constructor(canvas: HTMLCanvasElement, private x: number, private y: number, private radius: number) {
    super(canvas)
  }
  run(): void {
    const context = this.canvas.getContext('2d')
    if (context) {
      context.beginPath()
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

      context.fillStyle = this.fillColor
      context.strokeStyle = this.strokeColor

      context.fill()
      context.stroke()
    }
  }
}
