// console.log('1')
import { hiddingAdd } from '../js/hidding'
// import Swiper JS
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const pageWidth = window.innerWidth

let setParam = {
  loop: false,
  allowTouchMove: false,
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row'
  }
}

function calc(pageWidth, setParam) {
  if (pageWidth < 676) {
    delete setParam.slidesPerView
  } else if (pageWidth > 676) {
    setParam.slidesPerView = 1
  }
}

calc(pageWidth, setParam)

window.addEventListener('resize', (pageWidth) => {
  pageWidth = window.innerWidth
  calc(pageWidth, setParam)
  console.log(pageWidth)
  console.log(setParam)
  return pageWidth
})
console.log(pageWidth)
console.log(setParam)

const setting = {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.swiper-button-next'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  breakpoints: {
    676: setParam,
    900: setParam
  }
}

if (pageWidth > 686) {
  let el1 = '#container > .swiper > .swiper-container > .swiper-wrapper',
    el2 = '.swiper-slide'
  hiddingAdd(el1, el2, 'hid', 7)
  let el3 = '#types > .swiper > .swiper-container > .swiper-wrapper',
    el4 = '.swiper-slide'
  hiddingAdd(el3, el4, 'hod', 3)
}

const swiper = new Swiper('.swiper-container', setting)
