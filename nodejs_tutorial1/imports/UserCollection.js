const operations = require('./operations');
class UserCollection {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        return operations.findFirst(this.users, u => u.id === id);
    }

    addUser(user) {
        if (!user.id)
            throw new Error('User must have an id');
        if (this.getUserById(user.id))
            throw new Error(`User with id "${user.id}" already exists`);
        this.users.push(user);
    }
}

module.exports = UserCollection;