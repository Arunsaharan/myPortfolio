// page loader animation

let loader = document.getElementById("pageLoader");
let myPageLoader = () => (loader.style.display = "none");
window.addEventListener("load", () => setTimeout(myPageLoader, 2000));

// active links

const activeLoacation = window.location.href;
console.log(activeLoacation);

// sticky navbar on scroll

const target1 = document.getElementById("organisation");
const target2 = document.getElementById("resumeBox");

const addClassSticky = function () {
  let navBar = document.getElementsByClassName("top-navbar");
  for (var i = 0; i < navBar.length; i++) {
    navBar[i].classList.add("stickyNav");
  }
};

const removeClassSticky = function () {
  let navBar = document.getElementsByClassName("top-navbar");
  for (var i = 0; i < navBar.length; i++) {
    navBar[i].classList.remove("stickyNav");
  }
};

const addStickyOnIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    addClassSticky();
  }
};

const removeStickyOnIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    removeClassSticky();
  }
};

const observer1 = new IntersectionObserver(addStickyOnIntersection, {
  threshold: 0,
});
const observer2 = new IntersectionObserver(removeStickyOnIntersection, {
  threshold: 0,
});

observer2.observe(target2);
observer1.observe(target1);

// hamburger-navbar

let hamburger = document.getElementById("hamburger-icon");
let hamburgerMenu = document.getElementById("hamburger-navbar-wrap");

let hamburgerVisible = false;

hamburger.addEventListener("click", () => {
  hamburgerVisible = !hamburgerVisible;
  hamburgerVisible
    ? (hamburgerMenu.style.display = "block")
    : (hamburgerMenu.style.display = "none");
});

// lazy loading website content

function reveal() {
  let revealItem = document.querySelectorAll(".reveal");

  for (var i = 0; i < revealItem.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealItem[i].getBoundingClientRect().top;
    let revealPoint = 70;

    if (revealTop < windowHeight - revealPoint) {
      revealItem[i].classList.add("active");
    } else {
      revealItem[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// typed js animation
const typed = document.querySelector(".typed");

if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
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
