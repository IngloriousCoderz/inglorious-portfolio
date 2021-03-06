let user = {
  name: 'Antony',
  age: 38,
};

// factory function

function createUser(name, age) {
  let user = {
    name,
    age,
  };

  return user;
}

const admin = createUser('Antony', 38);

// constructor function

function User(name, age) {
  this.name = name;
  this.age = age;
  this.speak = () => console.log('Hi, my name is', this.name, '!');
}

const admin = new User('😍', 38);

console.log(new User('kyza219', 28));
console.log(User('sao', 27));
console.log(User('tiago', 27));
