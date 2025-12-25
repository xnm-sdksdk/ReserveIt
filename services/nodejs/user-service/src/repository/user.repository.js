const { default: User } = require("../entity/user.entity");

class UserRepository {
    constructor(User) {
        this.User = User;
    }

    getAllUsers() {
        return this.User.find();
    }

    createUser() {
        return this.User.create();
    }
}

module.exports = UserRepository;