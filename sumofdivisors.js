/* Sum of Divisors
Given a positive integer, return the sum of all its divisors.
A divisor is any integer that divides the number evenly 
(the remainder is 0).
Only count each divisor once.
For example, given 6, return 12 because the divisors 
of 6 are 1, 2, 3, and 6, and the sum of those is 12. */

function sumDivisors(n) {
  let result = 0;
  for(let i = 0; i <= n; i++){
    if(n % i === 0){
     result += i;
    }
  }
  return result;
}

/* IA version gemini 

function sumOfDivisors(n) {
  if (n <= 0) return 0;
  let sum = 0;

  We only need to loop up to the square root of n

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
       Add the divisor
      sum += i;

       Add the paired divisor (n / i) if it's different
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum;
}

Example:
console.log(sumOfDivisors(6));  // Output: 12 (1 + 2 + 3 + 6)
console.log(sumOfDivisors(12)); // Output: 28 (1 + 2 + 3 + 4 + 6 + 12)*/