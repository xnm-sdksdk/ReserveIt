export default class AvailabilityController {
    constructor(availabilityService) {
        this.availabilityService = availabilityService;
        this.getAllAvailabilities = this.getAllAvailabilities.bind(this);
    }

    async getAllAvailabilities(req, res) {
        try {
            const availabilities =
                await this.availabilityService.getAllAvailabilities();
            res.json(availabilities);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
