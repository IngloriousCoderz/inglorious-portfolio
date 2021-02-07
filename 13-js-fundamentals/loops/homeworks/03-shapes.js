/**
 * Rectangle: Build an ASCII rectangle, given the number of rows and columns:
 *
 * *****
 * *****
 * *****
 *
 * HINT: The problem can be split into multiple sub-problems:
 * 1. how to build one row?
 * 2. how to repeat the process?
 */

// collect user input

let rows = +prompt('Rows');
let columns = +prompt('Columns');

// perform calculations

let rectangle = '';
for (let i = 0; i < rows; i++) {
    
    let row = '';
    for (let j = 0; j < columns; j++) {
        row += '*';
    }

    rectangle += row + '\n';
}

// output the result

console.log(rectangle);





























/**
 * Empty rectangle: Build an ASCII rectangle, but this time asterisks only delimit the borders and the rest is spaces.
 *
 * ******
 * *    *
 * *    *
 * ******
 *
 * HINT: split the problem into multiple sub-problems:
 *
 * 1. how to build a 'full' row
 * 2. how to build an 'empty' row
 * 3. how to build the whole rectangle, knowing that:
 *    1. the first and last rows are always 'full'
 *    2. all other rows in between are always 'empty'
 */

let rows = 4;
let columns = 6;

/* begin TOP ROW */
let topRow = '';
for (let j = 0; j < columns; j++) {
    topRow += '*';
}
topRow += '\n';
/* end TOP ROW */

/* begin EMPTY ROWS */
let emptyRows = '';
for (let i = 1; i < rows - 1; i++) {

    /* begin EMPTY ROW */
    let emptyRow = '';
    for (let j = 1; j < columns - 1; j++) {
        emptyRow += ' ';
    }
    emptyRow = '*' + emptyRow + '*';
    /* end EMPTY ROW */

    emptyRows += emptyRow + '\n';
}
/* end EMPTY ROWS */

/* begin BOTTOM ROW */
let bottomRow = '';
for (let j = 0; j < columns; j++) {
    bottomRow += '*';
}
bottomRow += '\n';
/* end BOTTOM ROW */

let emptyRectangle = topRow + emptyRows + bottomRow;
console.log(emptyRectangle);


// input
let rows = prompt("How many rows?");
let columns = prompt('How many columns?');

// calculations
let rectangle = '';
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) { 
        if (i == 1 || i == rows || j == 1 || j == columns) {
            rectangle += "*";
        } else {
            rectangle += '\u2000';
        }
    }
    rectangle += "<br>";
}

// output
document.write(rectangle);

















/**
 * Right triangle: Build an ASCII triangle, given the number of rows. The width of the triangle should be automatically calculated.
 * 
 * *
 * **
 * ***
 * ****
 * 
 * HINT: The number of asterisks is directly proportional to the row number:
 * 1    row 0 + 1 = 1
 * 12   row 1 + 1 = 2
 * 123  row 2 + 1 = 3
 * 1234 row 3 + 1 = 4
 * 
 * 1    row 1 = 1
 * 12   row 2 = 2
 * 123  row 3 = 3
 * 1234 row 4 = 4
 */

let rows = 4;

let rightTriangle = '';
for (let i = 0; i < rows - 1; i++) {
    let row = '';
    let columns = i + 1;
    for (let j = 0; j < columns; j++) {
        row += '*';
    }

    rightTriangle += row + '\n';
}
console.log(rightTriangle);

























/**
 * Isosceles triangle: Build an ASCII triangle, given the number of rows. The width and position of the triangle should be automatically calculated.
 *
 *    *
 *   ***
 *  *****
 * *******
 *
 * HINT: The number of asterisks is directly proportional to the row number:
 *    1    row 0 * 2 + 1 = 1
 *   123   row 1 * 2 + 1 = 3
 *  12345  row 2 * 2 + 1 = 5
 * 1234567 row 3 * 2 + 1 = 7
 * 
 *    1    row 1 * 2 - 1 = 1
 *   123   row 2 * 2 - 1 = 3
 *  12345  row 3 * 2 - 1 = 5
 * 1234567 row 4 * 2 - 1 = 7
 * 
 * The number of spaces is instead inversely proportional to the row number:
 *
 * 123*    lastRow 3 - row 0 = 3
 * 12***   lastRow 3 - row 1 = 2
 * 1*****  lastRow 3 - row 2 = 1
 * ******* lastRow 3 - row 3 = 0
 */

let rows = 4;

let isoTriangle = '';
for (let i = 0; i < rows; i++) {
    let row = '';

    let lastRow = rows - 1;
    let spaces = lastRow - i;
    for (let j = 0; j < spaces; j++) {
        row += ' ';
    }

    let columns = i * 2 + 1;
    for (let j = 0; j < columns; j++) {
        row += '*';
    }
    isoTriangle += row + '\n';
}
console.log(isoTriangle);








































 
/**
 * Reversed isosceles triangle: Build an ASCII triangle, given the number of rows. It should be shown upside down.
 * 
 * *******
 *  *****
 *   ***
 *    *
 * 
 * HINT: the proportionality is similar to the previous exercise, but reversed.
 */
