const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function demSo(n) {
  let dem = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    dem++;
  }
  return dem;
}

rl.question("Nhập số n:", (n) => {
  n = parseInt(n);
  let demso = demSo(n);
  console.log(`Số ${n} có ${demso} số`);
  rl.close();
});
