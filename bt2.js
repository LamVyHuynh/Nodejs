const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số 1: ", (num1) => {
  rl.question("Nhập số 2: ", (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Số không hợp lệ");
    } else if (num1 > num2) {
      console.log(`${num1} > ${num2}`);
    } else if (num1 < num2) {
      console.log(`${num1} < ${num2}`);
    } else {
      console.log(`${num1} = ${num2}`);
    }
    rl.close();
  });
});
