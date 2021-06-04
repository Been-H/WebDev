const navBar = document.querySelector("header");
var activated = false;

window.addEventListener("scroll", () => {
    navBar.classList.add("header-sticky");
});