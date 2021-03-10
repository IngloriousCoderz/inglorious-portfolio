// state - properties
// behaviour - methods

let calculator = {
  read() {
    this.num1 = +prompt('Value 1 please');
    this.num2 = +prompt('I can has value 2 plz?');
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
