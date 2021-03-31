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

console.log(printList(list));

/**
 * Iterative
 */
// function printList(list) {
//   let node = list;
//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
// }

/**
 * Recursive
 */
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
