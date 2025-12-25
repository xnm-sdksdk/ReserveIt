class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.findAll();
    }

    async registerUser() {
        return this.userRepository.createUser();
    }
}

module.exports = UserService;