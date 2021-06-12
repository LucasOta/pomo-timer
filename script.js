// Theming
const root = document.documentElement;

const ThemesEnum = Object.freeze({
  green: {
    bg: "#064420",
    name: "green",
    color: "#ffffff",
  },
  light: {
    bg: "#eeeeee",
    name: "light",
    color: "#161616",
  },
  dark: {
    bg: "#161616",
    name: "dark",
    color: "#eeeeee",
  },
});

setTheme = (theme) => {
  const { bg, color } = ThemesEnum[theme];
  root.style.setProperty("--bg", bg);
  root.style.setProperty("--color", color);
};

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
    clearInterval(interval);
  }
};
