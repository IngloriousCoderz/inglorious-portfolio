let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

users.sort(byField('name'));
users.sort(byField('age'));

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

// currying
sum(2, 3);
sum(2, 4);
sum(2, 7);

function sum(a, b) {
  return a + b;
}

sum(2)(3);
sum(2)(4);
sum(2)(7);

const sumTwo = sum(2);
sumTwo(3);
sumTwo(4);
sumTwo(7);

function sum(a) {
  return function (b) {
    return a + b;
  };
}
