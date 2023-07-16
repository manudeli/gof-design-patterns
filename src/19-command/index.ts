import './style.css'
import { BoxCommand, CircleCommand, ClearCommand, PlayCommand, TextCommand } from './models'

const buttonsDiv = document.createElement('div')
buttonsDiv.classList.add('buttons')

const drawButton = document.createElement('button')
const playButton = document.createElement('button')
drawButton.classList.add('draw')
drawButton.innerText = 'Draw'
playButton.classList.add('play')
playButton.innerText = 'Play'

buttonsDiv.append(drawButton, playButton)

const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
canvas.style.cssText = `border: 1px dashed grey;`

document.body.append(buttonsDiv, canvas)

const commandClear = new ClearCommand(canvas)
const commandCircle1 = new CircleCommand(canvas, 50, 150, 40)
commandCircle1.setFillColor('#ee4040').setStrokeColor('#ee4040')
const commandText = new TextCommand(canvas, 200, 200, 40, 'Design Patterns')
commandText.setStrokeColor('#458de5')
const commandCircle2 = new CircleCommand(canvas, 355, 240, 30)
commandCircle2.setFillColor('#ff884d').setStrokeColor('#ff884d')
const commandBox = new BoxCommand(canvas, 40, 165, 320, 65)
commandBox.setFillColor('#4dc4ff').setStrokeColor('#4dc4ff')

const commands = [commandClear, commandCircle1, commandBox, commandText, commandCircle2]

drawButton.addEventListener('click', () => commands.forEach((command) => command.run()))

const playCommand = new PlayCommand(canvas)
commands.forEach((command) => playCommand.add(command))
playButton.addEventListener('click', () => playCommand.run())
