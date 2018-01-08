function findFirst(a, predicate) {
    return a.filter(predicate)[0];
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class UserCollection {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        return findFirst(this.users, u => u.id === id);
    }

    addUser(user) {
        if (!user.id)
            throw new Error('User must have an id');    
        if (this.getUserById(user.id))
            throw new Error(`User with id "${user.id}" already exists`);
        this.users.push(user);
    }
}

let users = new UserCollection();
users.addUser(new User('1', 'Petter'));
users.addUser(new User('2', 'Bjørn'));
console.log(users.getUserById('1'));
let allUsers = users.getUsers();
console.log(allUsers);
console.log(findFirst(allUsers, u => /pet/i.test(u.name)));