var buttons = [document.querySelector("#feature-link"),
    document.querySelector("#testimonials-link"),
    document.querySelector("#plans-link")
];

var destinations = [
    document.querySelector(".section-features"),
    document.querySelector(".section-testimonials"),
    document.querySelector(".section-plans")
];

var navBarOpen = false;

const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hamburgerLines = document.querySelectorAll(".line");

function smoothScroll(target, duration) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };

    requestAnimationFrame(animation);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        smoothScroll(destinations[i], 1300)
    });
    buttons[i].addEventListener("click", toggleNav);
}

function toggleNav() {
    if (true) {
        navLinks.classList.toggle("nav-links-open");
        menuButton.classList.toggle("hamburger-menu-open");
        navBarOpen = !navBarOpen;
    }

}

window.addEventListener("scroll", function() { if (navBarOpen) scrollTo(0, 0); });

menuButton.addEventListener("click", toggleNav);