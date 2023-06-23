import { DiceGame } from './DiceGame'

export class FairDiceGame extends DiceGame {
  play(): number {
    const n = Math.floor(Math.random() * 6) + 1
    this.players.forEach((player) => player.update(n))
    return n
  }
}
