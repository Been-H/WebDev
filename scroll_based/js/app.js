const intro = document.querySelector(".intro");
const frontWords = document.querySelector('.front-words');
const airPods = document.querySelector(".front-words__images")
const airPodsImage = airPods.querySelector(".coverImage");
const video = intro.querySelector("video");
const text = frontWords.querySelectorAll("h2");
//END SECTION
const section = document.querySelector(".end-section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes  
let scene = new ScrollMagic.Scene({
        duration: 4300,
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller);

let scene2 = new ScrollMagic.Scene({
        duration: 5000,
        triggerElement: airPods,
        triggerHook: 0
    })
    .setPin(airPods)
    .addTo(controller);

//Video Animation
let accelamount = 0.9;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 33.3);

//AirPodsAnimaiton

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};


let scrollpos2 = 0;
const frameCount = 147;
var currentFrameIndex = 0;
const frameIncreaseInterval = Math.round(5000 / frameCount);
var lastFrameIncrease = 0;
var nextFrameIncrease = frameIncreaseInterval;
const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
);

scene2.on("update", e => {
    scrollpos2 = e.scrollPos;

});

setInterval(() => {
    if (scrollpos2 <= 5000) {
        if (scrollpos2 >= nextFrameIncrease) {
            currentFrameIndex++;
            airPodsImage.src = currentFrame(currentFrameIndex);
            lastFrameIncrease = nextFrameIncrease;
            nextFrameIncrease += frameIncreaseInterval;
        } else if (scrollpos2 < lastFrameIncrease) {
            currentFrameIndex--;
            airPodsImage.src = currentFrame(currentFrameIndex);
            if (lastFrameIncrease != frameIncreaseInterval && nextFrameIncrease != frameIncreaseInterval) {
                lastFrameIncrease -= frameIncreaseInterval;
                nextFrameIncrease -= frameIncreaseInterval;
            }

        }
    }

}, 33.3);

preloadImages();