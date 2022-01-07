/*const mysteryNumber = Math.round(Math.random() * 100)

const response = document.querySelector('div.response')
response.remove()

const cloneResponse = (inputValue, commentValue) => {
  const clone = response.cloneNode(true)
  document.body.append(clone)
  clone.querySelector('span.input').innerHTML = inputValue
  clone.querySelector('span.comment').innerHTML = commentValue
}

const submit = () => {
  const input = document.querySelector('input')
  const inputNumber = parseFloat(input.value)

  document.body.classList.remove('wrong-state')

  if (isNaN(inputNumber)) {

    cloneResponse(input.value, `Ceci n'est pas un nombre`)
    document.body.classList.add('wrong-state')

  } else if (inputNumber < 0 || inputNumber > 100) {

    cloneResponse(input.value, `Le nombre doit être compris entre 0 et 100.`)
    document.body.classList.add('wrong-state')

  } else if (inputNumber < mysteryNumber) {

    cloneResponse(input.value, `Trop petit.`)

  } else if (inputNumber > mysteryNumber) {

    cloneResponse(input.value, `Trop grand.`)

  } else if (inputNumber === mysteryNumber) {

    cloneResponse(input.value, `EXACT!!!`)
  }

  input.value = ''
}

document.querySelector('button#submit').onclick = () => {
  submit()
}

document.body.onkeydown = (event) => {
  if (event.key === 'Enter') {
    submit()
  }
}*/

const numberTokenDiv = document.querySelector('div.number-token')
numberTokenDiv.remove()

const randomCloneNumberTokenDiv = (n) => {
  const clone = numberTokenDiv.cloneNode(true)
  document.body.append(clone)

  const x = Math.floor(Math.random() * (window.innerWidth - 30))
  const y = Math.floor(Math.random() * window.innerHeight)
  clone.style.left = `${x}px`
  clone.style.top = `${y}px`
  clone.innerHTML = `#${n}`
}

const generateTokens = () => {
  for (let i = 0; i < 100; i++) {
    randomCloneNumberTokenDiv(i + 1)
  }
}

generateTokens()