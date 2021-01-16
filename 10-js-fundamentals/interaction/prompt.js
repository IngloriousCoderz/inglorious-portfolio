// let apples = prompt('How many apples?', 0);
// let oranges = prompt('How many oranges?', 0);

// apples = parseInt(apples);
// oranges = parseInt(oranges);

// let sum = apples + oranges;

// alert(`User input: ${apples}, ${oranges}
// Fruits: ${apples}, ${oranges}
// Sum: ${sum}
// `);

// refactoring

const userApples = prompt("How many apples?", 0);
const userOranges = prompt("How many oranges?", 0);

const apples = parseInt(userApples);
const oranges = parseInt(userOranges);

const sum = apples + oranges;

alert(`User input: ${userApples}, ${userOranges}
Fruits: ${apples}, ${oranges}
Sum: ${sum}
`);
