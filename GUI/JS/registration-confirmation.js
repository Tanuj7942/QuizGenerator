const startingMinutes = 2;
let time  = startingMinutes * 60;

const countdownEl = document.getElementById("timer");

setInterval(updateCountdown, 1000);

function updateCountdown () {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${0}${minutes}:${seconds}`;
    time--;
}