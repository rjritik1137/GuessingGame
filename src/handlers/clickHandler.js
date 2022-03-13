import Gues from '../game'
import { updateDOM } from '../domHelper'

const verifyAnswer = () => {
  if (Gues.isGameEnded()) return
  let inputNumber = document.querySelector('.guess').value
  inputNumber = inputNumber ? Number(inputNumber) : -1
  const gameState = Gues.checkAnswer(inputNumber)
  updateDOM(gameState)
}

const playAgain = () => {
  const gameState = Gues.resetGame()
  document.querySelector('.guess').value = ''
  updateDOM(gameState)
}

export { verifyAnswer, playAgain }
