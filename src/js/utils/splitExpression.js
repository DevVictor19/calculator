export function splitExpression(expression) {
  const parts = [];
  let currentIndex = 0;

  for (let char of expression) {
    // se não for operador
    if (!/[\+\-\x\/]/.test(char)) {
      if (parts[currentIndex]) {
        parts[currentIndex] += char;
      } else {
        parts.push(char);
      }
    } else {
      parts.push(char);
      currentIndex = parts.length;
    }
  }

  return parts;
}
