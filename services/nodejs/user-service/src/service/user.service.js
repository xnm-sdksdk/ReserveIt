

export default class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.findAll();
    }

    async registerUser(userData) {
        return this.userRepository.createUser(userData);
    }
}
