hamburgerMenu = document.querySelector(".header__hamburger");
navMenu = document.querySelector(".header__nav");

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("header__nav__clicked");
    hamburgerMenu.classList.toggle("toggle");
});