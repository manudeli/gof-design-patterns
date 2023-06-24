import { Mediator } from './Mediator'
import { Participant } from './Participant'

export class Door extends Participant {
  private _isClosed = true

  constructor(mediator: Mediator) {
    super(mediator)
  }

  open(): void {
    if (!this._isClosed) return
    this._isClosed = false
    this.mediator.participantChanged(this)
  }
  close(): void {
    if (this._isClosed) return
    this._isClosed = true
    this.mediator.participantChanged(this)
  }
  isClosed() {
    return this._isClosed
  }

  displayState(element: HTMLElement): void {
    element.innerHTML = this._isClosed ? 'door closed' : 'door opened'

    if (this._isClosed) element.classList.remove('highlighting')
    else element.classList.add('highlighting')
  }
}
