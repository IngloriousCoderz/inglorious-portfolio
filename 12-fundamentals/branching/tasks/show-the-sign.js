/**
 * Gather input
 */

let number = prompt('Give me a number');
number = Number(number);

/**
 * Perform calculations
 */

let message;
if (number > 0) {
    message = 1;
} else if (number < 0) {
    message = -1;
} else if (number === 0) {
    message = 0;
} else {
    message = 'Wrong input';
}

// alternate version with ternary operator
// let message =
//     number > 0
//     ? 1
//     : number < 0
//     ? -1
//     : number === 0
//     ? 0
//     : 'Wrong input';

/**
 * Output the results
 */

 alert(message);