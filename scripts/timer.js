const audio = new Audio("./assets/alert.mp3");
const defaultBreak = 5 * 60;
const defaultInterval = 25 * 60;
const defaultMargin = 5 * 60;
const display = document.querySelector("#timer");
let interval;
let isTimerPaused = true;
let isBreak = false;
let duration = defaultInterval;

const addTime = () => {
  duration += defaultMargin;
  updateTimer();
};

const restTime = () => {
  duration > defaultMargin ? (duration -= defaultMargin) : (duration = 0);
  updateTimer();
};

const startTimer = () => {
  interval = setInterval(() => {
    if (--duration < 0) {
      duration = 0;
      timeIsUp();
    }
    updateTimer();
  }, 1000);
};

const timeIsUp = () => {
  clearInterval(interval);
  audio.play();
  let message;
  if (isBreak) {
    duration = defaultInterval;
    message = "Sorry, we should keep working.";
  } else {
    duration = defaultBreak;
    message = "Coffee time! Break is here.";
  }
  isBreak = !isBreak;
  confirm(message) ? startTimer() : updateTimer();
};

const toogleTimer = () => {
  isTimerPaused ? startTimer() : clearInterval(interval);
  isTimerPaused = !isTimerPaused;
};

const updateTimer = () => {
  let minutes = parseInt(duration / 60, 10);
  let seconds = parseInt(duration % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  display.textContent = `${minutes}:${seconds}`;
};
