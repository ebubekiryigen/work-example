const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let seconds = 0;
let minutes = 0;
let interval;

function startTimer() {
    interval = setInterval(function () {
        seconds++;
        if (seconds === 60) {
        seconds = 0;
        minutes++;
        }
        secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
        minutesSpan.textContent = minutes < 10 ? "0" + minutes : minutes;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);