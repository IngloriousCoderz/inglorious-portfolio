// Singleton

const { NUMERATOR, PI, sum } = require('./calculator');

const { format } = require('date-fns');

console.log(sum(PI, PI), NUMERATOR);
console.log(format(new Date(), 'dd/MM/yyyy'));
