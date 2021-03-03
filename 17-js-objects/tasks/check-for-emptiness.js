let schedule = {};
console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'wake up';
console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function howManyProperties(obj) {
  let props = 0;
  for (let key in obj) {
    props++;
  }
  return props;
}
