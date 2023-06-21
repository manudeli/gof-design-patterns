import Animal from './Animal'

export default class Cat extends Animal {
  sound(): void {
    console.log(this.name + ' sounds meow meow!')
  }

  constructor(name: string) {
    super(name)
  }
}
