//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...


const readline = require("readline-sync");
let unit = parseInt(readline.question("Enter the number:- "))

switch (unit){
    case 1:
        console.log("Single Unit");
        break;
    case 10:
        console.log("Ten Units");
        break;
    case 100:
        console.log("Hundred Units");
        break;
    case 1000:
        console.log("Thousand Units");
        break;
    default :
        console.log("Enter the correct unit number");                                                                               
}