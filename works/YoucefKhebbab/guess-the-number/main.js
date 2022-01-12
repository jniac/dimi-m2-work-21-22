const mysteryNumber = Math.floor(Math.random() * 1000)

const portraits = [
  'assets/portrait1.png',
  'assets/portrait2.png',
  'assets/portrait3.png',
  'assets/portrait4.png',
]

const handleMessage = (portraitIndex, message) => {
  document.querySelector('.dialog .text').innerHTML = message
  const portrait = portraits[portraitIndex]
  document.querySelector('.dialog .portrait').style.backgroundImage = `url(${portrait})`
}

const handleLock = (lockState = 123) => {
  const lockDigits = lockState.toString().padStart(3, '0')
  document.querySelector('.digits .c').innerHTML = lockDigits[0]
  document.querySelector('.digits .d').innerHTML = lockDigits[0]
  document.querySelector('.digits .u').innerHTML = lockDigits[0]
}

const fail = () => {
  alert('perdu!')
}

const input = document.querySelector('input')
let count = 0
const countMax = 4
input.onchange = () => {
  
  const inputNumber = parseFloat(input.value)

  count = count + 1

  if (count === countMax) {
    fail()
    return
  }

  if (isNaN(inputNumber)) {
    handleMessage(count, 'un nombre connard')
    return
  }

  handleLock(inputNumber)

  if (inputNumber > mysteryNumber) {
    handleMessage(count, 'trop grand!!!!')
  }
  
  else if (inputNumber < mysteryNumber) {
    handleMessage(count, 'trop petit!!!!')
  }

  
}

handleMessage(0, 'Vite, trouve le bon code !')
