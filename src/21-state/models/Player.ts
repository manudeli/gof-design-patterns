import { StandUpState } from './StandUpState'
import { State } from './State'

export class Player {
  private speed = 0
  getSpeed() {
    return this.speed
  }
  setSpeed(speed: number) {
    this.speed = speed
  }

  private state: State
  setState(state: State) {
    this.state = state
  }
  getState() {
    return this.state
  }

  constructor(private domTalk: HTMLElement) {
    this.state = new StandUpState(this)
  }

  talk(msg: string) {
    this.domTalk.innerText = msg
  }
}
