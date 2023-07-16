import { Player } from './Player'
import { StandUpState } from './StandUpState'
import { State } from './State'
import { WalkState } from './WalkState'

export class RunState extends State {
  standUp(): void {
    this.player.talk('Stand while running? Will my cartilage break?')
    this.player.setSpeed(0)
    this.player.setState(new StandUpState(this.player))
  }
  sitDown(): void {
    this.player.talk('Sit down while I run? wanna die?')
    this.player.setSpeed(0)
    this.player.setState(new StandUpState(this.player))
  }
  walk(): void {
    this.player.talk("I'll slow down")
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
  }
  run(): void {
    this.player.talk('Ok, running faster?')
    this.player.setSpeed(this.player.getSpeed() + 2)
  }
  getDescription(): string {
    return 'running...!'
  }
  constructor(player: Player) {
    super(player)
  }
}
