const mysteryNumber = 314

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
    handleMessage(count, 'C\'est un cadenas à 3 chiffres...')
    return
  }

  handleLock(inputNumber)

  if (inputNumber > mysteryNumber) {
    handleMessage(count, 'Trop grand ! Ce n\'est pas le bon code, cherche l\'indice !')
  }
  
  else if (inputNumber < mysteryNumber) {
    handleMessage(count, 'Trop petit ! Ce n\'est pas le bon code, cherche l\'indice !')
  }

  else if (inputNumber === mysteryNumber) {
    handleMessage(count, 'Bien joué bonhomme !!!!')
  }
  
}

handleMessage(0, 'Vite, trouve le bon code ! ils disaient qu\'un indice se trouvait dans la salle...')
