let arr= [];
let min = 100;
let max = 999;
let temp = 0;

while(arr.length < 5){
    let number1 = Number = Math.floor(Math.random() * (max-min+1)+min);
    arr.push(number1);
}
console.log("numbers are " , arr);

for(i = 0; i < arr.length; i++){
    for(j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log("sort " , arr);
console.log("minimum number = " ,arr[0]);
console.log("maximum number = " , arr[arr.length-1]);

