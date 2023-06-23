import { Player } from './Player'

export class OddBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winning = diceNumber % 2 === 1
  }

  constructor(name: string) {
    super(name)
  }
}
