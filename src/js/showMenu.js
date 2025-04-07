const buttonAdd = document.querySelector('.header__menuBurger')

buttonAdd.onclick = function () {
  findToggle('.aside', 'Block')
  findToggle('.opacity', 'open')
  findToggle('body', 'noscroll')
}

const butSendMess = document.querySelectorAll('#sendMessage')

butSendMess.forEach((element) => {
  element.onclick = function () {
    findToggle('.popup__beakCall', 'Push')
    findToggle('.ariya', 'open')
    findToggle('body', 'noscroll')
  }
})

const butCloseOpacity = document.querySelector('.opacity')

butCloseOpacity.onclick = function () {
  findToggle('.aside', 'close')
  findToggle('.opacity', 'open')
  findToggle('body', 'noscroll')
  setTimeout(() => {
    findToggle('.aside', 'Block')
    findToggle('.aside', 'close')
  }, 1000)
}

const butCloseArya = document.querySelector('.ariya')
const butCloseAryat = document.querySelector('.ariya2')

butCloseArya.onclick = function () {
  findToggle('.popup__beakCall', 'Push')
  findToggle('.ariya', 'open')
  findToggle('body', 'noscroll')
}
butCloseAryat.onclick = function () {
  findToggle('.popup__sellCall', 'Push')
  findToggle('.ariya2', 'open')
  findToggle('body', 'noscroll')
}

const butSendCallClose = document.querySelector('#ex')

butSendCallClose.onclick = function () {
  findToggle('.popup__sellCall', 'Push')
  findToggle('.ariya', 'open')
  findToggle('body', 'noscroll')
}

const butSendMessClose = document.querySelector('.exit__popup')

butSendMessClose.onclick = function () {
  findToggle('.popup__beakCall', 'Push')
  findToggle('.ariya', 'open')
  findToggle('body', 'noscroll')
}

const butSendCal = document.querySelectorAll('#sendCall')

butSendCal.forEach((element) => {
  element.onclick = function () {
    findToggle('.popup__sellCall', 'Push')
    findToggle('.ariya', 'open')
    findToggle('body', 'noscroll')
  }
})

const buttonExit = document.querySelector('.exit')

buttonExit.onclick = function () {
  const pageWidth = window.innerWidth
  if (pageWidth > 1280) {
  } else {
    findToggle('.aside', 'close')
    findToggle('.opacity', 'open')
    findToggle('body', 'noscroll')
    setTimeout(() => {
      findToggle('.aside', 'Block')
      findToggle('.aside', 'close')
    }, 1000)
  }
}

function findToggle(find, classTog) {
  const aside = document.querySelector(find)
  aside.classList.toggle(classTog)
}
