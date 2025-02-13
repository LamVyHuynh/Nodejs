const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ngayThang(day) {
  switch (day) {
    case 1:
      console.log("Thứ Hai");
      break;
    case 2:
      console.log("Thứ Ba");
      break;
    case 3:
      console.log("Thứ Bốn");
      break;
    case 4:
      console.log("Thứ Năm");
      break;
    case 5:
      console.log("Thứ Sáu");
      break;
    case 6:
      console.log("Thứ Bảy");
      break;
    case 7:
      console.log("Chủ Nhật");
      break;
    default:
      console.log("Không hợp lệ");
  }
}
rl.question("Nhập ngày vào: ", (day) => {
  day = parseInt(day);
  ngayThang(day);
  rl.close();
});
