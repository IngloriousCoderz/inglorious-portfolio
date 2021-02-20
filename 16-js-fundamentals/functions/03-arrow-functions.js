/* Function declaration */

function sum(a, b) {
  return a + b;
}

/* Function expression */

const sum = function (a, b) {
  return a + b;
};

/* Arrow function */

const sum = (a, b) => {
  const result = a + b;
  return result;
};

/* sum: (a, b) -> a + b */

const sum = (a, b) => a + b;

const shout = (str) => str.toUpperCase();
const yell = (str, excl = '!!!') => str + excl;
const html = (str, tag = 'h1') => `<${tag}>${str}</${tag}>`;

let result = 'hello';
result = shout(result);
result = yell(result);
result = html(result);
console.log(result);

function sum(a, b) {
  return a + b;
}
const sum = function (a, b) {
  return a + b;
};
const sum = (a, b) => {
  return a + b;
};

// arrow functions will be useful when dealing with `this`

const ask = (question, handleYes, handleNo) => {
  let answer = confirm(question);
  if (answer) {
    handleYes();
  } else {
    handleNo();
  }
};

ask(
  'Did you understand?',
  () => alert('Awesome!'),
  () => alert('I will repeat it once more.')
);

const onHungry = () => console.log('Then eat!');
const onNotHungry = () => console.log('Then drink!');

ask('Are you hungry?', onHungry, onNotHungry);
