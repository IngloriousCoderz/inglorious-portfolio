function sumInput() {
  const arr = [];

  let input = prompt('First number plz');
  while (input != null && input != '' && isFinite(input)) {
    arr.push(+input);
    input = prompt('Next number plz');
  }

  /* for loop with index */
  // let sum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  /* for..of loop */
  // const [first, ...rest] = arr;
  // let sum = first;
  // for (let item of rest) {
  //   sum += item;
  // }

  /* array method: reduce */
  // 1 + 2 + 3 + 4
  const sum = arr.reduce((acc, item) => acc + item);

  return sum;
}
