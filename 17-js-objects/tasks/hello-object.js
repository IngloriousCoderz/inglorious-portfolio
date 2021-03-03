let user = {};
user.name = 'John'; // Create
user['surname'] = 'Smith';
user.name = 'Pete'; // Update
delete user.name; // Delete

console.log(user.name); // Read
