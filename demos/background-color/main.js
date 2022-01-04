
document.body.onpointermove = (event) => {
  const x = event.x / window.innerWidth
  const y = event.y / window.innerHeight

  const hue = (250 + 50 * x).toFixed(1)
  const lum = (45 + 30 * y).toFixed(1)
  document.body.style.backgroundColor = `hsl(${hue}, 76%, ${lum}%)`
}