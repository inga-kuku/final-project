'use strict';

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 120,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1100: {
        slidesPerView: 2,
      },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })


  var element = document.getElementById('pricing');
    element.scrollIntoView({behaviour: "smooth", block: "start", inline: "nearest"});