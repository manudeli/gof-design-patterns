import Animal from './Animal'
import Tiger from './Tiger'

export default class TigerAdapter extends Animal {
  private tiger: Tiger
  constructor(name: string) {
    super(name)
    this.tiger = new Tiger()
    this.tiger.name = name
  }

  sound(): void {
    console.log(this.tiger.name + ' sounds ' + this.tiger.roar())
  }
}
