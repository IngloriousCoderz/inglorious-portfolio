// AMD - Asynchronous Module Definition - BROWSER - Old Style
define(['./script1.js', './script2.js'], function (module1, module2) {
  return { name: 'Antony', age: 38 };
});

// CommonJS - Node.js
const module1 = require('./script1');
const module2 = require('./script2');

// Webpack
// ES6 Modules - Static module loading

import module1 from './script1';
import module2 from './script2';

// UMD - Universal Module Definition
(function (module1, module2) {
  // ...
})();
