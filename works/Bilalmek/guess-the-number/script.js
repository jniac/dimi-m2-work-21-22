const outputSource = document.querySelector('div.output')
outputSource.remove()

// ici "numberToGuess" doit prendre une valeur aléatoire entre 1 et 100
// Math.random() => entre 0 et 1
var numberToGuess = Math.floor(Math.random() * 100 + 1);
let tryCount = 0

const giveATry = (number) => {
    const clone = outputSource.cloneNode(true)
    document.querySelector('main').append(clone);

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
            clone.querySelector('span.text').innerHTML = 'Bravo vous avez gagné + !'
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

// Timer minuteur
let time_minutes = 1; // Value in minutes
let time_seconds = 30; // Value in seconds


let duration = time_minutes * 60 + time_seconds;

// Recuperation de l'élément Html

element = document.querySelector('#count-down-timer');

// Functionn

function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
 }
 
 console.log(paddedFormat(3));
 console.log(paddedFormat(12));

 element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

// Start Compteur

startCountDown(--duration, element);

// Interval minuteur seconde

function startCountDown(duration, element) {
    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;
    
    let countInterval = setInterval(function () {
    
        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);
    
        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
    
        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };
    
    }, 1000);
}

//  Varibale Minute

let secondsRemaining = 89;
let min = parseInt(secondsRemaining / 60);
let sec = parseInt(secondsRemaining % 60);

console.log(secondsRemaining + "seconds");
console.log(min);
console.log(sec);

// Texte Minuteur

element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

// Modale
function btnModale(){
    alert ("Bonjour,  Bienvenu sur le Jeu, Vous avez 1 minutes 30 pour trouvé le bon chriffre,  Bonne chance");
}

//
var marc = {
    nom: 'Marc',
    age: 50,
}

