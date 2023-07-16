import { Player } from './models'
import './style.css'

const talk = document.createElement('div')
talk.innerText = '...'
talk.classList.add('talk')
const description = document.createElement('div')
description.classList.add('description')
const actions = document.createElement('div')
actions.classList.add('actions')

const [stand, sit, walk, run] = (['stand', 'sit', 'walk', 'run'] as const).map((item) => {
  const div = document.createElement('div')
  div.classList.add(item)
  div.innerText = item.toUpperCase()
  return div
})

actions.append(stand, sit, walk, run)
document.body.append(talk, description, actions)

const player = new Player(talk)

const putDescription = () => {
  description.innerText = `${player.getState().getDescription()} / speed: ${player.getSpeed()}km/h`
}

putDescription()

stand.addEventListener('click', () => {
  player.getState().standUp()
  putDescription()
})
sit.addEventListener('click', () => {
  player.getState().sitDown()
  putDescription()
})
walk.addEventListener('click', () => {
  player.getState().walk()
  putDescription()
})
run.addEventListener('click', () => {
  player.getState().run()
  putDescription()
})
