// function printNumbers(from, to) {
//   let num = from;

//   const intervalId = setInterval(() => {
//     if (num > to) {
//       clearInterval(intervalId);
//       return;
//     }

//     console.log(num);
//     num++;
//   }, 1000);
// }

function printNumbers(from, to) {
  let num = from;
  console.log(num);
  num++;

  waitAndPrint(num, to);
}

function waitAndPrint(num, max) {
  if (num > max) {
    return;
  }

  setTimeout(() => {
    console.log(num);
    num++;
    waitAndPrint(num, max);
  }, 1000);
}
