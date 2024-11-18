//Q7.
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

//Q8.
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
   