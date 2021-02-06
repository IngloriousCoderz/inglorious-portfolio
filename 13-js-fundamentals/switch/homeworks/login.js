/* bobby1 */
let username = prompt("What is your username");
let password;

switch(username){

case '':
alert("Canceled");
break;

case null:
alert("Canceled");
break;

case "admin":
password = prompt("Password?")

switch(password){

case "TheMaster":
alert("Welcome")
break;

case '' || null:
alert("Canceled")
break;

default: alert("Wrong password")
}
default:
if (username !== 'admin'){
    alert("I don't know you")
}
}