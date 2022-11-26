export function splitExpression(expressionStr) {
  let lasWasOperator = false;
  const expressionParts = [];
  let currentIndex = 0;

  for (let char of expressionStr) {
    if (lasWasOperator) currentIndex++;

    if (!/[\+\-\x\/]/.test(char)) {
      lasWasOperator = false;
      if (expressionParts[currentIndex]) {
        expressionParts[currentIndex] += char;
      } else {
        expressionParts.push(char);
      }
    } else {
      currentIndex++;
      lasWasOperator = true;
      expressionParts.push(char);
    }
  }

  console.log(expressionParts);
}
