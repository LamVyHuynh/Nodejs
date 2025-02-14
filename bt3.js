const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Nhập tuổi: ", (age) => {
  age = parseInt(age);
  if (age < 18) {
    console.log("Trẻ em");
  } else if (age >= 18 && age < 60) {
    console.log("Người lớn ");
  } else {
    console.log("Người già");
  }
  rl.close();
});
