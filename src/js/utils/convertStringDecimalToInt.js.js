export function convertStringDecimalToInt(value) {
  const [digitsBeforeDot, digitsAfterDot] = value.split(".");

  let conversion;

  if (digitsBeforeDot === "0") {
    conversion = digitsAfterDot;
  } else {
    conversion = digitsBeforeDot + digitsAfterDot;
  }

  return {
    conversion,
    multipliedBy: +"1".padEnd(digitsAfterDot.length + 1, "0"),
  };
}
