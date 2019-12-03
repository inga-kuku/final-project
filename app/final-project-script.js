'use strict';

window.onload = function () {

    // -- tabs switch on square buttons --

    let squareBtns = document.querySelectorAll('.square-btns input'); 
    let tabGallery = document.querySelectorAll('.tabGallery');
    let tabText = document.querySelectorAll('.tabText');

    for (let sqrItem of squareBtns) { // 
        sqrItem.addEventListener('click', function (e) {
        
            [].forEach.call(tabText, function (el) { //
                el.classList.remove("on"); // on funkcija is html
            });
            [].forEach.call(tabGallery, function (el) { // ciklas pereina ir nuima
                el.classList.remove("on");
            });

            e.target.className = "on";
            let getID = sqrItem.getAttribute('id'); // priskiri kad galetum idet i funkcija
        
            let idGroup = document.querySelectorAll('.'+getID); // input id prsikirta galerijai klasei ir desciption
            [].forEach.call(idGroup, function (el) { 
                el.classList.add("on"); // abiem blokam uzdedam, nes jie yra du for each group
            });
    
    });
};

    // -- swiper gallery, reviews section --

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 90,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        breakpoints: {
            1100: {
                slidesPerView: 3,
            },
            350: {
                slidesPerView: 1,
                spaceBetween: 20,
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

    let anchorlinks = document.querySelectorAll('.scroll')

    for (let item of anchorlinks) {

        item.addEventListener('click', (e) => {
            var elems = document.querySelectorAll(".active");
            [].forEach.call(elems, function (el) {
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
            // document.getElementById('mobileMenu').style.display = 'none';
            // document.getElementById('menuClose').style.display = 'none';
            e.preventDefault()
        })
    }

    // -- js validation for top form -- 

    var name = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var phone = document.getElementById('phone-number');
    var btn = document.getElementById('green-btn');
    var radio1 = document.getElementById('radio_1');
    var radio2 = document.getElementById('radio_2');

    btn.addEventListener('click', function () {
        if (name.value != '' && lastName.value != '' && phone.value != '' && radio1 || radio2 ) {
            name.value = '';
            lastName.value = '';
            phone.value = null;
        }
        else {
            alert('Please fill in the form.');
        }
    });

    // -- js validation for bottom form --

    var name2 = document.getElementById('first-name2');
    var lastName2 = document.getElementById('last-name2');
    var phone2 = document.getElementById('phone-number2');
    var btn2 = document.getElementById('green-btn2');
    var radio = document.getElementById('radio_1_2');
    var radioRadio = document.getElementById('radio_2_2');

    btn2.addEventListener('click', function () {
        if (name2.value != '' && lastName2.value != '' && phone2.value != '' && radio.checked || radioRadio.checked ) {
            name2.value = '';
            lastName2.value = '';
            phone2.value = null;
            radio.checked = false;
            radioRadio.checked = false;
        }
        else {
            alert('Please fill in the form.');
        }
    });
}
