
    var elmt = document.querySelector("#jeu");
    var victoire = document.querySelector("#victoire");
    var defaite = document.querySelector("#defaite");
    var i = 7;
   
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
        console.log(number)
if(i != 2 && i != 12){ // si la case n'est pas la bombe on applique la logique
        if(!isNaN(number)){
            if (number < numberToGuess) {
                clone.querySelector('span.index').innerHTML = `#${tryCount}`
                clone.querySelector('span.number').innerHTML = number
                clone.querySelector('span.text').innerHTML = 'trop petit !'
                var a = document.getElementById("b"+i);
                    i--;
                    var b = document.getElementById("b"+i);
                    a.className ="fas fa-circle";
                    b.className ="far fa-user-circle";
            }
            else {
                if (number > numberToGuess) {
                    clone.querySelector('span.index').innerHTML = `#${tryCount}`
                    clone.querySelector('span.number').innerHTML = number
                    clone.querySelector('span.text').innerHTML = 'trop grand !'
                    var a = document.getElementById("b"+i);
                    i++;
                    var b = document.getElementById("b"+i);
                    a.className ="fas fa-circle";
                    b.className ="far fa-user-circle";
                }
                else { // problème, l'alert apparait avant l'écran vert, demander au prof
                    clone.querySelector('span.index').innerHTML = `#${tryCount}`
                    clone.querySelector('span.number').innerHTML = number
                    clone.querySelector('span.text').innerHTML = 'gagné !'
                    victoire.style.display = "block"
                    setTimeout(() => {  location.reload(); }, 2000);
                    
                }       
            }
        }
}else{ defaite.style.display = "block"
setTimeout(() => {  location.reload(); }, 2000);} // sinon on à perdu
}

const input = document.querySelector('input')
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const number = parseFloat(input.value)
        input.value = ''
        giveATry(number)
    }
})

