function hiddingAdd(where, allSerch, addClass, kol) {
  const elements = document.querySelector(where).querySelectorAll(allSerch)
  console.log(elements)
  for (let index = elements.length - 1; index > kol; index--) {
    const element = elements[index]
    element.classList.add(addClass)
  }
}

export { hiddingAdd }
