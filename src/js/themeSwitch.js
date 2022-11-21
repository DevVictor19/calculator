import { themes } from "./themes";

export function setTheme(index) {
  const selectedTheme = themes[index];

  for (let prop in selectedTheme) {
    document.documentElement.style.setProperty(prop, selectedTheme[prop]);
  }
}

let currentThemeIndex = 0;

export function switchToNextTheme() {
  const maxThemeIndex = themes.length - 1;

  if (currentThemeIndex === maxThemeIndex) {
    currentThemeIndex = 0;
  } else {
    currentThemeIndex++;
  }

  setTheme(currentThemeIndex);

  return currentThemeIndex;
}
