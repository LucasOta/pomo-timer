const root = document.documentElement;
const darkThemeIcon = document.getElementById("moon");
const darkMenu = document.getElementById("darkMenu");
const lightThemeIcon = document.getElementById("sun");
const lightMenu = document.getElementById("lightMenu");
const ThemesEnum = Object.freeze({
  light: { bg: "#eeeeee", color: "#161616" },
  dark: { bg: "#161616", color: "#eeeeee" },
});
let currentTheme = ThemesEnum.light;

const setDarkTheme = () => {
  setTheme(ThemesEnum.dark);
  darkThemeIcon.style.display = "none";
  darkMenu.style.display = "none";
  lightThemeIcon.style.display = "block";
  lightMenu.style.display = "block";
};

const setLightTheme = () => {
  setTheme(ThemesEnum.light);
  lightThemeIcon.style.display = "none";
  lightMenu.style.display = "none";
  darkThemeIcon.style.display = "block";
  darkMenu.style.display = "block";
};

const setTheme = (theme) => {
  currentTheme = theme;
  const { bg, color } = theme;
  root.style.setProperty("--bg", bg);
  root.style.setProperty("--color", color);
};

const toogleTheme = () => {
  switch (currentTheme) {
    case ThemesEnum.light:
      setDarkTheme();
      break;
    case ThemesEnum.dark:
      setTheme(ThemesEnum.light);
      setLightTheme();
      break;
  }
};
