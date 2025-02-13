const arr = [1, 3, 5, 9, 2];
let max = arr[0];
for (const num of arr) {
  if (num > max) max = num;
}
console.log("Số lớn nhất trong mảng: ", max);
