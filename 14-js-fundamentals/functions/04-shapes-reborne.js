/**
 * Isosceles triangle: Build an ASCII triangle, given the number of rows.
 * The width and position of the triangle should be automatically calculated.
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

  let lastRow = rows - 1; // row indexes start from 0, so last index is rows - 1
  let spaces = lastRow - i;
  for (let j = 0; j < spaces; j++) {
    row += ' ';
  }

  let asterisks = i * 2 + 1;
  for (let j = 0; j < asterisks; j++) {
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

let rows = 4;

let isoTriangle = '';
for (let i = 0; i < rows; i++) {
  let row = '';

  let lastRow = rows - 1; // row indexes start from 0, so last index is rows - 1
  let spaces = i;
  for (let j = 0; j < spaces; j++) {
    row += ' ';
  }

  let asterisks = lastRow - (i * 2 + 1);
  for (let j = 0; j < asterisks; j++) {
    row += '*';
  }
  isoTriangle += row + '\n';
}
console.log(isoTriangle);

/**
 * Clessidra (aka Hourglass)
 *
 * *******
 *  *****
 *   ***
 *    *
 *   ***
 *  *****
 * *******
 */

const SKIP_TIP = 1;
const rows = 9;

let hourglass = '';
const halfRows = Math.floor(rows / 2);
const middleRow = halfRows - 1; // since we start counting from 0

/**
 * Top part of the hourglass
 */
for (let i = 0; i < halfRows - SKIP_TIP; i++) {
  let row = '';

  const lastRow = halfRows - 1; // row indexes start from 0, so last index is rows - 1
  const spaces = i;
  for (let j = 0; j < spaces; j++) {
    row += ' ';
  }

  const asterisks = (lastRow - i) * 2 + 1;
  for (let j = 0; j < asterisks; j++) {
    row += '*';
  }
  hourglass += row + '\n';
}

/**
 * Middle point
 */

for (let j = 0; j < middleRow; j++) {
  hourglass += ' ';
}
hourglass += '*\n';

/**
 * Bottom part of the hourglass
 */

for (let i = SKIP_TIP; i < halfRows; i++) {
  let row = '';

  let lastRow = halfRows - 1; // row indexes start from 0, so last index is rows - 1
  let spaces = lastRow - i;
  for (let j = 0; j < spaces; j++) {
    row += ' ';
  }

  let asterisks = i * 2 + 1;
  for (let j = 0; j < asterisks; j++) {
    row += '*';
  }
  hourglass += row + '\n';
}

console.log(hourglass);
