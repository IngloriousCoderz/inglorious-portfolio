const milk = { color: 'white', quantity: 1 };

shallowClone(milk);

const user = {
  name: 'Antony',
  age: 38,
  body: {
    heads: 1,
    torsos: 1,
    limbs: 4,
  },
};

const clone = deepClone(user);

clone.age = 18;
clone.body.heads = 2;

console.log(JSON.stringify(clone));
console.log(JSON.stringify(user));

// const clone = {};
// clone.name = user.name;
// clone.age = user.age;
// clone.body = user.body;

function deepClone(obj) {
  const clone = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

function shallowClone(obj) {
  const clone = {};
  for (let key in obj) {
    clone[key] = obj[key];
  }

  // const clone = Object.assign({}, obj);

  console.log('Not references to same object:', clone !== obj);
  // console.log(clone.color === obj.color);
  // console.log(clone.quantity === obj.quantity);

  for (let key in clone) {
    console.log(`Equal value for ${key}:`, clone[key] === obj[key]);
  }

  console.log(
    'Equal string representation:',
    JSON.stringify(clone) === JSON.stringify(obj)
  );

  return clone;
}
