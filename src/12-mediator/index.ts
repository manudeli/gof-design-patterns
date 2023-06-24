import './style.css'
import { SmartHome } from './models'

const home = document.createElement('div')
home.classList.add('home')

const door = document.createElement('div')
door.classList.add('door')
const window = document.createElement('div')
window.classList.add('window')
const heatBoiler = document.createElement('div')
heatBoiler.classList.add('heatBoiler')
const airConditioner = document.createElement('div')
airConditioner.classList.add('airConditioner')

home.append(door, window, heatBoiler, airConditioner)
document.body.append(home)

const smartHome = new SmartHome()
smartHome.install({ door, airConditioner, heatBoiler, window })
