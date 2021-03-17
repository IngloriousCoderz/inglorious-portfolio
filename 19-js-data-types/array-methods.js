let arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item, i);
}

let i = 0;
for (let item of arr) {
  console.log(item, i);
  i++;
}

arr.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

const arr = [1, 2, 3, 4, 5];

let squares = [];
arr.forEach(function (item) {
  squares.push(item * item);
});

console.log(squares);

const square = (num) => num * num;
const incrementByTwo = (num) => num + 2;
const isEven = (item) => item % 2 === 0;
const sum = (a, b) => a + b;

const squares = arr.map(square);
const incrementedNumbers = arr.map(incrementByTwo);
const evenNumber = arr.find(isEven);
const evenNumberIndex = arr.findIndex(isEven);
const evenNumbers = arr.filter(isEven);
arr.some(isEven);
arr.every(iEven);

let sum = 0;
for (let item of arr) {
  sum = sum + item;
}
console.log(sum);

let sum = arr.reduce(sum, 0);

let arr = [5, 2, 87, 4, 6, 3, 9];
arr.sort(); // [2, 3, 4, 5, 6, 87, 9]

arr.sort((a, b) => a - b);
// {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// });

let mappedArr = [];
for (let item of arr) {
  mappedArr.push(square(item));
}
console.log(mappedArr);

const mappedArr = arr.reduce((acc, item) => {
  acc.push(square(item));
  return acc;
}, []);
