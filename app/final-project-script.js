'use strict';


// -- swiper gallery, reviews section --
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
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
});


// -- scroll into view, header funkcija --
document.addEventListener('click', function(e) {
    console.log(e.target.hash);
    // If it isn't an anchor element, don't even bother...
    if (e.target.className !== 'scroll') return;

    document.querySelector('.scroll').classList.remove('active');
    console.log(this);
    // this.classList.add('active');

    document.getElementById(e.target.hash).scrollIntoView({ 
        behavior: 'smooth' 
    });
  });


// -- js validation for inputs -- 
var name = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var phone = document.getElementById('phone-number');
var btn = document.getElementById('green-btn');

phone = Number(phone)

btn.addEventListener ('click', function () {
    if (name.value != '' && lastName.value != '' && phone.value != '') {
        name.value = '';
        lastName.value = '';
        phone.value = '';
    }
    else {
        alert('Please fill in the form.');
    }
});
