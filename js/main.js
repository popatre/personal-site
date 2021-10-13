const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    menuNav.classList.add("open");
    nav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    menuNav.classList.remove("open");
    nav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}

// Nav bar off screen when scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

let projectSlider = document.querySelectorAll(".projects__item");

projectSlider.forEach((a) =>
  a.addEventListener("click", function () {
    this.classList.toggle("slider");
    this.classList.toggle("special");

    // setTimeout(() => {
    //   this.classList.remove("special");
    //   this.classList.add("slider");
    // }, 4000);
  })
);
