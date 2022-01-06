
const numberTokenDiv = document.querySelector('div.number-token')
numberTokenDiv.remove()

const randomCloneNumberTokenDiv = (n) => {
  const clone = numberTokenDiv.cloneNode(true)
  document.body.append(clone)

  const x = Math.floor(Math.random() * (window.innerWidth - 30))
  const y = Math.floor(Math.random() * window.innerHeight)
  clone.style.left = `${x}px`
  clone.style.top = `${y}px`
  clone.innerHTML = `#${n}`
}

const generateTokens = () => {
  for (let i = 0; i < 100; i++) {
    randomCloneNumberTokenDiv(i + 1)
  }
}

generateTokens()
