import UserRepository from "../repository/user.repository.js";

const userRepository = new UserRepository();

export default class UserService {
    async getAllUsers() {
        return userRepository.findAll();
    }

    async registerUser(userData) {
        return userRepository.createUser(userData);
    }

    async getUserById(id) {
        return userRepository.findById(id);
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error("No ID provided");
        }
        return userRepository.delete(id);
    }
}
