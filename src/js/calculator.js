import { splitExpression } from "./utils/splitExpression";
import { clearZerosBeforeDigits } from "./utils/clearZerosBeforeDigits";

export class Calculator {
  #displayElement;

  constructor(displayElement) {
    this.#displayElement = displayElement;
  }

  append(value) {
    let updatedDisplay = this.#displayElement.innerText + value;
    const maxLength = window.innerWidth > 540 ? 15 : 10;
    const displayTextLength = updatedDisplay.length;

    if (displayTextLength >= maxLength) return;

    const hasTwoDotsInSameNumber = /\d+\.\d+\./.test(updatedDisplay);
    const hasConsecutiveDots = /\.{2,}/.test(updatedDisplay);
    const startsWithDot = /\D\./.test(updatedDisplay);

    if (hasTwoDotsInSameNumber || hasConsecutiveDots || startsWithDot) return;

    const hasConsecutiveOperators = /[\+\-\x\/]{2,}/.test(updatedDisplay);

    if (hasConsecutiveOperators) return;

    if (updatedDisplay.includes("0")) {
      updatedDisplay = splitExpression(updatedDisplay)
        .map(clearZerosBeforeDigits)
        .join("");
    }

    this.#insert(updatedDisplay);
  }

  reset() {
    this.#insert("");
  }

  delete() {
    let str = this.#displayElement.innerText;
    str = str.slice(0, str.length - 1);
    this.#insert(str);
  }

  resolve() {
    const expression = this.#displayElement.innerText.replace("x", "*");

    if (/[\+\-\*\/]/.test(expression) && expression.length === 1) return;

    const result = eval(expression);

    if (result === Infinity) {
      alert("Não é possível dividir por 0");
      return;
    }

    this.#insert(result);
  }

  #insert(value) {
    this.#displayElement.innerText = value;
  }
}

export default Calculator;
