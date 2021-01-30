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
 * You can use an if-else cascade, or the ternary operator (not recommended)
 */

let num1 = +prompt('First operand');
let num2 = +prompt('Second operand');
let operation = prompt('Operation');

if (operation === '+') {
    alert(num1 + num2);
} else if (operation === '-') {
    alert(num1 - num2);
}






































/* tiago1 */
let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose second number:');
num1 = Number(num1);
num2 = Number(num2);
if (operationType === 'sum') {
    alert('The result of the sum is ' + (num1 + num2));
} else if (operationType === 'subtraction') {
    alert(num1 - num2);
} else if (operationType === 'multiplication') {
    alert(num1 * num2);
} else if (operationType === 'division') {
    alert(num1 / num2);
} else if (operationType === 'power') {
    alert(num1 ** num2);
} else if (operationType === 'remainder') {
    alert(num1 % num2);
}






































/* tiago2 */
let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose the second number:');
num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let power = num1  num2;
let remainder = num1 % num2;
if (operationType === 'sum'){
    alert(sum);
} else if (operationType === 'subtraction'){
    alert(subtraction);
} else if (operationType === 'multiplication'){
    alert(multiplication);
} else if (operationType === 'division'){
    alert(division);
} else if (operationType === 'power'){
    alert(power);
} else if (operationType === 'remainder'){
    alert(remainder);
}







































/* tiago3 */
let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose second number:');
num1 = Number(num1);
num2 = Number(num2);
let finalResult;
if (operationType === 'sum') {
    finalResult = num1 + num2;
} else if (operationType === 'subtraction') {
    finalResult = num1 - num2;
} else if (operationType === 'multiplication') {
    finalResult = num1 * num2;
} else if (operationType === 'division') {
    finalResult = num1 / num2;
} else if (operationType === 'power') {
    finalResult = num1 ** num2;
} else if (operationType === 'remainder') {
    finalResult = num1 % num2;
}
alert(finalResult);







































/* sao1 */
alert("Hi! I'm a calculator, let's do some calculations!");
let operation = prompt('Please choose one of this operations: sum, subtraction, division, multiplication, power or remainder');
let num1 = prompt('Please write the first number');
let num2 = prompt('Please write the second number');
num1 = Number(num1);
num2 = Number(num2);
let result; 


if (operation === 'sum') {
    result = num1 + num2;
} else if (operation === 'subtraction') {
    result = num1 - num2;
} else if (operation === 'division') {
    result = num1 / num2;
} else if (operation === 'multiplication') {
    result = num1 * num2;
} else if (operation === 'power') {
    result = num1 ** num2;
} else if (operation === 'remainder') {
    result = num1 % num2;
} else if (operation !== 'sum', operation !== 'subtraction', operation !== 'division', operation !== 'multiplication', operation !== 'power', operation !== 'remainder') {
    result = "Please insert a valid operation";
}

alert(result);
alert("Don't forget to study some math!");







































/* sao2 */
else if (operation != 'sum' || operation != 'subtraction' || 'division' || 'multiplication' || 'power' || 'remainder') {
    result= "Please insert a valid operation";
}

operation !== 'sum' && operation !== 'subtraction' && operation !== 'division'




































/* sao3 */
else if (operation != 'sum' && operation !='subtraction' 
&& operation !='division' && operation !='multiplication' && operation !='power' && operation !='remainder') {
    result= "Please insert a valid operation";
}































/* sao4 */
else if (operation === "") {
    ...
}


else {
    ...
}































/* bobby1 */
var num1 = prompt("Please inpit your first number:");
num1 = Number(num1);
var num2 = prompt("Please inpit your second number:");
num2 = Number(num2);
var operation = prompt("Choose a mathematical operation ( + ; - ; * ; / ; ** ; %, arctan, imul");
operation === '+'
    ? alert(num1 + num2)
    : operation ==='-'
        ? alert(num1 - num2)
        :  (operation ==='/' && num1 != 0 && num2 != 0)
            ? alert(num1 / num2)
            : operation === '*'
                ? alert(num1 * num2) 
                : operation === '**'
                    ? alert(num1 ** num2)
                    : operation === '%'
                        ? alert(num1 % num2)
                        : operation === "arctan"
                            ? alert(Math.atan2(num1, num2)) 
                            : operation === "imul"
                                ? alert(Math.imul(num1, num2))
                                : operation === ''
                                    ? alert("Error")
                                    : alert("Invalid input")









































