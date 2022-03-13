import { GUESS_MESSAGE } from './resources/constants'
import { verifyAnswer, playAgain } from './handlers/clickHandler'
import '../style.css'
import { querySelector } from './domHelper'

querySelector('message').textContent = GUESS_MESSAGE.GUESS_YOUR_NUMBER

querySelector('check').addEventListener('click', verifyAnswer)
querySelector('again').addEventListener('click', playAgain)
