import mongoose from "mongoose";

const availabilityEntity = new mongoose.Schema(
    {
        resourceId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true,
        },
        resourceType: {
            type: String,
            required: true,
            enum: ["computer", "room", "other"],
        },
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
        reason: {
            type: String,
            trim: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

availabilityEntity.index({ resourceId: 1, start: 1, end: 1 });

export default mongoose.model("Availability", availabilityEntity);
