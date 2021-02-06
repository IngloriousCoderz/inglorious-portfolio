let isEven = num % 2 === 0;

for (let number = 2; number <= 10; number++) {
    let isEven = number % 2 === 0;
    if (isEven) {
        console.log(number);
    }
}

for (let number = 2; number <= 10; number += 2) {
    console.log(number);
}

for (let number = 1; number <= 5; number++) {
    console.log(number * 2);
}