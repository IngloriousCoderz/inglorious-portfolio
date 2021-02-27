let x = 2;
let y = 3;

console.log(x, y); // 2, 3
console.log(incrementAndSum(x, y)); // 7
console.log(x, y); // 2, 3
console.log(a, b); // ERROR

function incrementAndSum(a, b) {
  a++;
  b++;
  return a + b;
}

const person = { age: 38 };
const firstName = 'Matteo Antony';

console.log(person); // '[object Object]'
console.log(person); // '{ "age": 38 }'

const newPerson = setName(person, firstName);

console.log(newPerson); // '{ "age": 38, name: "Matteo Antony" }'
console.log(person); // '{ "age": 38, name: "Matteo Antony" }'

function setName(obj, name) {
  obj.name = name;
  return obj;
}

/* primitive values */
let a = 1;
let b = a;
// the two values are equal
console.log(a === b);

/* objects */
const obj = {};
const newObj = obj;
// the two references point to the same object
obj === newObj;

const obj1 = {};
const obj2 = {};
// the two references point to two different objects
obj1 !== obj2;

/* constants */
const number = 1;
number = 'string';

const constObj = {};
constObj = 'string';
constObj.name = 'Antony';
