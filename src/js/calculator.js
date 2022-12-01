export class Calculator {
  #displayElement;

  constructor(displayElement) {
    this.#displayElement = displayElement;
  }

  append(value) {
    const updatedDisplay = this.#displayElement.innerText + value;
    const maxLength = window.innerWidth > 540 ? 15 : 10;
    const displayTextLength = updatedDisplay.length;

    if (displayTextLength >= maxLength) return;

    // validar .
    // validar operadores
    // validar zeros antes de numeros

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
