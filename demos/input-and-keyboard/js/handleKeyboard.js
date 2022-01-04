/**
 * Gère l'incrémentation / décrémentation de la valeur d'un champ de saisie par 
 * l'usage des touches du clavier.
 * @param {HTMLInputElement} input 
 */
export const handleKeyboard = (input, minValue = 1, maxValue = 100) => {

  input.onkeydown = (event) => {
    if (event.code === 'ArrowUp') {
      event.preventDefault()
      let number = parseFloat(input.value)
      if (isNaN(number) === false) {
        number += 1
        if (number > maxValue) {
          number = maxValue
        }
        input.value = number
        input.dispatchEvent(new Event('input'))
      }
    }

    if (event.code === 'ArrowDown') {
      event.preventDefault()
      let number = parseFloat(input.value)
      if (isNaN(number) === false) {
        number += -1
        if (number < minValue) {
          number = minValue
        }
        input.value = number
        input.dispatchEvent(new Event('input'))
      }
    }

    if (event.code === 'Enter') {
      input.blur()
      input.dispatchEvent(new Event('change'))
    }
  }
}