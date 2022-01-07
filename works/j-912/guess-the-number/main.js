var Vbase = 0

const mysteryNumber = Math.round(Math.random() * 100)

const baliseVbase = document.querySelector('h2.baliseVbase')
baliseVbase.innerHTML = `Valeur de base : ${Vbase}`

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

  var inputVbase = Vbase + inputNumber

  document.body.classList.remove('wrong-state')

  if (isNaN(inputVbase)) { // si pas un nombre

    cloneResponse(input.value, `Ceci n'est pas un nombre`)
    document.body.classList.add('wrong-state') // anime erreur

  } else if (inputVbase < 0 || inputVbase > 100) { //si n'est pas entre 0 et 100

    cloneResponse(input.value, `Le nombre doit être compris entre 0 et 100.`)
    document.body.classList.add('wrong-state') // anime erreur

} else if (inputVbase < mysteryNumber) { // si plus petit que mysteryNumber

    cloneResponse(inputVbase, `Trop petit.`)
    Vbase = inputVbase
    baliseVbase.innerHTML = `Valeur de base : ${Vbase}` //refresh affichage Vbase

  } else if (inputVbase > mysteryNumber) { // si plus grand que mysteryNumber

    cloneResponse(inputVbase, `Trop grand.`)
    Vbase = inputVbase
    baliseVbase.innerHTML = `Valeur de base : ${Vbase}` //refresh affichage Vbase

  } else if (inputVbase === mysteryNumber) { // si égal à mysteryNumber

    cloneResponse(inputVbase, `EXACT!!!`)
    Vbase = inputVbase
    baliseVbase.innerHTML = `Valeur de base : ${Vbase}` //refresh affichage Vbase
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
}