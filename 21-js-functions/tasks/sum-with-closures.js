sum(2, 3);
sum(2, 4);
sum(2, 7);

function sum(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;

sum(2)(3);

const sumTwo = sum(2);
sumTwo(3);
sumTwo(4);
sumTwo(7);

// CURRYING

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sum = (a) => (b) => a + b;
