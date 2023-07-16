export class Draw {
  constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor = '#ffffff',
    protected strokeColor = '#000000'
  ) {}

  setFillColor(color: string): Draw {
    this.fillColor = color
    return this
  }

  setStrokeColor(color: string): Draw {
    this.strokeColor = color
    return this
  }
}
