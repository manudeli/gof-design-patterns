import './style.css'
import { Data, Director, JSONBuilder, PlainTextBuilder, XMLBuilder } from './models'

const data = new Data('Jane', 76)

const plainTextBuilder = new PlainTextBuilder(data)
const plainTextDirector = new Director(plainTextBuilder)
console.log(plainTextDirector.build())

const jsonBuilder = new JSONBuilder(data)
const jsonDirector = new Director(jsonBuilder)
console.log(jsonDirector.build())

const xmlBuilder = new XMLBuilder(data)
const xmlDirector = new Director(xmlBuilder)
console.log(xmlDirector.build())
