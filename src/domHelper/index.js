export const updateDOM = ({
  guessMessage,
  score,
  foundTheTarget,
  target,
  updateMaxScore,
}) => {
  document.querySelector('.message').textContent = guessMessage
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = foundTheTarget ? target : '?'
  const highScoreElement = document.querySelector('.highscore')

  if (updateMaxScore) {
    highScoreElement.textContent = score
  }
}
