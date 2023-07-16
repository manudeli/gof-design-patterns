import { Player } from './Player'
import { StandUpState } from './StandUpState'
import { State } from './State'

export class SitDownState extends State {
  standUp(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk("let's get up")
  }
  sitDown(): void {
    this.player.talk("How long do I sit... I'm getting cramps")
  }
  walk(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk('How do I sit and walk? I should stand')
  }
  run(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk('How do I sit and run? I should stand')
  }
  getDescription(): string {
    return 'sitting in place'
  }
  constructor(player: Player) {
    super(player)
  }
}
