let time  = 10;

const countdownEl = document.getElementById("timer");

setInterval(updateCountdown, 1000);

function updateCountdown () {
    if (time === 0) {
        time = 10;
        document.getElementById("new-otp-msg").style.visibility = "visible";
        // window.location.href = "https://myntra.com";
    }
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${(minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${(seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
    time--;
}
