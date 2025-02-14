const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số vào: ", (a) => {
  a = parseInt(a);
  let number = a >= 0 ? a : -a;
  console.log(`Trị tuyệt đối ${number}`);
  rl.close();
});
