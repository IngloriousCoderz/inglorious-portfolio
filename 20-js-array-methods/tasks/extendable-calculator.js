const calc = {
  operators: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  },

  addOperator(name, func) {
    this.operators[name] = func;
  },

  calculate(expr) {
    let [left, operator, right] = expr.split(' ');
    left = +left;
    right = +right;

    const func = this.operators[operator];
    return func(left, right);

    // switch (operator) {
    //   case '+':
    //     return left + right; // overloaded

    //   case '-':
    //     return left - right;
    // }
  },
};

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 7'));

calc.addOperator('*', (a, b) => a * b);

console.log(calc.calculate('3 * 7'));

const obj = {
  prop: 'value',
};

console.log(obj.prop);
console.log(obj['prop']);

const properties = ['prop', 'whatevz'];

console.log(obj[properties[0]]);

obj['-myProp-'];
