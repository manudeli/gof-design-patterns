export class Data {
  constructor(private _name: string, private _age: number) {}

  get name() {
    return this._name
  }
  get age() {
    return this._age
  }
}
