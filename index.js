//Q4.
const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18];
let bagEven = "";
let bagOdd = "";
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 0){
        bagEven = bagEven + numbers[i] + " ";
    }
    if(numbers[i]%2 != 0){
        bagOdd = bagOdd + numbers[i] + " ";
    }
}
console.log("Even numbers are: " + bagEven);
console.log("Odd numbers are:" + bagOdd);
  