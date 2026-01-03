import express from "express";
import { getAllUsers, getUserById, registerUser, refreshToken, login, logout, deleteUser, validateToken } from "../controller/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

// Base routes
router.get("/users", authenticate, getAllUsers);
router.post("/users", registerUser);
router.get("/users/:id", authenticate, getUserById);
//router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", deleteUser);

// // Profile management
// router.get("/users/:id/profile", userController.getProfile);
// router.patch("/users/:id/profile", userController.updateProfile);

// // Authentication
router.post("/auth/login", login);
router.delete("/auth/logout", logout);
router.post("/auth/refresh-token", refreshToken);
// router.post(
//     "/auth/change-password",
//     authenticate,
//     changePassword
// );
router.post("/auth/validate", validateToken);

// // Role management
// router.post("/users/:id/roles", userController.assignRole);
// router.get("/users/:id/roles", userController.getRoles);
// router.delete("/users/:id/roles/:roleId", userController.removeRole);

// // Search, filter, pagination
// router.get("/users/search", userController.searchUsers);
// router.get("/users", userController.filterUsers);
// router.get("/users", userController.paginateUsers);

export default router;
