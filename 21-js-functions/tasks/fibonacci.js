const memoizedFib = memoize((n) => {
  if (n <= 2) {
    return 1;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log(memoizedFib(1));
console.log(memoizedFib(2));
console.log(memoizedFib(3));
console.log(memoizedFib(4));
console.log(memoizedFib(7));
console.log(memoizedFib(15));
console.log(memoizedFib(77));

/**
 * 1 1 2 3 5 8 13 21...
 *
 * fib(1) = 1
 * fib(2) = 1
 * fib(3) = fib(2) + fib(1)
 * fib(6) = fib(5) + fib(4)
 * fib(7) = fib(6) + fib(5)
 */
function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(func) {
  let cache = {};

  return function (num) {
    let result = cache[num];

    if (result != null) {
      console.log(cache);
      return result;
    }

    result = func(num);

    cache[num] = result;
    return result;
  };
}
