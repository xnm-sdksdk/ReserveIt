export default class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    async getNotificationByUserId() {
        return this.notificationRepository.findById();
    }
}