const arr = ['a', 'b', 'c', 'd'];

const first = arr[0];
const second = arr[1];
const third = arr[2];

const [first, second, third] = arr;
const [first, second, ...rest] = arr;

const [first, ...rest, last] = arr;

const obj = { a: 1, b: 2, c: 3, d: 4 };

const firstProp = obj.a;
const secondProp = obj.b;
const thirdProp = obj.c;

const { a: firstProp, b: secondProp, c: thirdProp } = obj;

const a = obj.a;
const b = obj.b;
const c = obj.c;

const { a, b, c } = obj;
const { a, b, ...rest } = obj;

function sum(arr) {
  // const a = arr[0]
  // const b = arr[1]
  const [a, b] = arr;
}

function print(...messages) {
  messages.forEach((message) => {
    console.log(message);
  });
}

print('hello world!', 'how are you?');

const sum = (a, b) => a + b;
const sumMany = (...numbers) => numbers.reduce(sum, 0);

sumMany(1, 2, 3, 4, 5);

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

const { items } = options;
const [, sweet] = items;
console.log(sweet);
