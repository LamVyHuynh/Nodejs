const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function giaiThua(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

rl.question("Nhập n: ", (n) => {
  n = parseInt(n);
  let gt = giaiThua(n);
  console.log(gt);
  rl.close();
});
