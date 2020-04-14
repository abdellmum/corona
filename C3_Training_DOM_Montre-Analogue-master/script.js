

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");





function clock() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const secondsRatio = seconds * 6;
    const minutesRatio = minutes * 6 + (0.1 * seconds);
    const hoursRatio = hours * 30 + (0.5 * minutes);
    AIGUILLEHR.style.transform = 'rotate(' + hoursRatio + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + minutesRatio + 'deg)';
    AIGUILLESEC.style.transform = 'rotate(' + secondsRatio + 'deg)';
    function playSound() {
        const tick = new Audio('sound/R.m4a');
        if (seconds <= 59) {
            tick.play();
        }
    }
    playSound();
};





setInterval(clock, 1000);