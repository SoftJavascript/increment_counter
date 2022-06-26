const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    // "+" sign to turn target string into number
    const c = +counter.innerText
    const increment = target / 200
    
    if(c < target) {
      counter.innerText = `${Math.ceil(c +increment)}`
      setTimeout(updateCounter,1)
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})