import './style.css'
import { EvenBettingPlayer, FairDiceGame, NBettingPlayer, OddBettingPlayer } from './models'

const dice = document.createElement('div')
dice.classList.add('dice')
dice.textContent = '?'

const triggerButton = document.createElement('button')
triggerButton.textContent = 'Roll Dice!'

const playersEl = document.createElement('div')
playersEl.classList.add('player')

document.body.append(dice, triggerButton, playersEl)

const fairDiceGame = new FairDiceGame()
const players = [
  new OddBettingPlayer('Player Odd'),
  new EvenBettingPlayer('Player Even'),
  new NBettingPlayer('Player N', [2, 3, 5]),
]

players.forEach((player) => fairDiceGame.addPlayer(player))

const updateBoard = () => {
  playersEl.innerHTML = ''
  players.forEach((player) => {
    const playerEl = document.createElement('div')
    playerEl.innerText = player.name

    if (player.winning) playerEl.classList.add('win')
    playersEl.append(playerEl)
  })
}

triggerButton.addEventListener('click', () => {
  const diceNumber = fairDiceGame.play()

  const diceEl = document.querySelector('.dice') as HTMLElement

  diceEl.innerText = diceNumber.toString()

  updateBoard()
})
