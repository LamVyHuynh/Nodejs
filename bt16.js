const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập n: ", (n) => {
  n = parseInt(n);
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  console.log(gt);
  rl.close();
});
