const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacii(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  console.log("Fibonacii thứ n: ", b);
}

rl.question("Nhập số n:", (n) => {
  n = parseInt(n);
  fibonacii(n);
  rl.close();
});
