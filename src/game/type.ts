import { GUESS_MESSAGE } from '../resources/constants'
type voidFunction = () => void
interface IGameState {
  guessMessage: GUESS_MESSAGE
  score: number
  foundTheTarget: boolean
  target: number
  updateMaxScore: boolean
}

interface IGame {
  resetTarget: voidFunction
  decreaseScore: voidFunction
  getScore: () => number
  getTarget: () => number
  updateScore: voidFunction
  isGameEnded: () => boolean
  endGame: voidFunction
  resetGame: () => IGameState
  getHighScore: () => number
  setHighScore: () => void
  checkAnswer: (number) => IGameState
  //   readonly score: number
  //   readonly highScore: number
  //   readonly gameEnded: boolean
  //   readonly target: number
}

export { IGame, IGameState }
