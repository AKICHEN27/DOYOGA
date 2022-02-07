"use strict";

// layout 選單
var menu = document.querySelector('.menu');
var navLink = document.querySelector('.nav-link');
var headerbar = document.querySelector('.header');
menu.addEventListener('click', function () {
  headerbar.classList.toggle('active');
  navLink.classList.toggle('active');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  //一次顯示幾張
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  spaceBetween: 25,
  //間隔
  autoplay: {
    delay: 3000,
    //時間
    disableOnInteraction: false
  }
});
var mySwiperCard = new Swiper(".mySwiperCard", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  spaceBetween: 10,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    }
  }
});
var mySwiperList = new Swiper(".mySwiperList", {
  slidesPerView: 1.4,
  //一次顯示幾張
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  spaceBetween: 10,
  //間隔
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 10,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  },
  autoplay: {
    delay: 3000,
    //時間
    disableOnInteraction: false
  }
});
var swiperListTeacher = new Swiper(".swiperListTeacher", {
  slidesPerView: 1.4,
  //一次顯示幾張
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  spaceBetween: 10,
  //間隔
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 25,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 25,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  },
  autoplay: {
    delay: 3000,
    //時間
    disableOnInteraction: false
  }
});
var swiperClassLevel = new Swiper(".swiperClassLevel", {
  slidesPerView: 1,
  //一次顯示幾張
  spaceBetween: 20,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      spaceBetween: 15,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  },
  autoplay: {
    delay: 3000,
    //時間
    disableOnInteraction: false
  }
});
$(function () {
  $("#my-date").datepicker();
});
//# sourceMappingURL=all.js.map
