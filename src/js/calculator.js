export class Calculator {
  #displayElement;

  constructor(displayElement) {
    this.#displayElement = displayElement;
  }

  handleInput(value) {
    switch (value) {
      case "DEL":
        this.#delete();
        break;
      case "RESET":
        this.#reset();
        break;
      case "=":
        this.#resolve();
        break;
      default:
        this.#append(value);
        break;
    }
  }

  #insert(value) {
    this.#displayElement.innerText = value;
  }

  #append(value) {
    const updatedDisplay = this.#displayElement.innerText + value;
    const maxLength = window.innerWidth > 540 ? 15 : 10;
    const displayTextLength = updatedDisplay.length;

    if (displayTextLength >= maxLength) return;

    // validar zeros antes de numeros
    // validar .
    // validar operadores

    this.#insert(updatedDisplay);
  }

  #reset() {
    this.#insert("");
  }

  #delete() {
    let str = this.#displayElement.innerText;
    str = str.slice(0, str.length - 1);
    this.#insert(str);
  }

  #resolve() {
    const expression = this.#displayElement.innerText.replace("x", "*");

    if (/[\+\-\*\/]/.test(expression) && expression.length === 1) return;

    const result = eval(expression);

    if (result === Infinity) {
      alert("Não é possível dividir por 0");
      return;
    }

    this.#insert(result);
  }
}

export default Calculator;
