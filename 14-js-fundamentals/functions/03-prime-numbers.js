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

/* Bobby's solution uses a similar approach, counting the divisors of a number. */
// sieve of something
let maxNum = +prompt("Number?");
for (let number = 2; number <= maxNum; number++) {
    let divisors = 0;
    for (let previous = 2; previous < number; previous++) {
        if (number % previous === 0) {
            divisors++;
        }
    }

    if(!divisors) {
        document.write(input)
        document.write("<br>")
    }
}
