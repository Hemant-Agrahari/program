function checkPrimeNumber(num) {
  if (num <= 1) {
    console.log(num + " is not a prime number");
    return;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      console.log(num + " is not a prime number");
      return;
    }
  }

  console.log(num + " is a prime number");
}
checkPrimeNumber(11);
checkPrimeNumber(15);