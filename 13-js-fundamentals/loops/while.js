/**
 * While loop - generic form
 */

while (condition) {
    something;
}

and then something else;

/**
 * Do-while loop - generic form
 */

do {
    something;
} while (condition);

and then something else;

/**
 * For-loop - generic form
 */

for (begin; condition; step) {
    body;
}

let i = 0; // begin
while (i < 3) { // condition
    alert(i); // body
    i++; // step
}

for (let i = +prompt('Give me a starting number'); i < 3; i++) {
    alert(i);
}

let start = +prompt('Give me a starting number');
let end = +prompt('Give me an end');

for (let i = start; i < end; i++) {
    alert(i);
}


let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

for (;;) {
    console.log('Infinite loop');
}

while (true) {
    console.log('Infinite loop');
}


let gameOver = false; // begin

while (!gameOver) { // condition
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true; // step
            break;
        
        default:
            alert('Still playing');
    }
}

alert('Bye!');

for (let gameOver = false; !gameOver;) {
    let answer = prompt('Do you still want to play?');
    switch (answer) {
        case 'no':
        case 'No':
        case 'NO':
        case 'nope':
        case 'No way':
            gameOver = true; // step
            break;
        
        default:
            alert('Still playing');
    }
}


let result = 0;

while (true) {
  let value = +prompt("Enter a number", '');

  if (!value) {
    break;
  }

  result += value;
}

alert( 'Sum: ' + result );


let result = 0;
let value = +prompt('Enter a number', '');

while (value) {
    if (value) {
        result += value;
    }
    value = +prompt('Enter a number', '');
}

alert( 'Sum: ' + result );


let result = 0;
let value;

do {
    value = +prompt('Enter number', '');
    if (value) {
        result += value;
    }
} while (value);

alert( 'Sum: ' + result );



for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) {
        continue;
    }

    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
    let isEven = i % 2 == 0;

    if (!isEven) {
        alert(i);
    }
}


let rows = +prompt('How many rows?');
let columns = +prompt('How many columns?');

for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < columns; j++) {
        row += `(${i}, ${j}) `;
    }
    console.log(row);
}


let rows = +prompt('How many rows?');
let columns = +prompt('How many columns?');

let grid = '';
for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < columns; j++) {
        row += `(${i}, ${j}) `;
    }
    grid += row + '\n';
}
console.log(grid);
