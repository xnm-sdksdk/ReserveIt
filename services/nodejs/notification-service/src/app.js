import express from "express";
import mongoose from "mongoose";
import notificationRoutes from './routes/notification.route.js'
import { getDBConnection } from "./data-access/ConnectionFactory.js";
const app = express();
const PORT = 3001;

app.use(express.json());

getDBConnection().catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
});

app.get("/health", (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.status(200).send("OK");
    } else {
        res.status(500).send("MongoDB Notification not connected");
    }
});


app.use("/api/notification", notificationRoutes);


app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));