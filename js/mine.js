// Scroll Navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
    document.getElementById("nav-mobile").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-132px";
    document.getElementById("nav-mobile").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Open Mobile Menu
var hamburger = document.querySelector(".nav-mobile__hamburger");
var menuNav = document.getElementById("navigation");
hamburger.addEventListener("click", openMobileMenu);

function openMobileMenu() {  
  if (hamburger.classList.contains("close")) {
    hamburger.classList.add("open");
    hamburger.classList.remove("close");
    menuNav.classList.add("show");
    document.body.classList.add("hidden");
  } else {
    hamburger.classList.add("close");
    hamburger.classList.remove("open");
    menuNav.classList.remove("show");
    document.body.classList.remove("hidden");
  }
  
}