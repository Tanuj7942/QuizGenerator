const startingMinutes = 2;
let time  = 10;

const countdownEl = document.getElementById("timer");
if(time == 0) {
    time = 10;
    resendOTP();
} else {
    setInterval(updateCountdown, 1000)
}

function updateCountdown () {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${(minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${(seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
    time--;
}

function resendOTP () {
    window.location("myntra.com");
}
