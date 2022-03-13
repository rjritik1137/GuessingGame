import GuessGame from '../game'
import { updateDOM } from '../domHelper'

const verifyAnswer = () => {
  if (GuessGame.isGameEnded()) return
  let inputNumber = document.querySelector('.guess').value
  inputNumber = inputNumber ? Number(inputNumber) : -1
  const gameState = GuessGame.checkAnswer(inputNumber)
  updateDOM(gameState)
}

const playAgain = () => {
  const gameState = GuessGame.resetGame()
  document.querySelector('.guess').value = ''
  updateDOM(gameState)
}

export { verifyAnswer, playAgain }
