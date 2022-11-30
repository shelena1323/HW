const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

const trafficLightE2 = document.querySelector('#trafficLight');

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}

trafficLightE2.addEventListener('click', makeGreen);

const trafficLightE3 = document.querySelector('#trafficLight');

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightE3.addEventListener('click', makeGreen);