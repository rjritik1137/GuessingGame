import { IGameState } from '../game/type'

const querySelector = <T extends HTMLElement>(className: string): T => {
  return document.querySelector(`.${className}`)
}

const updateDOM = ({
  guessMessage,
  score,
  foundTheTarget,
  target,
  updateMaxScore,
}: IGameState) => {
  querySelector('message').textContent = guessMessage
  querySelector('score').textContent = score.toString()
  querySelector('number').textContent = foundTheTarget ? target.toString() : '?'
  const highScoreElement = querySelector('highscore')

  if (updateMaxScore) {
    highScoreElement.textContent = score.toString()
  }
}

export { updateDOM, querySelector }
