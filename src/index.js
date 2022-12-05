import "./styles.css";
import { themes } from "./js/themes";

import ThemesController from "./js/themesController";
import Calculator from "./js/calculator";

const themesController = new ThemesController(themes, "lastIndexTheme");
const calculator = new Calculator(document.getElementById("displayText"));

const switcher = document.getElementById("switcher");

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

const calculatorButtons = document.querySelectorAll(".calculator-body__btn");
const calculatorDelButton = document.querySelector(".calculator-body__del");
const calculatorResetButton = document.querySelector(".calculator-body__reset");
const calculatorEqualsButton = document.querySelector(
  ".calculator-body__equals"
);

calculatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculator.append(e.target.innerText);
  });
});

calculatorDelButton.addEventListener("click", () => {
  calculator.delete();
});

calculatorResetButton.addEventListener("click", () => {
  calculator.reset();
});

calculatorEqualsButton.addEventListener("click", () => {
  calculator.resolve();
});
