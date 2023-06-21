import { King } from './models'

const king = King.getInstance()
king.sayHello()

const king2 = King.getInstance()
console.log(king === king2 ? 'same King' : 'different King')
