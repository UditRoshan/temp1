const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const landingVid = document.querySelector('.landingVid')
const playPauseBtn = document.querySelector('.play')

playPauseBtn.addEventListener('click', ()=>{
  landingVid.play()
  playPauseBtn.style.opacity = "0"
})