const obj = {
  key2: 'value2',
  key1: 'value1',
}; // object literal
// const obj = new Object(); // constructor

const arrObj = {
  0: 'value1',
  1: 'value2',
  3: 42,
};

const arr = ['value1', 'value2', 42]; // array literal
// const arr = new Array(); // constructor

arr[0]; // 'value1'
arr[1]; // 'value2'
arr[2]; // 42

const user = {
  name: 'Antony',
  age: 38,
  body: [
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    'nose',
    'brain',
    'torso',
  ],
};

user.limbs[1] = 'right ear';
