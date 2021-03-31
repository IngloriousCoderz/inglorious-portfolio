/**
 * 5! = 5 * 4! = 5 * 4 * 3 * 2 * 1
 *
 * 6! = 6 * 5! = 6 * cached(5!)
 */

const memoizedFactorial = memoize((num) =>
  num === 1 ? num : num * memoizedFactorial(num - 1)
);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));

function memoize(func) {
  const cache = {};

  return function (num) {
    let result = cache[num];
    if (result != null) {
      console.log(cache, num, result);
      return result;
    }

    result = func(num);

    cache[num] = result;
    return result;
  };
}

function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
}
