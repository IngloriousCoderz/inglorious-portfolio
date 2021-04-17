import sayGoodbye, { PI, sum, NUMERATOR } from './module';

console.log(sum(PI, PI));
console.log(NUMERATOR);
sayGoodbye();

const shouldLoad = prompt('Should I load the next module?');
if (shouldLoad) {
  import('./dynamic-module').then(({ user, default: sayHello }) => {
    console.log(user);
    sayHello();
  });
}
