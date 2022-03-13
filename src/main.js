import { GUESS_MESSAGE } from './resources/constants'
import { verifyAnswer, playAgain } from './handlers/clickHandler'
import '../style.css'

document.getElementsByClassName('message')[0].textContent =
  GUESS_MESSAGE.GUESS_YOUR_NUMBER

document.querySelector('.check').addEventListener('click', verifyAnswer)
document.querySelector('.again').addEventListener('click', playAgain)
