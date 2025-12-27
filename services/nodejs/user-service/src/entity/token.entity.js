import mongoose from "mongoose";

const tokenEntity = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        tokenHash: {
            type: String,
            required: true,
            index: true,
        },
        expiresAt: {
            type: Date,
            required: true,
            index: true,
        },
        revokedAt: {
            type: Date,
        },
        device: {
            type: String,
        },
    },
    { timestamps: true }
);

tokenEntity.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("token", tokenEntity);
