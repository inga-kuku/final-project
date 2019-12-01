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
function scroll(e) {
    e.scrollIntoView({behaviour: "smooth", block: "start", inline: "nearest"});
}

document.querySelectorAll('.scroll').forEach((element) => {
    element.addEventListener('click', scroll);
});


// -- js validation for inputs -- 
var name = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var phone = document.getElementById('phone-number');
var btn = document.getElementById('green-btn');
do {
    phone = Number(phone);
}

btn.addEventListener ('click', function () {
    if (name.value && lastName.value && phone.value); {
        value = '';
    }
    else {
        alert('Please fill in the form.');
    }
})
