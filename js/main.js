// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const hDaria = document.querySelector(".lg-heading");
const sm_heading = document.querySelector(".sm-heading");
const icons = document.querySelector(".icons");

// Set Initial State Of Menu to False (meaning closed)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    hDaria.classList.add("shoow");
    navItems.forEach(item => item.classList.add("show"));
    hDaria.classList.add("shoow");
    sm_heading.classList.add("shoow");
    icons.classList.add("shoow");

    // Set Menu State again (it is open now)
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));
    hDaria.classList.remove("shoow");
    sm_heading.classList.remove("shoow");
    icons.classList.remove("shoow");

    // Set Menu State
    showMenu = false;
  }
}

function info() {
  alert("This is a warning message!");
  document.write("This is a warning message!");
}
