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
