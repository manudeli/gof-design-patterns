import { Prototype } from './Prototype'
import { Shape } from './Shape'

export class Group implements Prototype, Shape {
  private shapes = new Array<Shape | Prototype>()
  draw(canvas: HTMLCanvasElement): this {
    this.shapes.forEach((shape) => 'draw' in shape && shape.draw(canvas))
    return this
  }
  moveOffset(dx: number, dy: number): this {
    this.shapes.forEach((shape) => 'moveOffset' in shape && shape.moveOffset(dx, dy))
    return this
  }

  add(shape: Shape | Prototype) {
    'copy' in shape && this.shapes.push(shape.copy())
    return this
  }

  copy(): this {
    const result = new Group()

    this.shapes.forEach((shape) => result.add(shape))

    return result as this
  }
}
