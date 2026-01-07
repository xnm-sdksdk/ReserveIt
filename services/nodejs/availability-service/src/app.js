import express from "express";
import mongoose from "mongoose";
import availabilityRoutes from "./routes/availability.routes.js";
import { getDBConnection } from "./data-access/ConnectionFactory.js";
import logger from "pino";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(express.json());
app.use(limiter);

getDBConnection().catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
});

app.get("/health", (req, res) => {
    if (mongoose.connection.readyState === 1) {
        logger.info("Mongoose Availability Connection ok.");
        res.status(200).send("OK");
    } else {
        logger.error("Mongoose Availability Connection failed.");
        res.status(500).send("MongoDB Availability not connected");
    }
});

app.use("/api", limiter, availabilityRoutes);

app.listen(PORT, () =>
    console.log(`Availability Service running on port ${PORT}`)
);
