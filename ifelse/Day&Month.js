const readline = require("readline-sync");
let day = parseInt(readline.question("Enter the day :- "));
let month = parseInt(readline.question("Enter the month:- "));
console.log("Day is => " +day+"\t Month is => " +month);
if((month >= 3 && month <= 6)){
    if((month == 3 && day <= 20 || month == 6 && day >= 20)){
        console.log("False");
    }else{
        console.log("True");
    }
}