import GuessGame from '../game'
import { querySelector, updateDOM } from '../domHelper'

const verifyAnswer = () => {
  if (GuessGame.isGameEnded()) return
  const inputElement = querySelector<HTMLInputElement>('guess')
  const inputGuess = inputElement.value ? Number(inputElement.value) : -1
  const gameState = GuessGame.checkAnswer(inputGuess)
  updateDOM(gameState)
}

const playAgain = () => {
  const gameState = GuessGame.resetGame()
  const inputElement = querySelector<HTMLInputElement>('guess')
  inputElement.value = ''
  updateDOM(gameState)
}

export { verifyAnswer, playAgain }
