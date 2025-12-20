const jwt = require('jsonwebtoken');
const { default: User } = require('../entity/user.entity');
const UserService = require('../service/user.service');


class UserController {
    constructor(userService) {
        this.userService = userService;
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
    }

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async registerUser(name, email, password) {
        try {
            const user = new User({ name, email, password });
            await user.save();
            console.log('User registered:', user);
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    }

}

module.exports = UserController;