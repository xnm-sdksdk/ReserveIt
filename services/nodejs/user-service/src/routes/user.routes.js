import express from "express";
import UserRepository from "../repository/user.repository.js";
import UserService from "../service/user.service.js";
import UserController from "../controller/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

// Base routes
router.get("/users", authenticate, userController.getAllUsers);
router.post("/users", userController.registerUser);
router.get("/users/:id", authenticate, userController.getUserById);
// router.patch("/users/:id", userController.updateUser);
// router.delete("/users/:id", userController.deleteUser);

// // Profile management
// router.get("/users/:id/profile", userController.getProfile);
// router.patch("/users/:id/profile", userController.updateProfile);

// // Authentication
router.post("/auth/login", userController.login);
router.delete("/auth/logout", userController.logout);
router.post("/auth/refresh-token", userController.refreshToken);
router.post("/auth/change-password", authenticate, userController.changePassword);
router.post("/auth/validate", userController.validateToken);

// // Role management
// router.post("/users/:id/roles", userController.assignRole);
// router.get("/users/:id/roles", userController.getRoles);
// router.delete("/users/:id/roles/:roleId", userController.removeRole);

// // Search, filter, pagination
// router.get("/users/search", userController.searchUsers);
// router.get("/users", userController.filterUsers);
// router.get("/users", userController.paginateUsers);

export default router;
