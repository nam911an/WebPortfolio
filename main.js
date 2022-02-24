/*== theme ==*/
const theme = document.getElementById("mybutton");
var r = document.querySelector(':root')
theme.addEventListener("click", function(){
    r.style.setProperty('--first-color', '#927ddb');
    r.style.setProperty('--second-color', '#fff');
    r.style.setProperty('--light-color', '#1a1628');
    document.getElementById("myButton").innerHTML= "Light mode";
});

const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__list");

navToggle.addEventListener('click',function(){
   links.classList.toggle('show-links');
});
/*== carousel with jquery ==*/

// js
const tilt = $('.js-tilt').tilt()
tilt.on('change', function(e, transforms){});

//carousel


/*===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal(    {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


/*SCROLL HOME*/
/*sr.reveal('.home__title',{}); 
/*sr.reveal('.button',{delay: 200}); 
/*sr.reveal('.home__img',{delay: 400}); 
/*sr.reveal('.home__social-icon',{ interval: 200}); 
/*/
/*sr.reveal('#about',{})
/*sr.reveal('.about__subtitle',{delay: 400}); 
/*sr.reveal('.about__text',{delay: 400}); 
/*
/*
/*sr.reveal('.skills__subtitle',{}); 
/*sr.reveal('.skills__text',{}); 
/*sr.reveal('.skills__data',{interval: 200}); 
/*
/* work
/*
/*sr.reveal('#work__title',{});
/*sr.reveal('.about__subtitle',{});
/*
/*/
/*sr.reveal('#contact__title',{}) */
