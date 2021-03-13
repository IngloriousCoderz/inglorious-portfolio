function callMe(times = 5) {
  if (times > 0) {
    callMe(times - 1);
  }
}

/**
 * factorial(n) = n * (n - 1) * (n - 2) * ... 1
 * factorial(4) = 4 * 3 * 2 * 1
 *
 * factorial(1) = 1
 * factorial(n) = n * factorial(n - 1)
 * */

function sum(a, b) {
  return a + b;
}

sum(2, 3); // 5

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sumTwo = sum(2); // function
sumTwo(3); // 5
