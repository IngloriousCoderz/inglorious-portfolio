/* eslint-disable no-console */

testFactorial(iterative);
testFactorial(recursive);
testFactorial(memoized());
testFactorial(memoize(iterative));
testFactorial(memoize(recursive));

function testFactorial(func) {
  console.log(func(3));
  console.log(func(4));
  console.log(func(5));
  console.log(func(6));
}

function iterative(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function recursive(n) {
  if (n === 1) {
    return n;
  }

  return n * recursive(n - 1);
}

function memoized() {
  const cache = {};

  return function cachedRecursive(n) {
    if (cache[n]) {
      console.log('cache hit:', n);
      return cache[n];
    }
    console.log('cache miss:', n);

    if (n === 1) {
      return n;
    }
    const factorial = n * cachedRecursive(n - 1);

    cache[n] = factorial;
    return factorial;
  };
}

function memoize(func) {
  const cache = {};

  return function (n) {
    if (cache[n] != null) {
      return cache[n];
    }

    const result = func(n);

    cache[n] = result;
    return result;
  };
}
