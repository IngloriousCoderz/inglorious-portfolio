let emptyObj = {};

// JSON - JavaScript Object Notation

let propertyName = 'hasSunglasses';

let person = {
  name: 'Matteo Antony',
  nickname: 'IceOnFire',
  age: 38,
  'likes yogurt': true,
  body: {
    eyes: 2,
    nose: 1,
    mouth: 1,
    arms: 2,
    legs: 2,
  },
  speak() {
    console.log('Hello world!');
  },
  calculator: Math,
  // [propertyName]: true,
};

console.log(person.name);
console.log(person.body);
console.log(person.body.arms);
// console.log(person.likes yogurt);
console.log(person['likes yogurt']); // true
const key = 'nickname';
console.log(person[key]); // IceOnFire
console.log(person['key']); // undefined
console.log(person.key); // undefined

const Math = {
  PI: 22 / 7,
  pow: (a, b) => a ** b,
};

console.log(Math.PI);

const complexObject = new Object();

const value = 2;

const values = {
  property1: 3,
};

values.property1 = 5;
values.property2 = 7;

delete values.property1;

delete values.nonExistingProperty;

// CRUD operations
// Create
// Read/Retrieve
// Update
// Delete

const reservedKeywords = {
  if: 1,
  for: 2,
  else: 3,
  delete: 4,
  default: 5,
};

const database = {
  create: () => {},

  read: () => {},

  update: () => {},

  delete: () => {},
};

// factory function
function createPerson(name, age) {
  const shoutedName = name.toUpperCase();
  return {
    name: shoutedName,
    age,
  };
}

function createPerson(name, age) {
  return { name, age };
}

for (const key in person) {
  console.log(key, person[key]);
}

function getPropertiesOfType(type) {
  for (const key in person) {
    if (typeof person[key] === type) {
      console.log(key, person[key]);
    } else if (typeof person[key] === 'object') {
      for (const bodyKey in person[key]) {
        if (typeof person[key][bodyKey] === type) {
          console.log(bodyKey, person[key][bodyKey]);
        }
      }
    }
  }
}

function computeAge() {
  let currentYear = 2021;
  let yearOfBirth = 1982;
  let age = currentYear - yearOfBirth;
  return age;
}

const objectWithComputedValues = {
  age: (function () {
    let currentYear = 2021;
    let yearOfBirth = 1982;
    let age = currentYear - yearOfBirth;
    return age;
  })(),
};

console.log(currentYear);

objectWithComputedValues.age;
