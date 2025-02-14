const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập điểm vào: ", (diem) => {
  diem = parseInt(diem);
  if (diem >= 90) {
    console.log("Xuất sắc");
  } else if (diem < 90 && diem >= 80) {
    console.log("Giỏi");
  } else if (diem < 80 && diem >= 70) {
    console.log("Khá");
  } else {
    console.log("Trung bình");
  }
  rl.close();
});
