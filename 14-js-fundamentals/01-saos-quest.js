/**
 * Sao's quest is about asking the user for the number of values to sum
 * and then sum them all and provide the result as output.
 * 
 * Example: the user inputs "3", then the app asks 3 times for a number.
 * 
 * Question: Can I use a "while" loop to say: while the number of inputs is
 * not equal to numValues, ask for numbers?
 */

// 1. get numValues from user
// 2. get values from user until we reach numValues
//                         while we haven't reached numValues

const numValues = +prompt('How many values do you want me to add together?');

let numbersLeft = numValues;
let sum = 0;

while (numbersLeft) {
    const number = +prompt('Next number please...');
    sum += number;
    numbersLeft--;
}

alert(`The sum of ${numValues} numbers is ${sum}. Enjoy!`);

// sao1

let numOfSubjects = prompt("Insert number of subjects");
numOfSubjects = Number(numOfSubjects);
let totalSumofGrades = 0

for (let count = 0; count < numOfSubjects; count++) {
    let grades = prompt("Insert a grade or say stop to see the result");
    grades = Number(grades); 
    totalSumofGrades += grades;
}

let average = totalSumofGrades / numOfSubjects;
alert(average);

// sao2

alert("Let's calculate your average grade!");
let NumOfSubjects = prompt("How many subjects you have?");
NumOfSubjects = Number(NumOfSubjects);
let counterSubjects = 0;
let totalSumOfGrades = 0;
let grade;

while (counterSubjects < NumOfSubjects) { 
    grade = prompt ("Insert a grade");
    grade = Number(grade);
    const isValidGrade = grade >= 0 && grade <= 20;
    if (isValidGrade) {
        counterSubjects++;
        totalSumOfGrades += grade;
    } else {
        alert("Please insert a valid grade between 0 and 20");
    }
}

let average = totalSumOfGrades / NumOfSubjects;
alert(average.toFixed(2));