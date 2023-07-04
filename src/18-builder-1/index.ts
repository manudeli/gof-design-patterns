import './style.css'
import { Car, CarBuilder } from './models'

const car1 = new Car('V7', true, 'black', true, false)
car1.print()

const car2 = new CarBuilder()
  .setAEB(false)
  .setAirbag(false)
  .setCameraSensor(true)
  .setColor('white')
  .setEngine('V9')
  .build()
car2.print()
