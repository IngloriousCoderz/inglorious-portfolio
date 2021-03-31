/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

function inArray(arr) {
  return (item) => arr.includes(item);
}

function inBetween(min, max) {
  return (item) => item >= min && item <= max;
}
