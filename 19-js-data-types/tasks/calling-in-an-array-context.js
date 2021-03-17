let arr = ['a', 'b'];

arr.push(function () {
  console.log(this);
});

arr[2]();

let obj = {
  speak() {
    console.log(this);
  },
};

obj.speak();
