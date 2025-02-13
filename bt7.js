const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function triTuyetDoi(number) {
  const a = number >= 0 ? number : -number;
  console.log(`Trị tuyệt đối ${a}`);
}

rl.question("Nhập số vào: ", (a) => {
  a = parseInt(a);
  triTuyetDoi(a);
  rl.close();
});
