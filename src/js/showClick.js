const buttonElement = document.querySelectorAll('#click')
console.log(buttonElement)
buttonElement.forEach((btn) => {
  btn.onclick = function () {
    if (btn.value == 1) {
      addHid('myButton', 'hid')
    } else {
      addHid('myButtonTwo', 'hod')
    }
  }
})
// добавить обозначения откуда находим hid
function dops(el1, el2) {
  let my_element = document.querySelectorAll('.' + el1)
  // classList.remove('submit');
  console.log(my_element.length)
  for (let i = 0; i < my_element.length; i++) {
    console.log(i)
    my_element[i].classList.replace(el1, el2)
    // my_element[i].classList.add("visibly");
  }
}

function addHid(str, el) {
  const button = document.getElementById(str)
  if (button.textContent == 'Скрыть') {
    dops('visibly', el)
    button.textContent = 'Показать все'
    if (str == 'myButton') {
      findImg('imageID', './img/svg/aroyDoun.svg')
    } else {
      findImg('imageIDD', './img/svg/aroyDoun.svg')
    }
  } else {
    dops(el, 'visibly')
    button.textContent = 'Скрыть'
    if (str == 'myButton') {
      findImg('imageID', './img/svg/aroyUp.svg')
    } else {
      findImg('imageIDD', './img/svg/aroyUp.svg')
    }

    document.getElementById('imageID').src = './img/svg/aroyUp.svg'
  }
}

function findImg(str, src) {
  document.getElementById(str).src = src
}