/* bobby2 */
let num1 = prompt("Please input your first number:");
num1 = Number(num1);
let num2 = prompt("Please input your second number:");
num2 = Number(num2);
let operation = prompt("Choose a mathematical operation/function ( + ; - ; * ; / ; ** ; %, arctan, imul");
let total;

if (operation === '+') {
    total = num1 + num2;
} else if (operation === '-') {
    total = num1 - num2;
} else if (operation === '*') {
    total = num1 * num2
} else if (operation === '/' && num2 != 0) {
    total = num1 / num2;
} else if (operation === '/' && num2 == 0) { 
    alert("Cannot divide by zero");
} else if (operation === '/' && num1 == 0) {
    alert("Why are you dividing zero by anything?");
} else if (operation === '**') {
    total = num1 ** num2;
} else if (operation === "%") {
    total = num1 % num2;
} else if (operation === "arctan") {
    total = Math.atan2(num1, num2);
} else if (operation === "imul") {
    total = Math.imul(num1, num2);
}ration === '+') {
    total = num1 + num2;
} else if (operation === '-') {
    total = num1 - num2;
} else if (operation === '*') {
    total = num1 * num2
} else if (operation === '/' && num2 != 0) {
    total = num1 / num2;
} else if (operation === '/' && num2 == 0) { 
    alert("Cannot divide by zero");
} else if (operation === '/' && num1 == 0) {
    alert("Why are you dividing zero by anything?");
} else if (operation === '**') {
    total = num1 ** num2;
} else if (operation === "%") {
    total = num1 % num2;
} else if (operation === "arctan") {
    total = Math.atan2(num1, num2);
} else if (operation === "imul") {
    total = Math.imul(num1, num2);
}


if (typeof total === `number`) {
    alert(total);
} else {
    alert('Something went wrong');
}









































/* bobby3 */
let num1 = prompt("Please input your first number:");
num1 = Number(num1);
let num2 = prompt("Please input your second number:");
num2 = Number(num2);
let operation = prompt("Choose a mathematical operation/function ( + ; - ; * ; / ; ** ; %, arctan, imul");
let total;
if (operation === '+'){
    total = num1 + num2;}

    else if (operation === '-'){
    total = num1 - num2;}

    else if (operation === '*'){
    total = num1 * num2}

    else if (operation === '/' && num1!=0 && num2!=0){
    total = num1/num2}

    else if (operation === '/' || num1 == 0 || num2 == 0 ) { 
    throw alert("Cannot divide by zero");}

    else if (operation === '**'){
    total = num1 ** num2;}

    else if (operation === "%"){
    total = num1 % num2;}

    else if (operation === "arctan"){
    total = Math.atan2(num1, num2); }

    else if (operation === "imul"){
    total = Math.imul(num1, num2);}
          
    alert (total);














































/* bobby4 */
let num1 = prompt("Please input your first number:");
num1 = Number(num1);
let num2 = prompt("Please input your second number:");
num2 = Number(num2);
let operation = prompt("Choose a mathematical operation/function ( + ; - ; * ; / ; ** ; %, arctan, imul");
let total;
if (operation === '+'){
    total = num1 + num2;}

    else if (operation === '-'){
    total = num1 - num2;}

    else if (operation === '*'){
    total = num1 * num2}

    else if (operation === '/' && num1!=0 && num2!=0){
    total = num1/num2}

    else if (operation === '/' || num1 == 0 || num2 == 0 ) { 
    alert("Can't divide by 0");}

    else if (operation === ''){
    alert("Invalid input");
    }

    else if (operation === '**'){
    total = num1 ** num2;}

    else if (operation === "%"){
    total = num1 % num2;}

    else if (operation === "arctan"){
    total = Math.atan2(num1, num2); }

    else if (operation === "imul"){
    total = Math.imul(num1, num2);}
          
   
if (typeof total == 'number'){
    alert (total);
}