const GUESS_MESSAGE = {
  TO_LOW: 'To Low ⬇️',
  TO_HIGH: 'To High ⬆️',
  FOUND_THE_ANSWER: 'Found the Number 💥',
  INVALID: 'Please enter a number 😅',
  LOST_THE_GAME: ' Oops! You lost the game, Please try again 🥲',
  GUESS_YOUR_NUMBER: 'Start Guessing',
}

const MAX_SCORE = 10,
  MIN_SCORE = 0,
  MAX_LIMIT_GUESS = 100

function intialiseTarget() {
  let answer = Math.trunc(Math.random() * MAX_LIMIT_GUESS) + 1
  let score = MAX_SCORE
  let gameEnded = false
  const endGame = () => (gameEnded = true)
  const isGameEnded = () => gameEnded
  const getTarget = () => answer
  const getScore = () => score
  const decreaseScore = () => {
    score > MIN_SCORE ? score-- : (gameEnded = true)
  }
  const updateTarget = () => {
    answer = Math.trunc(Math.random() * MAX_LIMIT_GUESS) + 1
    return answer
  }
  const updateScore = () => (score = MAX_SCORE)
  return {
    updateTarget,
    decreaseScore,
    getScore,
    getTarget,
    updateScore,
    isGameEnded,
    endGame,
  }
}
function intialiseGame() {
  let {
    updateTarget,
    decreaseScore,
    getScore,
    getTarget,
    updateScore,
    isGameEnded,
    endGame,
  } = intialiseTarget()
  return {
    updateTarget,
    decreaseScore,
    getScore,
    getTarget,
    updateScore,
    isGameEnded,
    endGame,
  }
}

let {
  updateTarget,
  decreaseScore,
  getScore,
  getTarget,
  updateScore,
  isGameEnded,
  endGame,
} = intialiseGame()

function resetGame() {
  ;({
    updateTarget,
    decreaseScore,
    getScore,
    getTarget,
    updateScore,
    isGameEnded,
    endGame,
  } = intialiseGame())

  return {
    guessMessage: GUESS_MESSAGE.GUESS_YOUR_NUMBER,
    score: getScore(),
    foundTheTarget: false,
    target: getTarget(),
  }
}

const checkAnswer = number => {
  let score = getScore()

  const target = getTarget()
  let foundTheTarget = false
  console.log(target)
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
      endGame()
      break
    }
    case GUESS_MESSAGE.INVALID: {
      decreaseScore()
      break
    }
    case GUESS_MESSAGE.TO_LOW: {
      decreaseScore()
      break
    }
    case GUESS_MESSAGE.TO_HIGH: {
      decreaseScore()
      break
    }
  }
  score = getScore()
  if (score === MIN_SCORE)
    endGame(), (guessMessage = GUESS_MESSAGE.LOST_THE_GAME)
  return {
    guessMessage,
    score,
    foundTheTarget,
    target,
  }
}
