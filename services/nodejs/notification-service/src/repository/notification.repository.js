import Notification from "../entity/notification.entity.js";

export default class NotificationRepository {
    constructor(NotificationModel = Notification) {
        this.Notification = NotificationModel;
    }

    async findAll() {
        return await this.Notification.find();
    }
}
