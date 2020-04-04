// Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu

let showMenu = false;

// Click burger
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // Opens menu
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;

    // Closes menu
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

// Progress bars

$("#progressbar-html").LineProgressbar({
  percentage: 95
});
$("#progressbar-css").LineProgressbar({
  percentage: 90
});
$("#progressbar-js").LineProgressbar({
  percentage: 60
});
$("#progressbar-wp").LineProgressbar({
  percentage: 60
});
$("#progressbar-boot").LineProgressbar({
  percentage: 85
});
$("#progressbar-sass").LineProgressbar({
  percentage: 70
});
$("#progressbar-ruby").LineProgressbar({
  percentage: 50
});
$("#progressbar-python").LineProgressbar({
  percentage: 45
});
$("#progressbar-ps").LineProgressbar({
  percentage: 75
});
$("#progressbar-pencil").LineProgressbar({
  percentage: 70
});
