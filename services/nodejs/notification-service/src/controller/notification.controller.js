export default class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.getNotificationByUserId = this.getNotificationByUserId.bind(this);
    }

    async sendNotification(req, res) { }

    async initiateBatch(req, res) { }

    async getNotificationByUserId(req, res) { }
}
