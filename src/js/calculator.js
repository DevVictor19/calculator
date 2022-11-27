import { splitExpression } from "./utils/splitExpression";
import { clearZerosBeforeDigits } from "./utils/clearZerosBeforeDigits";

const displayText = document.getElementById("displayText");

function appendOnDisplay(value) {
  let maxLength = window.innerWidth > 540 ? 15 : 10;
  const displayTextLength = displayText.innerHTML.length;

  if (displayTextLength >= maxLength) return;

  const expression = displayText.innerText + value;

  displayText.innerText = splitExpression(expression)
    .map(clearZerosBeforeDigits)
    .join("");
}

function resetAllFromDisplay() {
  displayText.innerText = "";
}

function deleteCharFromDisplay() {
  displayText.innerText = displayText.innerText.substring(
    0,
    displayText.innerText.length - 1
  );
}

function handleEquals() {
  const expression = displayText.innerText.replace("x", "*");

  if (/[\+\-\*\/]/.test(expression) && expression.length === 1) return;

  const result = eval(expression);

  if (result === Infinity) {
    alert("Não é possível dividir por 0");
    return;
  }

  displayText.innerText = result;
}

function handleOperators(value) {
  const updatedDisplayText = displayText.innerText + value;

  const hasConsecutiveOperators = /[\+\-\x\/]{2,}/.test(updatedDisplayText);

  if (hasConsecutiveOperators) return;

  appendOnDisplay(value);
}

function handleDecimalDot(value) {
  const updatedDisplayText = displayText.innerText + value;

  const hasTwoDotsInSameNumber = /\d+\.\d+\./.test(updatedDisplayText);
  const hasConsecutiveDots = /\.{2,}/.test(updatedDisplayText);
  const startsWithDot = /\D\./.test(updatedDisplayText);
  const isTheFirstChar = updatedDisplayText.length === 1;

  if (
    hasTwoDotsInSameNumber ||
    hasConsecutiveDots ||
    startsWithDot ||
    isTheFirstChar
  )
    return;

  appendOnDisplay(value);
}

export function handleBtnInputValue(value) {
  if (value === "RESET") {
    resetAllFromDisplay();
    return;
  }

  if (value === "DEL") {
    deleteCharFromDisplay();
    return;
  }

  if (value === "=") {
    handleEquals();
    return;
  }

  if (value === "+" || value === "-" || value === "/" || value === "x") {
    handleOperators(value);
    return;
  }

  if (value === ".") {
    handleDecimalDot(value);
    return;
  }

  appendOnDisplay(value);
}
