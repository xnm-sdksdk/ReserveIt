import Availability from '../entity/availability.entity.js'


export default class AvailabilityRepository {
    constructor(AvailabilityModel = Availability) {
        this.Availability = AvailabilityModel;
    }

    async findAll() {
        return await this.Availability.find();
    }
} 