const displayText = document.getElementById("displayText");

function insertOnDisplay(value) {
  displayText.innerText += value;
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

function handleOperators(value) {
  const updatedDisplayText = displayText.innerText + value;

  const hasConsecutiveOperators = /[\+\-\x\/]{2,}/.test(updatedDisplayText);
  const isTheFirstChar = updatedDisplayText.length === 1;

  if (hasConsecutiveOperators || isTheFirstChar) return;

  insertOnDisplay(value);
}

function handleDecimalDot(value) {
  const updatedDisplayText = displayText.innerText + value;

  const hasTwoDotsInSameNumber = /\d+\.\d+\./.test(updatedDisplayText);
  const hasConsecutiveDots = /\.{2,}/.test(updatedDisplayText);
  const isTheFirstChar = updatedDisplayText.length === 1;

  if (hasTwoDotsInSameNumber || hasConsecutiveDots || isTheFirstChar) return;

  insertOnDisplay(value);
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

  if (value === "+" || value === "-" || value === "/" || value === "x") {
    handleOperators(value);
    return;
  }

  if (value === ".") {
    handleDecimalDot(value);
    return;
  }

  insertOnDisplay(value);
}
