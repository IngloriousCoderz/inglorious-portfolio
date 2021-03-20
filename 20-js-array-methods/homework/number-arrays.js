const arr = [1, 2, 3, 4, 5, 6, 7];

const double = (n) => n * 2;
const square = (n) => n ** 2;
const isEven = (n) => n % 2 === 0;
const sum = (n1, n2) => n1 + n2;

function printItems() {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item, i);
  }

  for (let item of arr) {
    console.log(item);
  }

  arr.forEach((item, index) => {
    console.log(item, index);
  });
}

function doubleItems() {
  // const doubles = [];
  // for (let item of arr) {
  //   doubles.push(double(item));
  // }

  const doubles = arr.map(double);
  console.log(doubles);
}

// doubleItems();

function hasEven(arr) {
  let hasEven = false;
  for (let item of arr) {
    if (isEven(item)) {
      hasEven = true;
    }
  }

  console.log(arr.some(isEven));
}

// hasEven([1, 2, 3, 4, 5]);
// hasEven([1, 3, 5, 7]);

function allEven(arr) {
  let allEven = true;
  for (let item of arr) {
    if (!isEven(item)) {
      allEven = false;
    }
  }

  console.log(arr.every(isEven));
}

// allEven([1, 2, 3, 4, 5]);
// allEven([2, 4, 8, 16]);

function getFirstEven(arr) {
  console.log(arr.find(isEven));
}

function getEvens(arr) {
  console.log(arr.filter(isEven));
}

function sumItems(arr) {
  // let sum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  // let sum = 0;
  // for (let item of arr) {
  //   sum += item;
  // }

  console.log(arr.reduce(sum));
}

// sumItems([1, 2, 3, 4, 5]);
// sumItems([2, 4, 8]);

function sumSquaresOfEvens(arr) {
  // let sum = 0;
  // for (let item of arr) {
  //   const squaredItem = square(item);
  //   if (isEven(squaredItem)) {
  //     sum += squaredItem;
  //   }

  //   if (isEven(item)) {
  //     sum += square(item);
  //   }
  // }

  // console.log(sum);

  console.log(
    arr.reduce((acc, item) => (isEven(item) ? sum(acc, square(item)) : acc), 0)
  );

  // 1 -> 1
  // 2 -> 1 + 4 -> 5

  console.log(
    arr // [1, 2, 3, 4]
      .filter(isEven) // [2, 4]
      .map(square) // [4, 16]
      .reduce(sum) // 20
  );
}

sumSquaresOfEvens([1, 2, 3, 4]);
