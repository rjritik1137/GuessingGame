const updateDOM = ({ guessMessage, score, foundTheTarget, target }) => {
  document.querySelector('.message').textContent = guessMessage
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = foundTheTarget ? target : '?'
  const highScoreElement = document.querySelector('.highscore')
  if (foundTheTarget && highScoreElement) {
    const currentScore = Number(highScoreElement.textContent)
    if (score > currentScore) highScoreElement.textContent = score
  }
}
const verifyAnswer = () => {
  if (isGameEnded()) return
  let inputNumber = document.querySelector('.guess').value
  inputNumber = inputNumber ? Number(inputNumber) : -1

  const gameState = checkAnswer(inputNumber)
  console.log(gameState.guessMessage)
  updateDOM(gameState)
}

const playAgain = () => {
  const gameState = resetGame()
  document.querySelector('.guess').value = ''
  updateDOM(gameState)
}
