// Строки. Задачи
// 1.
let string = "some test string";
console.log(string[0]);
console.log(string[string.length-1]);
// 2.
let string = "some test string";
console.log(string[string.toUpperCase 0]);
// 3.
let string = "some test string";
console.log(string.indexOf("string"));
// 4.
let string = "some test string";
console.log(string.lastIndexOf(" "));
// 5.
let string = "some test string";
string = string.substr(5, 4);
console.log(string);
// 6.
let string = "some test string";
string = string.substring(5, 9);
console.log(string);
// 7.
let string = "some test string";
console.log(string.slice(0, -6));
// 8.
let a = 20;
let b = 16;
let string = a.toString() + b.toString();
console.log(string);
// Числа. Задачи
// 1.
console.log(Math.PI.toFixed(2));
// 2.
let a = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let b = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(b);
console.log(a);
// 3.
let a = Math.random();
console.log(a.toFixed(2));

let x = 10;
console.log(Math.floor(Math.random() * x));
// 4.
let result = 0.6+0.7;
console.log( +result.toFixed(10) );
// 5.
let string='100$';
console.log(parseInt(string,10));