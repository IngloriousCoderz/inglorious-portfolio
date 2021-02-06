/**
 * Calculator is a webapp that asks for two numbers and
 * performs a specific operation on them.
 * 
 * The available operations are:
 * - sum
 * - subtraction
 * - multiplication
 * - division
 * - power
 * - remainder
 * - ...
 * 
 * This time let's use a switch statement.
 */

let num1 = +prompt('First operand');
let num2 = +prompt('Second operand');
let operation = prompt('Operation');

let isNum1Valid = !isNaN(num1);
let isNum2Valid = !isNaN(num2);

if (isNum1Valid && isNum2Valid) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        
        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;
        
        /* ... other operations here... */

        default:
            alert('Invalid operation');
    }

    if (typeof result === 'number') {
        alert(`The result is ${result}`);
    }
} else {
    alert('Invalid input numbers');
}










































/* sao1 */
alert("Hi! I'm a calculator, please test me!");
let user = prompt("Can you? Yes or No?")
let operation;
let result;

switch (user) {
    case 'No':
        alert("That's a shame, bye!");
        break;
    case 'Yes':
        let operation = prompt("Let's go! What is the operation do you me to do? +;-;/;*?");
        let num1 = prompt('Please write the first number');
        let num2 = prompt('Please write the second number');
        num1 = Number(num1);
        num2 = Number(num2);
        if (operation === '+') {
        result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '/') {
            result = num1 / num2;
        } else if (operation === '*') {
            result = num1 * num2;
        }    
        alert(result);
        break;
    default:
        alert("Please insert a valid operation");
 }
 alert("Don't forget to study some math!");