const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function tinhTong(a) {
  let s = 0;
  for (let i = 1; i <= a; i++) {
    s += i;
  }
  return s;
}

rl.question("Nhập số vào: ", (a) => {
  a = parseInt(a);
  let kq = tinhTong(a);
  console.log(`Tổng chạy từ 1 đến ${a} = ${kq}`);
  rl.close();
});
