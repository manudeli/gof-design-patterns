import { Player } from './Player'

export class NBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winning = this.ns.includes(diceNumber)
  }

  constructor(name: string, private ns: Array<number>) {
    super(name)
  }
}
