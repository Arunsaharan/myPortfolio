// alert('working')

let loader = document.getElementById('pageLoader');

window.addEventListener('load', () => loader.style.display = 'none');


// typed js animation
const typed = document.querySelector('.typed');

if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000
  });
}


// swiper js

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay:{
        delay:2500,
        disableOnInteraction:false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// lazy loading on scroll

const content = document.querySelector('.lazycontent');
window.addEventListener('scroll', () => {
  content.style.bottom = `${window.scrollY}px`;
});
