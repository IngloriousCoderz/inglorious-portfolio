console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('€420'));
console.log(extractCurrencyValue('¥69'));
console.log(extractCurrencyValue('₤1936.27'));

function extractCurrencyValue(str) {
  return +str.slice(1);

  // return parseFloat(
  //   ('' + parseFloat(str.split('').reverse().join('')))
  //     .split('')
  //     .reverse()
  //     .join('')
  // );
}
