import { Player } from './Player'

export abstract class DiceGame {
  protected players = new Array<Player>()

  addPlayer(player: Player) {
    this.players.push(player)
  }

  abstract play(): number
}
