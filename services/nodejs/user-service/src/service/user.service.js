class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.findAll();
    }
}

module.exports = UserService;