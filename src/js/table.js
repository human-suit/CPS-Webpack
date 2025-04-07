import work from '../json/works.json'

console.log(work)

for (let index = 0; index < work.name.length; index++) {
  const element = work.name[index]
  let newFloor = document.createElement('div')
  newFloor.className += 'colum'
  addHtml('p', '', element, newFloor)
  addHtml('p', '', work.price[0], newFloor)
  addHtml('p', '', work.time[0], newFloor)
  addHtml('button', `butt redButton${index}`, '', newFloor)
  addHtml('p', 'TextButton', 'Заказать', `.redButton${index}`)
  // addHtml('img', 'ImgStr', '', '.redButton')
}

function addHtml(el, nameClass, text, posit) {
  let element = document.createElement(el)
  if (nameClass != '') {
    addClass(element, nameClass)
  }
  if (text != '') {
    addText(element, text)
  }
  position(posit, element)
}

function position(classFind, el) {
  if (classFind[0] != '.') {
    // console.log(classFind)
    let that = document.querySelector('.grid')
    classFind.appendChild(el)
    that.appendChild(classFind)
  } else {
    let that = document.querySelector(classFind)
    that.appendChild(el)
  }
}

function addClass(el, name) {
  el.className += name
}

function addText(el, text) {
  el.innerHTML = text
}

let that = document.querySelectorAll('ImgStr')

for (let index = 0; index < that.length; index++) {
  const element = that[index]
  element.src = './source/arrows.svg'
}
