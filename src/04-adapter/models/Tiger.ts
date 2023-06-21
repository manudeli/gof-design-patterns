export default class Tiger {
  private _name: string | null = null

  set name(value: string) {
    this._name = value
  }
  get name(): string {
    if (this._name) return this._name
    throw new Error('no name yet')
  }

  roar(): string {
    return 'roar!'
  }
}
