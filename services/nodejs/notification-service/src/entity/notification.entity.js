import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["info", "warning", "error", "system"],
            default: "info",
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        },
        read: {
            type: Boolean,
            default: false,
            index: true,
        },
        metadata: {
            type: mongoose.Schema.Types.Mixed,
        },
        sentAt: {
            type: Date,
            default: Date.now,
            index: true,
        },
    },
    { timestamps: true }
);

notificationSchema.index({ userId: 1, read: 1, sentAt: -1 });

export default mongoose.model("Notification", notificationSchema);
