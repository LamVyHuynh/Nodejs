const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số vào: ", (number) => {
  number = parseInt(number);
  if (number > 0) {
    console.log("Số dương");
  } else {
    console.log("Số âm");
  }
  rl.close();
});
