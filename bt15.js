const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số n:", (n) => {
  n = parseInt(n);
  let isPrime = true;
  if (n < 2) isPrime = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? "Số nguyên tố" : "Không là số nguyên tố");
  rl.close();
});
