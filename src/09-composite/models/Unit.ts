export abstract class Unit {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }

  abstract getSize(): number
}
