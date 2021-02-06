/**
 * Print all numbers from 0 to 10 (excluded).
 * Try with a while loop, then with a for loop.
 */
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i === 10) {
        break;
    }
}

for (let i = 0; true; i++) {
    if (i === 10) {
        break;
    }
    console.log(i);
}

/**
 * Print all numbers from 10 to 0 (excluded), reversed.
 * Try with a for loop, then with a while loop.
 */

 for (let i = 10; i > 0; i--) {
     console.log(i);
 }

for (let i = 0; i < 10; i++) {
    console.log(10 - i);
}

 let i = 10;
 while (i > 0) {
     console.log(i);
     i--;
 }

/**
 * Print even numbers from 0 to 10 (excluded) with a for loop.
 * There are at least 3 possible solutions, can you find them all?
 */

// i = 0 -> 0
// i = 2 -> 2
// i = 4 -> 4
// i = 6 -> 6
// i = 8 -> 8
// i = 10 -> end

for (let i = 0; i < 10; i+=2) {
    console.log(i);
}

// i = 0 -> 0*2 -> 0
// i = 1 -> 1*2 -> 2
// i = 2 -> 2*2 -> 4
// i = 3 -> 3*2 -> 6
// i = 4 -> 4*2 -> 8
// i = 5 -> end

for (let i=0; i < 5; i++) {
    console.log(i * 2);
}

// i = 0 -> 0
// i = 1 -> x
// i = 2 -> 2
// i = 3 -> x
// i = 4 -> 4
// i = 5 -> x
// i = 6 -> 6
// i = 7 -> x
// i = 8 -> 8
// i = 9 -> x
// i = 10 -> end

for (let i=0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/**
 * Guess the number: Prompt the user for a number until it equals the secret number or it's a falsy value
 * 
 * HINT: "until" something is true means "while" the same is false, and viceversa!
 */

// breaking condition: falsy value OR number was correct
// !guessedNumber || guessedNumber === secretNumber
// continuing condition: the opposite
// !(!guessedNumber || guessedNumber === secretNumber)
// guessedNumber && guessedNumber !== secretNumber

let secretNumber = 7;
let guessedNumber = +prompt('Give me a number between 1 and 10');
while (guessedNumber && guessedNumber !== secretNumber) {
    guessedNumber = +prompt('Sorry, not the right number, please try again');
}

if (guessedNumber === secretNumber) {
    alert('You got it!');
} else {
    alert("You gave up :'(");
}

/**
 * Sum all numbers from 1 to 5
 *
 * HINT: use a variable to accumulate partial results
 */

let sum = 0;
for (let number = 1; number < 5; number++) {
    sum += number;
}
console.log(sum);

/**
 * Build a string that looks like this:
 * "Na Na Na Na Na (...16 times) Batman!"
 * The string should be built by looping 16 times,
 * and at the end of the loop I want to print the result to the 
 * 
 * HINT: we can use string concatenation to build strings
 */

let string = '';
for (let i = 0; i < 16; i++) {
    string += 'Na ';
}
string += 'Batman!';
console.log(string);