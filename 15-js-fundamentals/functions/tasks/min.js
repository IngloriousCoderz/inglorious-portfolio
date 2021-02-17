function minIfElse(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// let outcome = minIfElse(2, 5);
// console.log(outcome);

console.log(minIfElse(2, 5)); // 2
console.log(minIfElse(3, -1)); // -1
console.log(minIfElse(1, 1)); // 1

function minIf(a, b) {
    if (a < b) {
        return a;
    }
    
    return b;
}

console.log(minIf(2, 5)); // 2
console.log(minIf(3, -1)); // -1
console.log(minIf(1, 1)); // 1

function minTernary(a, b) {
    return a < b ? a : b;
}

console.log(minTernary(2, 5)); // 2
console.log(minTernary(3, -1)); // -1
console.log(minTernary(1, 1)); // 1
