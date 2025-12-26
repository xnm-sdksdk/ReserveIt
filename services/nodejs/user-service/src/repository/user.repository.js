import User from "../entity/user.entity.js";

export default class UserRepository {
    constructor(UserModel = User) {
        this.User = UserModel;
    }

    async findAll() {
        return await this.User.find();
    }

    async createUser(userData) {
        return await this.User.create(userData);
    }

    async findById(id) {
        return await this.User.findById(id);
    }

    async updateUser(id, updateData) {
        return await this.User.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteUser(id) {
        return await this.User.findByIdAndDelete(id);
    }
}