import { Car } from './Car'

export class CarBuilder {
  private engine?: string
  private airbag = false
  private color?: string
  private cameraSensor = false
  private AEB?: boolean

  setEngine(v: Exclude<typeof this.engine, undefined>) {
    this.engine = v
    return this
  }
  setAirbag(v: Exclude<typeof this.airbag, undefined>) {
    this.airbag = v
    return this
  }
  setColor(v: Exclude<typeof this.color, undefined>) {
    this.color = v
    return this
  }
  setCameraSensor(v: Exclude<typeof this.cameraSensor, undefined>) {
    this.cameraSensor = v
    return this
  }
  setAEB(v: Exclude<typeof this.AEB, undefined>) {
    this.AEB = v
    return this
  }

  build(): Car {
    if (this.engine == undefined) throw new Error('engine is required')
    if (this.color == undefined) throw new Error('color is required')
    if (this.AEB == undefined) throw new Error('AEB is required')

    return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB)
  }
}
