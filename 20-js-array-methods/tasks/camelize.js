console.log(
  camelize('background-color') === 'backgroundColor' &&
    camelize('list-style-image') === 'listStyleImage' &&
    camelize('-webkit-transition') === 'WebkitTransition'
);

function camelize(str) {
  return str.split('-').map(capitalizeIfNotFirst).join('');

  // const tokens = str.split('-');
  // const mappedTokens = tokens.map((token, index) =>
  //   index ? capitalize(token) : token
  // );
  // return mappedTokens.join('');
}

// console.log(capitalize('color'));

function capitalizeIfNotFirst(token, index) {
  return index ? capitalize(token) : token;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
  // const [first, ...rest] = str.split('');
  // return first.toUpperCase() + rest.join('');
}
