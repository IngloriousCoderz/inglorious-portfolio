/**
 * prompt for a login
 * if visitor is Admin then prompt for a password
 *    if password is empty line or "Esc" then show "Canceled"
 *    if password is "TheMaster" then show "Welcome!"
 *    else show "Wrong password" 
 * if input is empty line or "Esc" then show "Canceled"
 * else then show "I don't know you"
 */

let username = prompt("Who's there?");

if (username === 'Admin') {

    /* checking also for a password */
    let password = prompt("Password?");
    
    if (password === 'TheMaster') {
        alert("Welcome!");
    } else if (password == null || password === '') {
    // } else if (!password) {
        alert('Canceled');
    } else {
        alert("Wrong password");
    }

} else if (username == null || username === '') {
// } else if (!username) {
    alert('Canceled');
} else {
    alert("I don't know you");
}