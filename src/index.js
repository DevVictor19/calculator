import "./styles.css";
import { themes } from "./js/themes";

import ThemesController from "./js/themesController";

import { handleBtnInputValue } from "./js/calculator";

const themesController = new ThemesController(themes, "lastIndexTheme");
const switcher = document.getElementById("switcher");
const calculatorBody = document.getElementById("calculatorBody");

const setSwitcherBtnPositon = (index) => {
  let style = null;

  switch (index) {
    case 0:
      style = "flex-start";
      break;
    case 1:
      style = "center";
      break;
    case 2:
      style = "flex-end";
      break;
  }

  switcher.style.justifyContent = style;
};

switcher.addEventListener("click", () => {
  themesController.switchToNextTheme();
  themesController.saveLastTheme();
  setSwitcherBtnPositon(themesController.getCurrentThemeIndex());
});

window.addEventListener("load", () => {
  themesController.setTheme(themesController.getCurrentThemeIndex());
  setSwitcherBtnPositon(themesController.getCurrentThemeIndex());
});

calculatorBody.addEventListener("click", (e) => {
  if (e.target === calculatorBody) return;

  handleBtnInputValue(e.target.innerText);
});
