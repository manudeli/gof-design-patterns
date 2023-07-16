import { Player } from './Player'
import { RunState } from './RunState'
import { SitDownState } from './SitDownState'
import { State } from './State'
import { WalkState } from './WalkState'

export class StandUpState extends State {
  standUp(): void {
    this.player.talk('when are you going to move')
  }
  sitDown(): void {
    this.player.setState(new SitDownState(this.player))
    this.player.talk("It's comfortable and nice to sit on")
  }
  walk(): void {
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
    this.player.talk('Walking is the second thought')
  }
  run(): void {
    this.player.setSpeed(10)
    this.player.setState(new RunState(this.player))
    this.player.talk('run suddenly?')
  }
  getDescription(): string {
    return 'standing in place'
  }
  constructor(player: Player) {
    super(player)
  }
}
