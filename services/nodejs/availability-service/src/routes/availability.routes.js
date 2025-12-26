import express from "express";
import AvailabilityRepository from "../repository/availability.repository.js";
import AvailabilityService from "../service/availability.service.js";
import AvailabilityController from "../controller/availability.controller.js";


const router = express.Router();

const availabilityRepo = new AvailabilityRepository();
const availabilityService = new AvailabilityService(availabilityRepo);
const availabilityController = new AvailabilityController(availabilityService);

router.post("/check", availabilityController.getAllAvailabilities)
router.post("/block")
router.get("/resource/:id")

export default router;