const nbr = Math.round(Math.random()*100)
const response = document.querySelector('span.result')


let x = 0;
let y = 0;

for (var i = 1; i < 100; i++) {
  	
	if ((i % 12) == 0) {
		x = 0
		y += 20
	} else {
	    x += 8;
	}

    let clone = document.querySelector('#cadre .carte').cloneNode(true);

    clone.style.left = x + "%";
    clone.style.top = y + "%";
    clone.querySelector('span.number').innerHTML = i + 1;

    document.querySelector('#cadre').appendChild(clone);
}

const submit = (el) => {

    const spanNumber = el.querySelector('.number');
    const inputNumber = parseFloat(spanNumber.innerHTML)


	if (inputNumber < nbr) {
        el.className = "higher";
		spanNumber.className = "response"
		spanNumber.innerHTML = "Higher !!"
    } else if (inputNumber > nbr) {
        el.className = "lower";
		spanNumber.className = "response"
		spanNumber.innerHTML = "Lower !!"
    } else if (inputNumber === nbr) {
		el.className = "win";
		spanNumber.className = "response"
		spanNumber.innerHTML = "Winner !!"
        
    }
}


const cartes = document.querySelectorAll('.carte')
for (const carte of cartes) {
    carte.onclick = () => {
        submit(carte)
    }
}
  