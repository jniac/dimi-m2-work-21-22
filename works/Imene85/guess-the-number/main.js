const nbr = Math.round(Math.random()*100)
const response = document.querySelector('span.result')

document.querySelector('button#submit').onclick = () => {

    const input = document.querySelector('input')
    const inputNumber = parseFloat(input.value)
  
    if ( inputNumber < nbr) {
        response.innerHTML = '<h1>Too small.</h1>'
        document.body.style.backgroundColor = '#8e7cdb'
    }

    if (inputNumber > nbr) {
        response.innerHTML = '<h1>Too big.</h1>'
        document.body.style.backgroundColor = '#db7cdb'
    }


    if (inputNumber == nbr) {
        
        response.innerHTML = '<h1>hurrah !</h1>'
        document.body.style.backgroundColor = '#97ffe7'
   }

}
  