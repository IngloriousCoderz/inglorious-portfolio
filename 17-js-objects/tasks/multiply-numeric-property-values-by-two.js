let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(multiplyNumeric(menu));

// console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    let value = obj[key];
    if (!isNaN(value)) {
      value *= 2;
      obj[key] = value;
    }
  }
  return obj;
}
