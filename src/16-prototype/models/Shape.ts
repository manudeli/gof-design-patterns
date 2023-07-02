export interface Shape {
  draw(canvas: HTMLCanvasElement): this
  moveOffset(dx: number, dy: number): this
}
