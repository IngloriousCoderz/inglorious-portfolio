console.log(sumTo(1)); // 1
console.log(sumTo(2)); // 3
console.log(sumTo(3)); // 6
console.log(sumTo(4)); // 10
console.log(sumTo(100)); // 5050

/**
 * Iterative solution
 */
// function sumTo(n) {
//   let sum = n;
//   for (let i = n - 1; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

/**
 * Recursive solution
 */
// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   }

//   return n + sumTo(n - 1);

//   // return n === 1 ? n : n + sumTo(n - 1)
// }

/**
 * Arithmetic progression
 *
 * 1 + 2 + 3 + ... + 98 + 99 + 100
 *
 * 1 +    2 +  3 + ... + 50 n = 100 / 2
 * 100 + 99 + 98 + ... + 51
 * ------------------------
 * 101 +101 +101 + ... +101 n = 100 + 1
 */
function sumTo(n) {
  return ((n + 1) * n) / 2;
}
