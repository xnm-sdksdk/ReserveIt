import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import { getDBConnection } from "./data-access/ConnectionFactory.js";
import dotenv from "dotenv";
import logger from "pino"
import rateLimit from "express-rate-limit"

const app = express();
const PORT = 3002;

dotenv.config();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again after 15 minutes",
});


app.use(express.json());
app.use(limiter)

getDBConnection().catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
});

app.get("/health", (req, res) => {
    if (mongoose.connection.readyState === 1) {
        logger.info("Mongoose User Connection ok.")
        res.status(200).send("OK");
    } else {
        logger.error("Mongoose User Connection failed.")
        res.status(500).send("MongoDB User not connected");
    }
});


app.use("/api", limiter, userRoutes);

app.listen(PORT, () => logger.info(`User Service running on port ${PORT}`));
