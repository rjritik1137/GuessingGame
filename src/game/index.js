import { generateRandomTarget } from '../helpers/index'
import {
  GUESS_MESSAGE,
  MAX_LIMIT_GUESS,
  MAX_SCORE,
  MIN_SCORE,
} from '../resources/constants'

class Game {
  constructor() {
    this.score = 10
    this.highScore = 0
    this.gameEnded = false
    this.target = generateRandomTarget(MAX_LIMIT_GUESS)
    this.highScore = 0
  }
  resetTarget = () => {
    this.target = generateRandomTarget(MAX_LIMIT_GUESS)
  }

  decreaseScore = () => {
    this.score > MIN_SCORE ? this.score-- : (this.gameEnded = true)
  }
  getScore = () => this.score
  getTarget = () => this.target
  updateScore = () => {
    this.score = MAX_SCORE
  }
  isGameEnded = () => this.gameEnded
  endGame = () => {
    this.gameEnded = true
  }
  resetGame = () => {
    this.score = 10
    this.gameEnded = false
    this.target = generateRandomTarget(MAX_LIMIT_GUESS)
    return {
      guessMessage: GUESS_MESSAGE.GUESS_YOUR_NUMBER,
      score: this.score,
      foundTheTarget: false,
      target: this.target,
      updateMaxScore: false,
    }
  }

  getHighScore = () => this.highScore
  setHighScore = score =>
    (this.highScore = Math.max(this.highScore, score ? score : this.score))

  checkAnswer = number => {
    const target = this.target

    let foundTheTarget = false
    let guessMessage =
      number === -1
        ? GUESS_MESSAGE.INVALID
        : number === target
        ? GUESS_MESSAGE.FOUND_THE_ANSWER
        : number > target
        ? GUESS_MESSAGE.TO_HIGH
        : GUESS_MESSAGE.TO_LOW
    switch (guessMessage) {
      case GUESS_MESSAGE.FOUND_THE_ANSWER: {
        foundTheTarget = true
        this.endGame()
        this.setHighScore()
        break
      }
      case GUESS_MESSAGE.INVALID: {
        this.decreaseScore()
        break
      }
      case GUESS_MESSAGE.TO_LOW: {
        this.decreaseScore()
        break
      }
      case GUESS_MESSAGE.TO_HIGH: {
        this.decreaseScore()
        break
      }
    }
    if (this.getScore() === MIN_SCORE)
      this.endGame(), (guessMessage = GUESS_MESSAGE.LOST_THE_GAME)
    return {
      guessMessage,
      score: this.getScore(),
      foundTheTarget,
      target,
      updateMaxScore:
        foundTheTarget && this.getScore() >= this.getHighScore() ? true : false,
    }
  }
}

const GuessGame = new Game()

export default GuessGame
