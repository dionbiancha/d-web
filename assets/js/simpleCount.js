let start // set on the first step to the timestamp provided
const el = document.getElementById('count') // get the element
const final = parseInt(el.textContent, 10) // parse out the final number
const duration = 5000 // duration in ms
const step = ts => {
  if (!start) {
    start = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start) / duration 

  el.textContent = Math.floor(progress * final) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step) 
  }
}

// start the animation
requestAnimationFrame(step)