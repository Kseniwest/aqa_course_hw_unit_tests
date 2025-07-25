/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n = Math.floor(Math.random() * 9) + 1;
n = String(n);
let nn = n + n;
let nnn = n + n + n;
let sum = Number(n) + Number(nn) + Number(nnn);
console.log(sum);
