let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

/* convert to number the standard way */
a = Number(a);
b = Number(b);

/* convert to number with parseInt */
// a = parseInt(a);
// b = parseInt(b);

/* convert to number with the unary operator */
// a = +a;
// b = +b;

// a = a * 1;
// a = a / 1;
// a = a - 0;

alert(a + b);