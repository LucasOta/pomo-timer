// Timer
const display = document.querySelector("#timer");
let isTimerPaused = true;
let duration = 25 * 60;
let interval;

const toogleTimer = () => {
  if (isTimerPaused) {
    startTimer();
  } else {
    clearInterval(interval);
    ++duration;
  }
  isTimerPaused = !isTimerPaused;
};

const startTimer = () => {
  --duration;
  updateTimer();
  interval = setInterval(() => {
    updateTimer();
  }, 1000);
};

const updateTimer = () => {
  minutes = parseInt(duration / 60, 10);
  seconds = parseInt(duration % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  display.textContent = `${minutes}:${seconds}`;

  if (--duration < 0) {
    duration = 0;
    clearInterval(interval);
  }
};

const addFiveMinutes = () => {
  duration += 5 * 60;
  updateTimer();
  duration++;
};

const restFiveMinutes = () => {
  if (duration > 5 * 60) {
    duration -= 5 * 60;
    updateTimer();
    duration++;
  } else {
    duration = 0;
  }
};
