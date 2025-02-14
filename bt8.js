const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập ký tự: ", (ch) => {
  if ("ueoai".includes(ch.toLowerCase())) {
    console.log("Nguyên âm");
  } else {
    console.log("Phụ âm");
  }
  rl.close();
});
