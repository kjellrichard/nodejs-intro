const User = require('./User');
const UserCollection = require('./UserCollection');
const { findFirst } = require('./operations');

let users = new UserCollection();
users.addUser(new User('1', 'Petter'));
users.addUser(new User('2', 'Bjørn'));
console.log(users.getUserById('1'));
let allUsers = users.getUsers();
console.log(allUsers);
console.log(findFirst(allUsers, u => /pet/i.test(u.name)));