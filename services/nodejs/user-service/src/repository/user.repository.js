import User from "../entity/user.entity.js";

export default class UserRepository {
    async findAll() {
        return User.find();
    }

    async createUser(userData) {
        return User.create(userData);
    }

    async findById(id) {
        return User.findById(id);
    }

    async updateUser(id, updateData) {
        return User.findByIdAndUpdate(id, updateData, { new: true });
    }

    async delete(id) {
        return User.findByIdAndDelete(id);
    }
}
