/**
 * Grades is an application that asks the user for grades until the user cancels, and then
 * calculates the average of all grades.
 * 
 * The average is calculated like this:
 * 
 * avg = (grade1 + grade2 + grade3 + ...) / #grades
 */

let counter = 0;
let gradeString = prompt('Enter your grade', '');
let sumOfGrades = 0;

while (gradeString != null && gradeString !== '' && gradeString >= 0) {
    let grade = Number(gradeString);
    sumOfGrades += grade;
    counter++;
    gradeString = prompt('Enter your grade', '');
}

let avrGrade = sumOfGrades/counter;
alert('Your average grade is: ' + avrGrade.toFixed(2));































/* angelo1 */
let counter = 0;
let grade = +prompt('Enter your grade', '');
let sumOfGrades = 0;

while (grade > 0 && grade < 7) {
    // if (grade) {
    sumOfGrades += grade;
    counter++;
    // }
    grade = +prompt('Enter your grade', '');
}

let avrGrade = sumOfGrades/counter
alert('Your average grade is: ' + avrGrade.toFixed(2));










































/* angelo2 */
let grade2;
let counter2 = 0;
let sumOfGrades2 = 0;

do {
    grade2 = +prompt('Enter the grade');
    sumOfGrades2 += grade2;
    counter2++;

} while (grade2 > 0 && grade2 < 7);

let avrGrade2 = sumOfGrades2/(counter2 - 1);
alert('The average grade has been calculated successfully. Your average grade is: ' + avrGrade2.toFixed(2));










































/* angelo3 */
let counter3 = 0;
let sumOfGrades3 = 0;

for (let grade3 = +prompt('Enter the grade again please'); grade3 > 0 && grade3 < 7; counter3++) {
    sumOfGrades3 += grade3;
    grade3 = +prompt('Enter the grade again');
}

let avrGrade3 = sumOfGrades3/counter3;
alert('The average was calculated and is: ' + avrGrade3.toFixed(1));











































/* bobby1 */

// get grades from the user until the grade is falsy
// get grades from the user while the grade is truthy

let sum = 0;
for (let grades=0; ; grades++) {
    let grade = +prompt("Please add grade " + (grades + 1));
    sum += grade;
    if (!grade) {
        alert(sum / grades);
        break;
    }
}

let sum = 0;
let grades = 0;
let grade = +prompt("Please add grade " + (grades + 1))
for (; grade; grades++) {
    sum += grade;
    grade = +prompt("Please add grade " + (grades + 1));
}
alert(sum / grades);





































/* bobby2 */
let sumOfGrades = 0;
let gameOver = false;
for(let i = 0; !gameOver; i++){
    let grades = +prompt("Grade " + (i+1));
    sumOfGrades += grades;
    if (!grades) {
        gameOver = true;
    }
}

let endResult = sumOfGrades / i;
alert(endResult);







































/* bobby3 */
let sumOfGrades = 0;
let gradesNo = 0;
let grade = +prompt("Grade " + (gradesNo+1));

for(; grade; gradesNo++) {
    sumOfGrades += grade;
    grade = +prompt("Grade " + (gradesNo+1));
}

let endResult = sumOfGrades / gradesNo;
alert(endResult);









































/* bobby4 */
let sumOfGrades = 0;
let grades;
for(let i = 0; grades != '' ; i++) {
    grades = +prompt("Grade " + (i + 1));
    sumOfGrades += grades;
}
alert(sumOfGrades / (i - 1));