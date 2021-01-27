/**
 * Gather user input
 */
let name = prompt('What is the "official" name of JavaScript?');

// if (name === 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("Didn't know? ECMAScript!");
// }

// name === 'ECMAScript'
//     ? alert('Right!')
//     : alert("Didn't know? ECMAScript!");

/**
 * Perform some calculations
 */
// let message;
// if (name === 'ECMAScript') {
//     message = 'Right!';
// } else {
//     message = "Didn't know? ECMAScript!";
// }

let message = name === 'ECMAScript'
    ? 'Right!'
    : "Didn't know? ECMAScript!";

/**
 * Show the result to the user
 */
alert(message);
