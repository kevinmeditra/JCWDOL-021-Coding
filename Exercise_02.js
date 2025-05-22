// 1. Cek apakah bilangan ganjil atau genap

let number = prompt("Masukkan angka:");
number = parseInt(number);

if (number % 2 === 0) {
  console.log(number + " adalah bilangan genap");
} else {
  console.log(number + " adalah bilangan ganjil");
}