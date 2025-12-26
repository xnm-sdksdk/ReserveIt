import jwt from "jsonwebtoken";
import User from "../entity/user.entity.js";
import UserService from "../service/user.service.js";

export default class UserController {
    constructor(userService) {
        this.userService = userService;
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async registerUser(req, res) {
        try {
            const data = req.body
            const user = await this.userService.registerUser(data);
            res.status(201).json(user);
            console.log("User registered:", user);
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    }
}
