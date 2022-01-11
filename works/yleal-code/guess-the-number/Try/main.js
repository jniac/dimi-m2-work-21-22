// https://github.com/jniac/dimi-m2-start-21-22
// https://github.com/jniac/dimi-m2-start-21-22/blob/main/guess-the-number-web/main.js

const mysteryNumber = 78

const screenHome = document.querySelector('.screen.home')
const screenResult = document.querySelector('.screen.result')
const input = document.querySelector('.screen.home input')
const illustration = document.querySelector('.screen.result .illustration')

const submit = () => {
  const inputNumber = parseFloat(input.value)

  screenResult.querySelector('.input-number').innerHTML = input.value
  screenResult.style.visibility = 'visible'

  if (isNaN(inputNumber)) {
    illustration.style.backgroundImage = 'url(assets/nan.png)'
    return
  }

  if (inputNumber < mysteryNumber) {
    
  }
}

const hideResult = () => {
  screenResult.style.visibility = 'hidden'
}

screenHome.querySelector('button').onclick = () => {
  submit()
}

screenResult.querySelector('button').onclick = () => {
  hideResult()
}
