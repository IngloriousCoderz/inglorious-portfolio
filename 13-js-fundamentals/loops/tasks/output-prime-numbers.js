// Sieve of Eratosthenes

let limit = 10;

for (let number = 2; number < limit; number++) {
    for (let previousNumber = 2; previousNumber < number; previousNumber++) {
        if (number % previousNumber === 0) {
            break;
        } else {
            console.log(number);
        }
    }
}

// 2 3 4 5 6 7 8 9
// 2 3 x 5 x 7 x x

// 4: is divisible by 2 ? no -> not prime
// 4: is divisible by 3 ? yes -> prime
