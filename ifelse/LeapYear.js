const readline = require("readline-sync");
let year = parseInt(readline.question("Enter the leap year :- "));
if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    console.log("year is leap year :- " + year);
}else{
    console.log("year is not a leap year :- " + year);
}