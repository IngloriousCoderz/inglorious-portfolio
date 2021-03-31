let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(printListInReverseOrder(list));

/**
 * Iterative
 */
// function printListInReverseOrder(list) {
//   const arr = [];
//   let node = list;
//   while (node) {
//     arr.push(node.value);
//     node = node.next;
//   }
//   arr.reverse();
//   arr.forEach((item) => console.log(item));
// }

/**
 * Recursive
 */
function printListInReverseOrder(list) {
  if (list.next) {
    printListInReverseOrder(list.next);
  }
  console.log(list.value);
}
