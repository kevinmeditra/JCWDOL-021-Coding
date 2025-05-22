// 1. Cek apakah bilangan ganjil atau genap

let number = prompt("Masukkan angka:");
number = parseInt(number);

if (number % 2 === 0) {
  console.log(number + " adalah bilangan genap");
} else {
  console.log(number + " adalah bilangan ganjil");
}

// 2. Cek apakah bilangan prima atau bukan

let num = prompt("Masukkan angka:");
num = parseInt(num);
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " adalah bilangan prima");
} else {
  console.log(num + " bukan bilangan prima");
}

//