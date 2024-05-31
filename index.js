let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let scoreHomeValue = 0;
let scoreGuestValue = 0;

function oneHomeScored() {
    scoreHomeValue += 1;
    scoreHome.textContent = scoreHomeValue;
}

function twoHomeScored() {
    scoreHomeValue += 2;
    scoreHome.textContent = scoreHomeValue;
}

function threeHomeScored() {
    scoreHomeValue += 3;
    scoreHome.textContent = scoreHomeValue;
}

function oneGuestScored() {
    scoreGuestValue += 1;
    scoreGuest.textContent = scoreGuestValue;
}

function twoGuestScored() {
    scoreGuestValue += 2;
    scoreGuest.textContent = scoreGuestValue;
}
function threeGuestScored() {
    scoreGuestValue += 3;
    scoreGuest.textContent = scoreGuestValue;
}