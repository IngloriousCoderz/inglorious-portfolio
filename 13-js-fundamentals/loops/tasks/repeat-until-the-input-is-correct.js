let number = prompt('Give me a number greater than 100');

while (true) {
    if (number > 100 || number == null || number === '') {
        break;
    }

    number = prompt('Nope, you must provide a number greater than 100');
}

// repeat the loop until a condition is true === repeat the loop while the same condition is false

while (number <= 100 && num) {
    number = prompt('Nope, you must provide a number greater than 100');
}
