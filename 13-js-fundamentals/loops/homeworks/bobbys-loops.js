// 1
for (i= 0; i < 10; i++){
    console.log(i)
}

//2
for (i = 10; i > 0; i--){
    console.log(i)
}

//3.0

for (i = 1; i <= 9; i++){
  if (i % 2 === 0){
    console.log(i)
  }
}

//3.1
for (i = 1; i <= 4; i++){

  console.log(i*2)

}
//3.2
for (i=2; i<=9; i+=2){

  console.log(i)

}

//4

let secretNumber = 5;
let userInput;
while (true) {
  userInput = +prompt("Guess a number (1-10)");
  if (userInput == secretNumber) {
    alert("Success!")
    break;
  } else if (!userInput) {
    alert('Booh');
    break;
  }
}

//5
let partialResult = 0;
for(i = 0; i <= 5 ; i++){
partialResult += i;
}
alert(partialResult)

//6

let Na = "";
let Batman = "Batman!";
for (i = 1; i <= 16 ; i++){
Na += "Na "
}
console.log(Na + Batman)

//7 rectangular something something triangle

rows = prompt("How many rows?")
for (i = 0; i < rows; i++){
for (j = 0; j <= i; j++){
console.log("*")
}
console.log("<br>")
}

// Icicle triangle or something 
let rows = prompt ("Rows");
for (i = 0; i < rows; i++){
document.write("<br>");
for (j = 0; j <= rows-i; j++)
{
document.write("\u2000");    
}
for (k = 1; k <= (2 * i + 1); k++){
document.write("*");
}
}

//icicle something 2 

let rows = prompt("How many rows?");
for (i = rows; i >= 1; i--) {
for(j = rows; j > i ; j--){
document.write("\u2000");
}
for (k = 1; k < i * 2; k++) {
document.write('*');
}
document.write('<br>');
}


  // icicle masterrace 
let rows = prompt("How many rows?");
for (i = 0; i < rows - 1; i++){
for (j = 0; j < i; j++){
document.write("&nbsp");
}
for (k = rows - i; k > 0; k--){
document.write("*");
}
document.write("<br>");
}
for (i = 0; i < rows; i++){
for (j = rows - i; j > 1; j--){
document.write("&nbsp");
}
for (k = 0; k < i + 1; k++){
document.write("*");
}
document.write("<br>");
}
    
//rectangle
let rows = prompt("How many rows?");
let columns = rows * 2;
for (i = 1; i <= rows; i++){
for (j = 1; j <= columns; j++){
document.write("*");
}
document.write("<br>");
}    

// empty rectangle
let rows = prompt("How many rows?");
let columns = rows * 2;
for (i = 1; i <= rows; i++){
for (j = 1; j <= columns; j++){ 
if(i == 1|| i == rows || j == 1 || j == columns){
document.write("*"); 
}
else{
document.write(" &nbsp"); 
} 
} document.write("<br>");
}
 
// bonus 

let rows = prompt("How many rows?");
rows = rows / 2;
for (i = 0; i < rows; i++) 
{ 
for (j = 0; j < i + 1; j++) 
document.write("*"); 

document.write("<br>"); 
} 

for (i = 1; i < rows; i++)  
{ 
for (j = i; j < rows; j++) 
document.write("*"); 
document.write("<br>"); 
} 

// sieve of something
let input = +prompt("Number?");
let selectedInput = input;
let temporary = 0;
for (input = 1; input <= selectedInput; input++){
for (i = 2; i <= input - 1; i++){
if(input % i == 0){
temporary = temporary + 1;
}
}
if(temporary == 0){
document.write(input)
document.write("<br>")
}
else{
temporary = 0;
}
}
