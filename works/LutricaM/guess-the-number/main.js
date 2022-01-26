const mysteryNumber = 8

/* const response = document.querySelector('div.response')
 response.remove()

 const cloneResponse = (inputValue, commentValue) => {
   const clone = response.cloneNode(true)
   document.body.append(clone)
   clone.querySelector('span.input').innerHTML = inputValue
   clone.querySelector('span.comment').innerHTML = commentValue
 }*/

const ballonImages = [
  'assets/ballon-1.png',
  'assets/BALLON-2.png',
  'assets/BALLON-4.png',
  'assets/BALLON-9.png',
  'assets/BALLON-11.png',
  'assets/tu-as-perdu.png',
]
let ballonImagesIndex = 0

const avatar = document.querySelector('#avatar')
const ballon = document.querySelector('#ballon')

const submit = () => {
  const input = document.querySelector('input')
  const inputNumber = parseFloat(input.value)

  document.body.classList.remove('wrong-state')

  // on joue l'animation
  avatar.classList.add('animated')
  setTimeout(() => {
    avatar.classList.remove('animated')
  }, 2000)

  // 
  ballonImagesIndex = ballonImagesIndex + 1
  const ballonImage = ballonImages[ballonImagesIndex]
  ballon.style.backgroundImage = `url(${ballonImage})`

  if (isNaN(inputNumber)) {

    // cloneResponse(input.value, `This isn't a number`)
    document.body.classList.add('wrong-state')

  } else if (inputNumber < 0 || inputNumber > 100) {

    // cloneResponse(input.value, `Le nombre doit être compris entre 0 et 100.`)
    document.body.classList.add('wrong-state')

  } else if (inputNumber < mysteryNumber) {

    cloneResponse(input.value, `perdu`)

  } else if (inputNumber > mysteryNumber) {

     cloneResponse(input.value, `perdu`)

  } else if (inputNumber === mysteryNumber) {

     cloneResponse(input.value, `CONGRATS !`)
     
  }

  input.value = ''
}

document.querySelector('#submitButton').onclick = () => {
  submit()
}

document.body.onkeydown = (event) => {
  if (event.key === 'Enter') {
    submit()
  }
}