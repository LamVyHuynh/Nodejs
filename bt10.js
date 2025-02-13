const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function chuInHoa(ch) {
  if (ch >= "A" && ch <= "Z") {
    console.log("Là Kí tự IN HOA");
  } else {
    console.log("Không là kí tự IN HOA");
  }
}

rl.question("Nhập ký tự vào: ", (ch) => {
  chuInHoa(ch);
  rl.close();
});
