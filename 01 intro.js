//Intro
console.log('JCWDOL-021');

//Variable declaration rule:
var name = 'Kevin Meditra'
console.log(name);
// 1. Diawali dengan huruf, atau symbol khusus ($ dan _)
    // var !namek
    // var 10namek
var $namek
var _namek
// 2. Penamaan harus jelas dan deskriptif (Jangan terlalu global)
var nama_stadion = 'bung karno'
var nama_pahlawan = 'bung karno'
// 3. Format oenulisan (camelCase, snake_case, PascalCase)
var namaPahlawan = 'bung karno';
var nama_pahlawan = 'bung karno';
var NamaPahlawan = 'bung karno';
// 4. Case Sensitive
var buah = 'Jeruk'
var Buah = 'apel'
console.log(Buah);
// var vs let vs cons
    //var 
        // 1. value bisa diupdate
        // 2. penamaan variabel boleh sama
        // 3. tidak punya batasan scope 
    //let
        // 1. value bisa diupdate
        // 2. penamaan variabel tidak boleh sama
        // 3. punya batasan scope
    //const value tidak bisa diupdate
        // 1. value tidak bisa diupdate
        // 2. penamaan variabel tidak boleh sama
        // 3. punya batasan scope

// Data type
// 1. Primitive data type : string, number, boolean, undefined, null
var contoh_string = 'Kevin';
var contoh_number = 10;
var contoh_boolean = true;
var contoh_undefined;
var contoh_null = null;
console.log(typeof contoh_string);
console.log(typeof contoh_number);
console.log(typeof contoh_boolean);
console.log(typeof contoh_undefined);
console.log(typeof contoh_null);
// 2. Non-Primitive data type : Array & Object


// Method
// > Methods
// Function siap pakai yang disediakan untuk memanipulasi data

// String Methods
// .slice
let word = 'Lorem ipsum dolor amet';
console.log(word.slice(0, 3));

// .replace
let school = 'Purwadhika Digital School';
school = school.replace('Purwadhika', 'Pwd');
console.log(school);

// .indexOf : Mencari karakter berada di index ke berapa?
let randomAlphabets = 'ksalskalskqlkslkaslak';
console.log(randomAlphabets.indexOf('a'));
console.log(randomAlphabets.lastIndexOf('a'));

// .length  : Menghitung jumlah karakter suatu string
console.log(randomAlphabets.length);

// .toUpperCase
let randomAlpha = 'PuRwAdHiKa';
console.log(randomAlpha.toUpperCase());

// .toLowerCase
console.log(randomAlpha.toLowerCase());

// Number Methods
// .toString    : Merubah tipe data number menjadi string
let discount = 70;
let disCountString = discount.toString();
console.log(disCountString);

// .toFixed
let point = 90.4;
console.log(point.toFixed());

let randoms = '1abc23';
// Number   : Merubah tipe data string menjadi number
console.log(Number(randoms));

// parseInt : Merubah tipe data string menjadi number
console.log(parseInt(randoms));

// Date Methods
let now = new Date();

let getFullYear = now.getFullYear();
let getMonth = now.getMonth();
let getDate = now.getDate();
console.log(getFullYear, getMonth + 1, getDate)