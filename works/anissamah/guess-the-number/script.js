const outputSource = document.querySelector('div.output')
outputSource.remove()

// ici "numberToGuess" doit prendre une valeur aléatoire entre 1 et 100
// Math.random() => entre 0 et 1
var numberToGuess = Math.floor(Math.random() * 100 + 1);
let tryCount = 0

const giveATry = (number) => {
    const clone = outputSource.cloneNode(true)
    document.querySelector('main').append(clone)

    tryCount = tryCount + 1

    // ici doit se trouver un test entre 'number' et 'numberToGuess'
    // if () {}
    if (number < numberToGuess) {
        clone.querySelector('span.index').innerHTML = `#${tryCount}`
        clone.querySelector('span.number').innerHTML = number
        clone.querySelector('span.text').innerHTML = 'trop petit !'
        document.body.style.backgroundColor = '#ff8d00'
    }
    else {
        if (number > numberToGuess) {
            clone.querySelector('span.index').innerHTML = `#${tryCount}`
            clone.querySelector('span.number').innerHTML = number
            clone.querySelector('span.text').innerHTML = 'trop grand !'
            document.body.style.backgroundColor = 'red'
        }
        else {
            clone.querySelector('span.index').innerHTML = `#${tryCount}`
            clone.querySelector('span.number').innerHTML = number
            clone.querySelector('span.text').innerHTML = 'gagné !'
            document.body.style.backgroundColor = '#33ed41'
        }       
    }
    
}

const input = document.querySelector('input')
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const number = parseFloat(input.value)
        input.value = ''
        giveATry(number)
    }
})