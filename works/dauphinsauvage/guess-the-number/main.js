const mysteryNumber = Math.round(Math.random() * 100)
console.log(mysteryNumber);
const response = document.querySelector('div.response')
// response.remove()
var essai = 1

const animals = [
    "chat",
    "bonhommevert",
    "chien",
    "kikou",
    "fleur",
    "fraise",
    "bouli",
    "hibouchien",
    "main",
    "dedicasse"
];



for (var i = 0; i < 100; i++) {
    let mysteryZindex = Math.round(Math.random() * 100);
    let mysteryX = Math.round(Math.random() * 80) + 1;
    let mysteryY = Math.round(Math.random() * 70) + 1;
    let mysteryAnimal = animals[Math.round(Math.random() * 9)];
    let mysteryScale = 0.5 + (Math.random() * 0.6);

    let clone = document.querySelector('#original .dessin').cloneNode(true);

    clone.style.zindex = mysteryZindex;
    clone.style.left = mysteryX + "%";
    clone.style.top = mysteryY + "%";
    clone.style.transform = "scale(" + mysteryScale + ")";
    clone.className += " " + mysteryAnimal;
    clone.querySelector('span.number').innerHTML = i + 1;

    document.querySelector('#cadre').appendChild(clone);
}

const cloneResponse = (inputValue, commentValue) => {
    const clone = response.cloneNode(true)
    document.body.append(clone)
    clone.querySelector('span.input').innerHTML = inputValue
    clone.querySelector('span.comment').innerHTML = commentValue
}

const submit = (el) => {

    //response.innerHTML = essai++;   (compteur)
    const spanNumber = el.querySelector('.number');

    const inputNumber = parseFloat(spanNumber.innerHTML)

    document.body.classList.remove('wrong-state')

    const killElement = () => {
        el.classList.add('killed')
    }
    setTimeout(killElement, 2000)

    if (isNaN(inputNumber)) {
        el.className += " error";
        // cloneResponse(input.value, 'Ceci n'est pas un nombre')
        document.body.classList.add('wrong-state')

    } else if (inputNumber < 0 || inputNumber > 100) {
        el.className += " error disparaitre";
        // cloneResponse(input.value, 'Le nombre doit être compris entre 0 et 100.')
        document.body.classList.add('wrong-state')

    } else if (inputNumber < mysteryNumber) {
        el.className += " plus disparaitre";

        // cloneResponse(input.value, 'Trop petit.')

    } else if (inputNumber > mysteryNumber) {

        el.className += " moins disparaitre";
        // cloneResponse(input.value, 'Trop grand.')

    } else if (inputNumber === mysteryNumber) {

        document.body.classList.add('exact')
        // cloneResponse(input.value, 'EXACT!!!')
    }
}

const dessins = document.querySelectorAll('.dessin')
for (const dessin of dessins) {
    dessin.onclick = () => {
        submit(dessin)
    }
}
    