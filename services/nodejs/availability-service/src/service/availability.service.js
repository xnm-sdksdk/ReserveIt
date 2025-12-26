

export default class AvailabilityService {
    constructor(availabilityRepository) {
        this.availabilityRepository = availabilityRepository;
    }

    async getAllAvailabilities() {
        return this.availabilityRepository.findAll();
    }
}