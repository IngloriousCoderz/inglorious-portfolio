/**
 * GenZ is an application that asks the user for their year
 * of birth, then outputs true if the user is a GenZ and false if
 * the user is not a GenZ.
 * 
 * A GenZ is anybody born after the year 2000.
 */

 // ask the user for their year of birth
 // genz born after 2000
 // output true/false, depending on genz or not

let yearOfBirth = prompt("What is your year of birth?");
yearOfBirth = Number(yearOfBirth);
let isGenZ = yearOfBirth > 2000;
alert(`User is a GenZ: ${isGenZ}`);


















/* bobby1 */
let x = prompt("Please input your year of birth:", 0);
x = parseInt(x);
if (x <= 2000) alert("Sorry, you are not GenZ");
if (x > 2000) alert("Congratulations, you are GenZ!");























/* bobby2 */
var year = prompt("Are you gen Z? Please add your year of birth:", 0);
year = parseInt(year);
var notAGenZ = year <= 2000;
var aGenZ = year > 2000;
var isTheUserReallyAGenZ = year = aGenZ === true;
var isTheUserNotANonGenZ = year = notAGenZ === false;
alert(aGenZ);



















/* bobby3 */
var year = prompt("Are you gen Z? Please add year of birth:", 0)
year = parseInt(year);
var isGenZ = year > 2000 === true;
alert(isGenZ);






















/* bobby4 */
var yearOfBirth = prompt("Are you gen Z? Please add year of birth:", 0);
yearOfBirth = parseInt(yearOfBirth);
var genZYes = yearOfBirth>2000===true;
alert(genZYes)























/* bobby5 */
var genZ = prompt("Are you gen Z? Please add year of birth:", 0);
genZ = parseInt(genZ);
var genZYes = genZ > 2000 === true;
alert(genZYes);

alert(prompt("Year") > 2000)

// simple != complex
// easy != difficult

























/* bobby6 */
var genZ=prompt("Are you genZ? Please enter your year of birth:", 0);
alert(genZ > 2000 === true);




























/* ice1 */
let isGenZ = genZ > 2000;
let statement = isGenZ === true;
let isStatementTrue = statement === true;
let isStatementReallyTrue = isStatementTrue === true;

























/* bobby7 */
var genZ = prompt("Are you genZ? Please input your year of birth:");
var genZYes = (genZ > 2000);
alert(genZYes);
