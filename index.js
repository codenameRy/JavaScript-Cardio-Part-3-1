// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//Solution 1 - Using Reduce method ES6 
function addAll (...numbers) {
return numbers.reduce((acc, curr) => acc + curr)
}

console.log(addAll(2,5,6,7)) //20

//Solution 2 - Using forEach method ES6
function addAll2(...numbers) {
let total = 0;
numbers.forEach((num)=> (total += num))
  return total;
}

console.log(addAll2(10,20,30,40)) //100

//Solution 3 - Using splice method. Arguments object and for Loop ES4

function addAll3() {
var numbers = Array.prototype.slice.call(arguments)
var total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
  }
  return total;
}

console.log(addAll3(2,5,6,10,30)) // 53

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

//Solution 1
function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for ( let i = 2; i <= num; i++) {
    if (checkForPrime (i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(20)) //[2, 3, 5, 7, 11, 13, 17 19] = 77

//Solution 2 - Using for Loop and 2 functions
function sumAllPrimes2(num) {
  
    let prime = [];
  //This loop references the function 'isPrime'.
  //It passes the 'i' arg to 'isPrime' (which is 2 first time). 
    for(let i = 2; i <= num; i++) {
      if(isPrime(i)) {
          prime.push(i);
      }      
    }
  
  //Function takes 2 (i) and checks it. If it passes the for loop (j = 2; if j < num(2)), it doesn't
  //pass this, so it returns false
    function isPrime(num) {
      for (let j = 2; j < num; j++) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    }  
  
  return prime.reduce((acc, curr) => acc + curr)
  
}

console.log(sumAllPrimes2(10)); // Sum of [2, 3, 5, 7] = 17