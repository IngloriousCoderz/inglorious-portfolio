for (let i = 0; i < 5; i++) alert( i );

// i == 0 -> 0 < 5 -> alert(0) -> i = 1
// i == 1 -> 1 < 4 -> alert(1) -> i = 2
// ...

for (let i = 0; i < 5; ++i) alert( i );

// i == 0 -> 0 < 5 -> alert(0) -> i = 1