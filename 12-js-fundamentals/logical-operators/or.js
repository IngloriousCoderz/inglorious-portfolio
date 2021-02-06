let year = prompt("Guess the year");
year = Number(year);

let bornInTheFuture = year > 2021;
let tooOldToBeAlive = year < 1903;

if (bornInTheFuture || tooOldToBeAlive) {
    alert("Year is invalid");
} else {
    alert("That's a good year!");
}

let hour = 12;
let isWeekend = true;

if (isWeekend) {
    alert( 'The office is closed for the weekend.' ); // it is the weekend  
} else if (hour < 10 || hour > 18) {
    alert( 'The office is closed outside of office hours.' ); // it is the weekend
}