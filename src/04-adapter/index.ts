import { Animal, Cat, Dog, Tiger, TigerAdapter } from './models'

const animals = Array<Animal>()

animals.push(new Dog('woofy'))
animals.push(new Cat('meowy'))
animals.push(new Cat('chewy'))

const tiger = new Tiger()
tiger.name = 'tigery'
animals.push(new TigerAdapter(tiger.name))

animals.forEach((animal) => {
  animal.sound()
})
