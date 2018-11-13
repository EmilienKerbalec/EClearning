// Объект. Задачи
// 1.
let device = {
    product: "iphone"
}
// 2.
device.price = 1000;
device.currency = "dollar";
// 3.
let details = {
    color:"white",
    model:"6s"
};
device.details = details;
console.log(device);

// Присваивание. Задачи
// 1.
a = 10;
b = 20;
c = 30;
x = 40;
y = 50;
z = 60;
i = 70;
a += 10;
b *= 18;
c -= 10;
x += a;
y *= z;
i *= 5 * y;
// 2.
a = 10;
a **= 2;
// Условные операторы. Задачи
// 1.
let a = 1
if (a === 0) {
    let a = 1
}
// 2.
if (a < 0) {
    let a = "less then zero"
}
// 3.
if (a > 0) {
    a *= 10
}
// Преобразование типов. Задачи
// 1.
let a = 0 || 'string'; // string
let a = 1 && "string"; // string
let a = null || 25; // 25
let a = null && 25; // null
let a = null || 0 || 35; // 35
let a = null && 0 && 35; // null
// 2.
12 + 14 + "12" // "2612"
3 + 2 - "1" // 4
"3" + 2 - 1 // 31
true + 2 // 3
+"10" + 1 // 11
undefined + 2 // NaN
null + 5 // 5
true + undefined // NaN