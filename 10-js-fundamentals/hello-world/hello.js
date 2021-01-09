// /* magic numbers */
// alert(2 * 5 + 6);

// /* declare a variable */
// let bagOfApples;

// /* assign a value to the variable */
// bagOfApples = 5;

// /* declare and assign */
// let bagOfBananas = 6;

// alert(2 * bagOfApples + bagOfBananas);

/**
 * Naming conventions:
 * 
 * camelCase -> yes
 * PascalCase -> yes, sometimes
 * snake_case -> usually no
 * SNAKE_CASE -> yes, for constants
 * kebab-case -> absolutely not
 */

let bagsOfApples = 2;
let applesInABag = 4;
let bagsOfBananas = 3;
let bananasInABag = 6;

bagsOfApples = bagsOfBananas;

let totalFruit = bagsOfApples * applesInABag + bagsOfBananas * bananasInABag;

console.log('Total fruit: ' + totalFruit);

// let $ = 3;
// let default = 5;

const DEFAULT_COLOR = 'white'
const PI = 3.14
// PI = 1
console.log('PI: ' + PI)

let myVar = 5
myVar = 'generic value'


'2' + '2' = '22'
2 + 2 = 4
'2' + 2 =  '22'