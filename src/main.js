document.getElementsByClassName('message')[0].textContent =
  GUESS_MESSAGE.GUESS_YOUR_NUMBER

document.querySelector('.check').addEventListener('click', verifyAnswer)
document.querySelector('.again').addEventListener('click', playAgain)
