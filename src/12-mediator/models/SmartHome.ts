import { AirConditioner } from './AirConditioner'
import { Door } from './Door'
import { HeatBoiler } from './HeatBoiler'
import { Mediator } from './Mediator'
import { Participant } from './Participant'
import { Window } from './Window'

export class SmartHome implements Mediator {
  door = new Door(this)
  window = new Window(this)
  airConditioner = new AirConditioner(this)
  boiler = new HeatBoiler(this)

  participantChanged(participant: Participant): void {
    if (participant === this.door && this.door.isClosed()) {
      this.airConditioner.off()
      this.boiler.off()
    }

    if (participant === this.window && !this.window.isClosed()) {
      this.airConditioner.off()
      this.boiler.off()
    }

    if (participant === this.airConditioner && this.airConditioner.isRunning()) {
      this.boiler.off()
      this.window.close()
      this.door.close()
    }

    if (participant === this.boiler && this.boiler.isRunning()) {
      this.airConditioner.off()
      this.window.close()
      this.door.close()
    }
  }

  private display({
    door,
    airConditioner,
    heatBoiler,
    window,
  }: {
    door: HTMLElement
    window: HTMLElement
    heatBoiler: HTMLElement
    airConditioner: HTMLElement
  }) {
    this.door.displayState(door)
    this.airConditioner.displayState(airConditioner)
    this.boiler.displayState(heatBoiler)
    this.window.displayState(window)
  }

  install({
    door,
    airConditioner,
    heatBoiler,
    window,
  }: {
    door: HTMLElement
    window: HTMLElement
    heatBoiler: HTMLElement
    airConditioner: HTMLElement
  }) {
    this.display({ door, airConditioner, heatBoiler, window })
    door.addEventListener('click', () => {
      this.door.isClosed() ? this.door.open() : this.door.close()
      this.display({ door, airConditioner, heatBoiler, window })
    })
    airConditioner.addEventListener('click', () => {
      this.airConditioner.isRunning() ? this.airConditioner.off() : this.airConditioner.on()
      this.display({ door, airConditioner, heatBoiler, window })
    })
    heatBoiler.addEventListener('click', () => {
      this.boiler.isRunning() ? this.boiler.off() : this.boiler.on()
      this.display({ door, airConditioner, heatBoiler, window })
    })
    window.addEventListener('click', () => {
      this.window.isClosed() ? this.window.open() : this.window.close()
      this.display({ door, airConditioner, heatBoiler, window })
    })
  }
}
