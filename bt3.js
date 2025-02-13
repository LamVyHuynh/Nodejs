const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function Tuoi(age) {
  if (age < 18) {
    console.log("Trẻ em");
  } else if (age >= 18 && age < 60) {
    console.log("Người lớn ");
  } else {
    console.log("Người già");
  }
}

rl.question("Nhập tuổi: ", (age) => {
  age = parseInt(age);
  Tuoi(age);
  rl.close();
});
