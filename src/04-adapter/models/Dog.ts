import Animal from './Animal'

export default class Dog extends Animal {
  sound(): void {
    console.log(this.name + ' sounds bow bow!')
  }

  constructor(name: string) {
    super(name)
  }
}
