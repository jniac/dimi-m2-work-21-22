
const input = document.querySelector('input')

input.oninput = () => {
  document.body.classList.add('input-anim')
}

input.onchange = () => {
  document.body.classList.add('change-anim')
}

document.body.onanimationend = () => {
  document.body.classList.remove('input-anim')
  document.body.classList.remove('change-anim')
}
