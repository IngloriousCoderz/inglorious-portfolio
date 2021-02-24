/* function declaration */

// hoisting

makeMeASandwich('avocado, salmon, cream cheese');

function makeMeASandwich(ingredients) {
  console.log(ingredients);
}

/* function expression */

const makeMeASandwich = function (ingredients) {
  console.log(ingredients);
};

makeMeASandwich('tomato, mozzarella, basil');

function showTwo() {
  let num = 2;
  console.log(num);
}

const showTwo = function () {
  let num = 2;
  console.log(num);
  console.log(gjfkgslhdf);
};

/* arrow function */

const sum = (x, y) => x + y;

sum(2, 3);
sum('two', 'three');
const x = 2;
const y = 3;
sum(x, y);
const a = 'two';
const b = 'three';
sum(a, b);

const square = (x) => x * x;

const square = (x) => {
  return x * x;
};

const square = function (x) {
  return x * x;
};

function square(x) {
  return x * x;
}
