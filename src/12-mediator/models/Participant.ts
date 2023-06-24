import { Mediator } from './Mediator'

export abstract class Participant {
  constructor(protected mediator: Mediator) {}
  abstract displayState(element: HTMLElement): void
}
