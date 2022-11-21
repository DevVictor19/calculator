import "./styles/main.css";

import {
  switchToNextTheme,
  setTheme,
  currentThemeIndex,
} from "./js/themeSwitch";

const switcher = document.getElementById("switch");

// switcher click event
switcher.addEventListener("click", () => {
  switchToNextTheme();
  setSwitcherBtnPositon(currentThemeIndex);
  localStorage.setItem("lastIndexTheme", currentThemeIndex);
});

function setSwitcherBtnPositon(index) {
  const switcherBtnPositions = {
    0: "flex-start",
    1: "center",
    2: "flex-end",
  };

  switcher.style.justifyContent = switcherBtnPositions[index];
}

// load last theme on screen load
window.addEventListener("load", () => {
  setTheme(currentThemeIndex);
  setSwitcherBtnPositon(currentThemeIndex);
});
