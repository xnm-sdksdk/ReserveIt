const { default: User } = require("../entity/user.entity");

class UserRepository {
    constructor(User) {
        this.User = User;
    }

    async getAllUsers() {
        return this.User.find();
    }
}

module.exports = UserRepository;