/**
 * Our code now looks like a newspaper article,
 * thanks to hoisting!
 * 
 * Hoisting means that functions declared after being
 * invoked will work as if they were declared at the
 * top of the file. This way we can structure our
 * code to be more readable.
 */

buildFullRectangle(4, 6);

function buildFullRectangle(rows, columns, cell = '*') {
    let fullRectangle = '';
    for (let i = 0; i < rows; i++) {
        fullRectangle += buildFullRow(columns, cell);
    }
    return fullRectangle;
}

function buildFullRow(columns, cell = '*') {
    let fullRow = '';
    for (let j = 0; j < columns; j++) {
        fullRow += cell;
    }
    fullRow += '\n';
    return fullRow;
}

// stack overflow