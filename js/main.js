new Swiper('.reviews__swiper-slider', {

  navigation: {
    nextEl: '.prev',
    prevEl: '.next'
  },
  pagination: {
    el: '.fraction',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + '/' +
        '<span class="' + totalClass + '"></span>';
    }
  },


  simulateTouch: true,
  touchRatio: 0.7,
  grabCursor: true,
  slideToClickedSlide: true,
  autoHeight: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  speed: 800,
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 1,
      touchRatio: 1,
      touchAngle: 45,
      pagination: {
        el: '.bullets',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      }
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 66
    }
  }
});


