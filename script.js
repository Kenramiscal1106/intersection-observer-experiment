let observed = document.querySelectorAll('.observed')

const observe = new IntersectionObserver(observeArray => {
  observeArray.forEach(observeItem => {
    observeItem.target.classList.toggle('show', observeItem.isIntersecting)
    if (observeItem.isIntersecting) observe.unobserve(observeItem.target)
  })
}, {threshold:0.8 })

observed.forEach(observeitem => {
  observe.observe(observeitem)
})