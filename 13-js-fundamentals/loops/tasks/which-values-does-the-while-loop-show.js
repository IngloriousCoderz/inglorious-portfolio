let i = 0;
while (++i < 5) alert(i);

// i == 0 -> i = 1 < 5 -> alert(1)
// i == 1 -> i = 2 < 5 -> alert(2)
// i == 2 -> i = 3 < 5 -> alert(3)
// i == 3 -> i = 4 < 5 -> alert(4)
// i == 4 -> i = !(5 < 5) -> end loop

let i = 0;
while (i++ < 5) alert(i);

// i == 0 -> 0 < 5 -> i = 1 -> alert(1)
// i == 1 -> 1 < 5 -> i = 2 -> alert(2)
// i == 2 -> 2 < 5 -> i = 3 -> alert(3)
// i == 3 -> 3 < 5 -> i = 4 -> alert(4)
// i == 4 -> 4 < 5 -> i = 5 -> alert(5)
// i == 5 -> !(5 < 5) -> end loop

let i = 0;
while (i < 5) {
    alert(i);
    i++;
}