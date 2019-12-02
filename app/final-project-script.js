'use strict';


// -- swiper gallery, reviews section --
window.onload = function () {
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
​
// -- scroll into view, header funkcija --
let anchorlinks = document.querySelectorAll('.scroll')
 
for (let item of anchorlinks) { 
    
    item.addEventListener('click', (e)=> {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        e.target.className = "active";
        anchorlinks.classList
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
​
    // -- js validation for inputs -- 
    var name = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var phone = document.getElementById('phone-number');
    var btn = document.getElementById('green-btn');
​
    btn.addEventListener ('click', function () {
        if (name.value != '' && lastName.value != '' && phone.value != '') {
            name.value = '';
            lastName.value = '';
            phone.value = null;
        }
        else {
            alert('Please fill in the form.');
        }
    });
}
