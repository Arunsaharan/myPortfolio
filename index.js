// alert('working')

let loader = document.getElementById('pageLoader');

window.addEventListener('load', () => loader.style.display = 'none');

// sticky navbar on scroll

const target = document.getElementById('organisation');

const addClassSticky = function() {
  let navBar = document.getElementsByClassName('top-navbar');
  for (var i = 0; i < navBar.length; i++) {
    navBar[i].className += ' stickyNav';
  }
}

const addStickyOnIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    addClassSticky();
  }
  observer.unObserve(target);
}

const observer = new IntersectionObserver(addStickyOnIntersection, {
  threshold: 1
});

observer.observe(target);



// lazy loading website content


function reveal() {
  let revealItem = document.querySelectorAll('.reveal');

  for (var i = 0; i < revealItem.length; i++) {

    let windowHeight = window.innerHeight;
    let revealTop = revealItem[i].getBoundingClientRect().top;
    let revealPoint = 70;

    if (revealTop < windowHeight - revealPoint) {
      revealItem[i].classList.add('active');
    } else {
      revealItem[i].classList.remove('active')
    }

  }
}


window.addEventListener('scroll', reveal);




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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
