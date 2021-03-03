console.log('Make triangle:', testMakeTriangle());
console.log('Make inverted triangle', testMakeInvertedTriangle());
console.log('Make single line:', testMakeSingleLine());
console.log('Make spaces:', testMakeSpaces());
console.log('Make asterisks:', testMakeAsterisks());

function testMakeSingleLine() {
  return (
    makeSingleLine(0, 3) === '   *' &&
    makeSingleLine(1, 3) === '  ***' &&
    makeSingleLine(2, 3) === ' *****' &&
    makeSingleLine(3, 3) === '*******'
  );
}

function makeSingleLine(row, lastRow) {
  return makeSpaces(row, lastRow) + makeAsterisks(row, lastRow);
}

function testMakeSpaces() {
  return (
    makeSpaces(0, 3) === '   ' &&
    makeSpaces(1, 3) === '  ' &&
    makeSpaces(2, 3) === ' ' &&
    makeSpaces(3, 3) === ''
  );
}

function makeSpaces(row, lastRow) {
  let limit = lastRow - row;
  let emptySpace = '';
  for (let i = 0; i < limit; i++) {
    emptySpace += ' ';
  }
  return emptySpace;
}

function testMakeAsterisks() {
  return (
    makeAsterisks(0) === '*' &&
    makeAsterisks(1) === '***' &&
    makeAsterisks(2) === '*****' &&
    makeAsterisks(3) === '*******'
  );
}

function makeAsterisks(row) {
  let asterisks = '';
  let limit = 2 * row + 1;
  for (let i = 0; i < limit; i++) {
    asterisks += '*';
  }
  return asterisks;
}

function testMakeTriangle() {
  return buildTriangle(4) === '   *\n  ***\n *****\n*******';
}

function buildTriangle(rows) {
  let lastRow = rows - 1;
  let triangle = '';
  for (let i = 0; i < rows; i++) {
    const optionalNewLine = i === lastRow ? '' : '\n';
    triangle += makeSingleLine(i, lastRow) + optionalNewLine;
  }
  return triangle;
}

function testMakeInvertedTriangle() {
  return buildInvertedTriangle(4) === '*******\n *****\n  ***\n   *';
}

function buildInvertedTriangle(rows) {
  let lastRow = rows - 1;
  let triangle = '';
  for (let i = lastRow; i >= 0; i--) {
    const optionalNewLine = i === 0 ? '' : '\n';
    triangle += makeSingleLine(i, lastRow) + optionalNewLine;
  }
  return triangle;
}

// function testBuildTriangle(row) {
//   console.log(buildTriangle(row));
// }
// let something = +prompt('How many rows');
// testBuildTriangle(something);
