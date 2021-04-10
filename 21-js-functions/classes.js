let user = { name: 'Antony', age: 38 };
let anotherUser = { name: 'Angelo', age: 28 };

// factory function
function createUser(name, age) {
  const user = {};
  user.name = name;
  user.age = age;
  return user;
}

// constructor function
function User(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

let yetAnotherUser = new User('Bobby', 30);

class Person {
  constructor(name, age) {
    const shoutedName = name.toUpperCase();
    // const person = {}
    // person.name = name;
    // person.age = age;
    // return person;
    this.name = shoutedName;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  // instance method
  speak() {
    console.log('Hi, my name is', this.name);
  }
}

// Person.speak()
const person = new Person('DrazeLakeR', 24);
person.speak();

class Woman extends Person {
  getAge() {
    // NOT REALLY
    return this.age > 25 ? 25 : super.getAge();
  }
}

const sao = new Woman('Sao', 32);

class Mario {
  #health = 1;
  #height = 1;

  jump() {
    console.log('jumping');
  }

  run() {
    console.log('running');
  }
}

class SuperMario extends Mario {
  health = 2;
  height = 2;
}

class FireballMario extends SuperMario {
  run() {
    console.log('shooting and running');
  }
}

class CapeMario extends SuperMario {
  jump() {
    console.log('gliding');
  }
}

class UltraMario extends FireballMario {}
