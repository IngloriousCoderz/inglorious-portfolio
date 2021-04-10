class Animal {
  static PI = 3.14;

  static handleClick() {}

  _name = 'Roger';

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  run() {
    console.log(this._name, 'is running!');
  }

  speak() {
    console.log(this._name, 'is speaking!');
  }
}

Animal.PI = 3.14;
Animal.handleClick = () => {};

Math.PI;
Math.pow();

console.log();

JSON.stringify();

const now = new Date();
now.getFullYear();
Date.now();

const animal = new Animal('Roger');
animal._name;
animal.name;
animal.getName();
animal.setName('Miss Quackers');
animal.run();
animal.speak();
