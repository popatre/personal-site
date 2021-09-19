const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {
            hamburger.classList.add('open');
            menuNav.classList.add('open');
            nav.classList.add('open');
            navItems.forEach(item => item.classList.add('open'));
            showMenu = true;

    } else {
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

// Nav bar off screen when scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    setTimeout(() => {
    document.querySelector(".nav").style.top = "-75px";
  }, 500);
  }
  prevScrollpos = currentScrollPos;
}

// name animation // 
anime({
  targets: '#tester path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInElastic(1, 0.9)',
  duration: 2500,
  delay: function(el, i) { return i * 200 },
  direction: 'alternate',
  loop: false
});

//  timeout for name animation 

setTimeout(() => {
  let aaa = document.querySelector('#tester');
aaa.classList.add('add');
}, 9000);

setTimeout(() => {
  let aaa = document.querySelector('#tester');
aaa.classList.add('addtwo');
}, 9000);