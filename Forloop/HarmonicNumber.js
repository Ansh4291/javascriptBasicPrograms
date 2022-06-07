//Write a program that takes a command-line argument n and prints the nth harmonic number.

const readline = require("readline-sync");
let n = parseInt(readline.question("Enter the number:- "))
let harmonicNumber = 1;
for(i = 1;i<=n;i++){
    harmonicNumber = (harmonicNumber + 1 / (i + 1));
}
console.log(harmonicNumber);