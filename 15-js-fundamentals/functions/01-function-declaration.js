function showMessage() {
  console.log('Hello world!');
}

showMessage();

function showTwo() {
  let num = 2;
  console.log(num);
}

console.log(num);

let num;

function showTwo() {
  num = 2;
  console.log(num);
}

console.log(num);

let myOuterVariable = 'Sao';

function printVariable() {
  let myInnerVariable = 'Bobby' + myOuterVariable;
  myOuterVariable = 'Tiina';
  console.log(myInnerVariable);
}

console.log(myOuterVariable);

printVariable();

console.log(myOuterVariable);

let myVariable = 'Sao';

function printVariable() {
  let myVariable = 'Bobby';
  console.log(myVariable);
}

console.log(myVariable);

printVariable();

console.log(myVariable);

/**
 * IIFE - Immediately Invoked Function Expression
 */
(function () {
  var name = 'Tiago';
  console.log(name);
})();

function sayHello(who) {
  console.log(`Hello ${who}!`);
}

let name = 'world';

sayHello(name);

function incrementAndSum(x, y) {
  x += 1;
  y += 1;
  console.log(x + y);
}

let x = 2;
let y = 3;
incrementAndSum(x, y);

function incrementAndSum() {
  x += 1;
  y += 1;
  console.log(x + y);
}

x = 2;
y = 3;
incrementAndSum();

function sum(x = 0, y = 0) {
  if (x === undefined || x === null || x === '' || x === 0) {
    x = 0;
  }

  x = x || 0;

  if (x === undefined || x === null) {
    x = 0;
  }

  if (x == null) {
    x = 0;
  }

  x = x != null ? x : 0;

  x = x ?? 0;

  if (typeof x === 'string') {
    x = Number(x);
  }

  if (typeof y === 'string') {
    y = Number(y);
  }

  console.log(x + y);
}

sum(2, 3);
sum(2);
sum(undefined, 3);
sum();

function sum(x, y) {
  console.log(x + y);
}

sum(2, 3);
sum(3, 5);
sum(5, 7);

function sum(x, y) {
  const result = x + y;
  return result;
  return 'end';
}

const result = sum(2, 3);
console.log(result);
console.log(sum(2, 3));
alert(sum(2, 3));

const anwer = prompt('Did you understand?', 'No');

/**
 * Calculate the hypothenuse of a right triangle
 *
 *       ---------------
 * h = \|leg1^2 + leg2^2
 */

`
|\
| \
|  \
+---+
`;

function square(num) {
  return num ** 2;
}

function sum(num1, num2) {
  return num1 + num2;
}

// modularity
// readibility
// reusability
// reduce code duplication

function calculateHypothenuse(leg1, leg2) {
  const leg1squared = square(leg1);
  const leg2squared = square(leg2);
  const sumOfSquares = sum(leg1squared, leg2squared);
  return Math.sqrt(sumOfSquares);
}

const leg1 = prompt();
const leg2 = prompt();

const hypothenuse = calculateHypothenuse(leg1, leg2);

alert(hypothenuse);

function login(username, password) {
  return true;
}

function sum(x, y) {
  return x + y;
}

x = 2;
y = 3;
sum(x, y);

// user input

let numRow = +prompt('How many rows?');
let numCol = +prompt('How many columns?');

// calculations

function buildRowTemplate(numCol) {
  let rowTemplate = '';

  for (let i = 0; i < numCol; i++) {
    rowTemplate += '*';
  }

  return rowTemplate;
}

function concatenateRows(numRow, rowTemplate) {
  let finalStr = '';

  for (let i = 0; i < numRow; i++) {
    finalStr += rowTemplate + '\n';
  }

  return finalStr;
}

function buildRectangle(numRow, numCol) {
  let rowTemplate = buildRowTemplate(numCol);
  let finalStr = concatenateRows(numRow, rowTemplate);
  return finalStr;
}

// print the output

function buildDoubleRectangle(rows, columns) {
  const first = buildRectangle(rows, columns);
  const second = buildRectangle(rows, columns);
  return first + second;
}

console.log(finalStr);

/**
 * Build a row made of any character (asterisks by default),
 * in the number of "columns".
 */
function buildFullRow(columns, cell = '*') {
  let fullRow = '';
  for (let j = 0; j < columns; j++) {
    fullRow += cell;
  }
  fullRow += '\n';
  return fullRow;
}

function buildEmptyRow(columns, cell = '*') {
  let emptyRow = '';
  for (let j = 1; j < columns - 1; j++) {
    emptyRow += ' ';
  }
  emptyRow = cell + emptyRow + cell;
  return emptyRow;
}

function buildMiddleRows(rows, columns, cell = '*') {
  let emptyRowTemplate = buildEmptyRow(columns, cell);

  let emptyRows = '';
  for (let i = 1; i < rows - 1; i++) {
    emptyRows += emptyRowTemplate + '\n';
  }

  return emptyRows;
}

function buildEmptyRectangle(rows, columns, cell = '*') {
  let fullRow = buildFullRow(columns, cell);
  let middleRows = buildMiddleRows(rows, columns, cell);
  return fullRow + middleRows + fullRow;
}

let rows = 4;
let columns = 6;

// console.log(buildEmptyRectangle(rows, columns));

function buildFullRectangle(rows, columns, cell = '*') {
  let fullRectangle = '';
  for (let i = 0; i < rows; i++) {
    fullRectangle += buildFullRow(columns, cell);
  }
  return fullRectangle;
}

// hoisting
