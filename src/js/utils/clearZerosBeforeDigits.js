export function clearZerosBeforeDigits(value) {
  return value.replace(/^0+(?=\d)/, "");
}
