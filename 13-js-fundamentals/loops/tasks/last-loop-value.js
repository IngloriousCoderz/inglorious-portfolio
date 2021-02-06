let i = 3;

while (i) {
  alert( i-- );
}

// i == 3 -> i is truthy -> alert(3) -> i = 2
// i == 2 -> i is truthy -> alert(2) -> i = 1
// i == 1 -> i is truthy -> alert(1) -> i = 0
// i == 0 -> i is falsy -> end loop