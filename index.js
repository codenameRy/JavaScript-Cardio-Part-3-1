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

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// Solution 2: ...rest, filter & includes
function seekAndDestroy2(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello')

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

//Solution
function sortByHeight(a) {
  const arr1 = []; //Store position in this array
  const arr2 = []; //Store all the values that are not -1

//val represents each value / i for the position
  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val) ) );
  //Sort values (arr2) lowest to highest
  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
  //Check the position of -1 and numbers in the array
  // console.log(arr1, arr2) 
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

//Solution 2
function sortByHeight2(a) {
// filtering out and sorting all "humans"
const trees = a.filter(v => v !== -1).sort((a, b) => a - b)
// put sorted "trees" back
return a.map(v => v !== -1? trees.shift() : -1)
}

console.log(sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180]))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0); // first char code of the first letter
  let missing; //investigate which letter is missing
  // return compare;

   str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare
    } else {
      missing = String.fromCharCode(compare)
    }
  });

  return missing;
}

console.log(missingLetters('abcdf'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]))