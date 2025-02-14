const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập số năm:", (year) => {
  year = parseInt(year);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Năm nhuận");
  } else {
    console.log("Không phải năm nhuận");
  }
  rl.close();
});
