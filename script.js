// ==========================
// ELEMENTS
// ==========================

const gameTimer = document.getElementById("gameTimer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// ==========================
// TIMER VARIABLES
// ==========================

let elapsedTime = 0;
let startTime = null;
let timerInterval = null;
let isRunning = false;

// ==========================
// FORMAT TIME
// ==========================

function formatTime(milliseconds) {

    const totalSeconds = Math.floor(milliseconds / 1000);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    return (
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0")
    );
}

// ==========================
// UPDATE DISPLAY
// ==========================

function updateDisplay() {

    let currentTime = elapsedTime;

    if (isRunning) {
        currentTime += Date.now() - startTime;
    }

    gameTimer.textContent = formatTime(currentTime);
}

// ==========================
// START TIMER
// ==========================

function startTimer() {

    if (isRunning) return;

    startTime = Date.now();

    isRunning = true;

    timerInterval = setInterval(updateDisplay, 200);

}

// ==========================
// PAUSE TIMER
// ==========================

function pauseTimer() {

    if (!isRunning) return;

    elapsedTime += Date.now() - startTime;

    clearInterval(timerInterval);

    timerInterval = null;

    isRunning = false;

    updateDisplay();

}

// ==========================
// RESET TIMER
// ==========================

function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    startTime = null;

    isRunning = false;

    updateDisplay();

}

// ==========================
// BUTTON EVENTS
// ==========================

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

// ==========================
// INITIAL DISPLAY
// ==========================

updateDisplay();
