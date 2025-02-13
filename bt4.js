const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function soChan(number) {
  if (number % 2 == 0) {
    console.log("Số chẵn");
  } else {
    console.log("Số lẻ");
  }
}
rl.question("Nhập số:", (number) => {
  number = parseInt(number);
  soChan(number);
  rl.close();
});
