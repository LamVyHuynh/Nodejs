const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số vào: ", (a) => {
  a = parseInt(a);
  let s = 0;
  for (let i = 1; i <= a; i++) {
    s += i;
  }
  console.log(`Tổng chạy từ 1 đến ${a} = ${s}`);
  rl.close();
});
