const user = {
  name: 'Antony',
  age: 38,
  walk() {
    console.log('Left foot, right foot');
  },
};

user.speak = speak;

// user.speak();

const dog = {
  name: 'Arya',
  age: 6,
  speak,
};

// dog.speak();

console.log(this);

const speak = () => {
  // ... blah blah blah
  console.log(this);
};

const speakAsDog = speak.bind(dog);

speakAsDog();

const that = this;
console.log(that);

function speak() {
  console.log(that);
  console.log(`Hi, my name is ${this.name}!`);
}

// const database = {
//   create(data) {
//     // ...
//   },

//   update(data) {
//     // ...
//   },
// };

// // upsert

// const operation = data.isNew ? 'create' : 'update';
// database[operation](data);
