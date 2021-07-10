const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const image = document.querySelector("#slider");
var images = ['./img/pc.png', './img/matebook.png', './img/keyboard.png'];
const dots = document.querySelectorAll(".dot");
var dotSRCs = ['./img/dot.svg', './img/dot-full.svg'];
var current = 1;
var last = 1;

function cleanCurrent(current) {
    if (current < 0) {
        return 2;
    } else if (current > 2) {
        return 0;
    } return current;
}

function setDots(last, current) {
    dots[last].src = dotSRCs[0];
    dots[current].src = dotSRCs[1];
}

leftArrow.addEventListener("click", () => {
    last = current;
    current = cleanCurrent(current- 1);
    setDots(last, current);
    image.src = images[current];
})

rightArrow.addEventListener("click", () => {
    last = current;
    current = cleanCurrent(current + 1);
    setDots(last, current);
    image.src = images[current];
})

