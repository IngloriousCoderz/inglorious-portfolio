/**
 * Print all prime numbers up to maxNum.
 *
 * HINT: Implement the Sieve of Eratosthenes:
 * 1. Run through all the numbers starting from 2
 * 2. Only print those who are prime. A prime number is not divisible by any of the previous ones:
 *    a. Run through all the previous numbers, starting from 2
 *    b. Check if the current number is divisible by the current previous number
 *       i. A number is divisible by another if dividing them gives a remainder of 0
 *
 * All numbers:   2 3 4 5 6 7 8 9 10
 * Prime numbers: 2 3 x 5 x 7 x x x
 */

let maxNum = 10;
for (let number = 2; number < maxNum; number++) {
    let isPrime = true;

    /* checks if the number is prime */
    for (let previous = 2; previous < number; previous++) {
        if (number % previous === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(number);
    }
}

// 2 4 8
// 16 32 64 -> powers of 2 ? NO
// 12 18 24
// 30 34 36 -> even numbers ? NO
// 30 33 34 -> all numbers ? NO
// -6 -4 -2 -> positive numbers ? NO
// 6 2 4 -> randomly placed number ? NO
// 3 2 1 -> all ascending numbers? YES, well done Tiago!