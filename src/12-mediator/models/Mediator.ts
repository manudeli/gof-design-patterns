import { Participant } from './Participant'

export interface Mediator {
  participantChanged(participant: Participant): void
}
