const createStripes = (n) => {
  const div = document.querySelector('div.stripes')
  div.innerHTML = ''
  for (let i = 0; i < n; i++) {
    const stripe = document.createElement('div')
    if (i % 2 === 1) {
      stripe.classList.add('plain')
    }
    div.append(stripe)
  }
}


const input = document.querySelector('input')

input.oninput = () => {
  const number = parseFloat(input.value)
  if (isNaN(number) === false) {
    createStripes(number * 2 + 1)
  }
}

createStripes(47)
