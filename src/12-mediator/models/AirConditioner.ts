import { Mediator } from './Mediator'
import { Participant } from './Participant'

export class AirConditioner extends Participant {
  private _isOff = true

  constructor(mediator: Mediator) {
    super(mediator)
  }

  on(): void {
    if (!this._isOff) return
    this._isOff = false
    this.mediator.participantChanged(this)
  }
  off(): void {
    if (this._isOff) return
    this._isOff = true
    this.mediator.participantChanged(this)
  }
  isRunning() {
    return !this._isOff
  }

  displayState(element: HTMLElement): void {
    element.innerHTML = this._isOff ? 'air conditioner off' : 'air conditioner on'

    if (this._isOff) element.classList.remove('highlighting')
    else element.classList.add('highlighting')
  }
}
