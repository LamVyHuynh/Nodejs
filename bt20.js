const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function daoChuoi(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("Chuỗi đảo ngược: ", reversed);
}

rl.question("Nhập chuỗi: ", (str) => {
  str = str.trim();
  daoChuoi(str);
  rl.close();
});
