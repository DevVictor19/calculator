import { setTheme, switchToNextTheme } from "./js/themeSwitch";
import "./styles/main.css";

const switcher = document.getElementById("switch");

switcher.addEventListener("click", () => {
  const currentIndexTheme = switchToNextTheme();

  switch (currentIndexTheme) {
    case 0:
      switcher.style.justifyContent = "flex-start";
      break;
    case 1:
      switcher.style.justifyContent = "center";
      break;
    case 2:
      switcher.style.justifyContent = "flex-end";
      break;
  }
});
