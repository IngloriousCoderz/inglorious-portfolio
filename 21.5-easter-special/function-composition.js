// hello world
// <h1>HELLO WORLD!</h1>

// hello world -> HELLO WORLD
const shout = (str) => str.toUpperCase();

// hello world -> hello world!
const addExclamation = (exclamation) => (str) => str + exclamation;

// hello world -> <h1>hello world</h1>
const toHtml = (tag) => (str) => `<${tag}>${str}</${tag}>`;

// console.log(
//   toHtml(
//     // addExclamation(
//       shout(
//         'hello world'
//       )
//     // )
//   )
// );

// let str = 'hello world';
// str = shout(str);
// str = addExclamation(str);
// str = toHtml(str);
// console.log(str);

/**
 * Function composition
 *
 * (f o g)(x) = f(g(x))
 *
 * compose(f, g)(x) = f(g(x))
 */

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const createShoutedTitle = compose(
  //
  toHtml('h1'),
  addExclamation('!!!'),
  shout
);
const createShoutedParagraph = compose(
  //
  toHtml('p'),
  addExclamation('!')
);

console.log(createShoutedTitle('hello world'));
console.log(createShoutedParagraph('happy Easter'));
