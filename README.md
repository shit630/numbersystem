## Q4-> Find even and odd number
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

## Expected output is:
Even numbers are: 2 20 14 12 8 6 4 10 16 18 
Odd numbers are:3 7 15 9 5 1 11 19 17 13 



## Q7-> Find all prime numbers
const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
let bag = "";
let primeArray = [];

for(let i=0; i<numbers.length; i++){
    let isPrime = true;
    for(j=2; j<=numbers[i]/2; j++){
        if(numbers[i]%j == 0){
            isPrime = false;
        }
    }
    if(isPrime == true){
        primeArray.push(numbers[i]);
        bag = bag + numbers[i] + " ";
    }
}
console.log("All prime numbers is " + bag);

## Expected output is: 
All prime numbers is 19 23 13 31 29 2 11 17 5 



## Q->8 Calculate maximun, minimum ans sum
let sum = 0;
let maxi = Number.MIN_VALUE;
let mini = Number.MAX_VALUE;
for(let i=0; i<primeArray.length; i++){
    sum = sum + primeArray[i];
    if(maxi < primeArray[i]){
        maxi = primeArray[i];
    }
    if(mini > primeArray[i]){
        mini = primeArray[i];
    }
}

console.log("Maximum number is " + maxi);
console.log("Minimum number is " + mini);
console.log("The sum of prime array is " + sum);

## Expected output is:
 Maximum number is 31
Minimum number is 2
The sum of prime array is 150
  