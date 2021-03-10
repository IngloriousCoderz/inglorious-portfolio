// factory function

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

console.log(this);
console.log(user.ref.name); // What's the result?
