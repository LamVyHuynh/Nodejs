const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số n:", (n) => {
  n = parseInt(n);
  let number = n;
  let dem = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    dem++;
  }
  console.log(`Chiều dài của số ${number} có ${dem} số`);
  rl.close();
});
