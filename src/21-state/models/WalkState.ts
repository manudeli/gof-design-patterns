import { Player } from './Player'
import { RunState } from './RunState'
import { SitDownState } from './SitDownState'
import { StandUpState } from './StandUpState'
import { State } from './State'

export class WalkState extends State {
  standUp(): void {
    this.player.setSpeed(0)
    this.player.talk('stop...!')
    this.player.setState(new StandUpState(this.player))
  }
  sitDown(): void {
    this.player.setSpeed(0)
    this.player.talk('If I sit down while walking, I might fall')
    this.player.setState(new SitDownState(this.player))
  }
  walk(): void {
    this.player.talk('i like to walk')
  }
  run(): void {
    this.player.setSpeed(20)
    this.player.talk('If I walk and run, I can run faster')
    this.player.setState(new RunState(this.player))
  }
  getDescription(): string {
    return 'walking...'
  }
  constructor(player: Player) {
    super(player)
  }
}
