const printStringToNumber = (str) => {
  const num = Number(str);
  if (isNaN(num)) {
    return "Invalid number string";
  }
  return num;
}

console.log(printStringToNumber("12345"));