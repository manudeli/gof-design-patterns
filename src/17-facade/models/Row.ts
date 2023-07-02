export class Row {
  constructor(private _name: string, private _birthday: string, private _email: string) {}

  get name(): string {
    return this._name
  }
  get birthday(): string {
    return this._birthday
  }
  get email(): string {
    return this._email
  }
}
