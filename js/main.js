const basketStaterEl = document.querySelector('header .basket-starter')
const basketEl = basketStaterEl.querySelector('.basket')

basketStaterEl.addEventListener('click', function(event) {
    event.stopPropagation()
    if (basketEl.classList.contains('show')) {
        hideBasket()
    } else {
      showBasket()
    }
})
basketEl.addEventListener('click', function(event) {
    event.stopPropagation()
})

window.addEventListener('click', function() {
    hideBasket()
})

function showBasket() {
    basketEl.classList.add('show')
}

function hideBasket() {
    basketEl.classList.remove('show')
}