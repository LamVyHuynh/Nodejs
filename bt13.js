const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function soChan(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

rl.question("Nhập số n: ", (n) => {
  n = parseInt(n);
  soChan(n);
  rl.close();
});
