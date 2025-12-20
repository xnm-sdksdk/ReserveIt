const express = require("express");
const { registerUser } = require("../controller/user.controller");
const router = express.Router();


// Base Routes
// get all users
router.get("/users")
// create new user 
router.post("/users", registerUser)
// get user by id
router.get("/users/:id")
// update user details
router.patch("/users/:id")
// delete user
router.delete("/users/:id")

// profile mgmt
// get user profile
router.get("/users/:id/profile")
// update profile
router.patch("/users/:id/profile")

// auth
//login
router.post("/auth/login")
// logout
router.post("/auth/logout")
// refresh token
router.post("/auth/refresh-token")
// change pwd
router.post("/auth/change-password")


// role mgmt
// assign role
router.post("/users/:id/roles")
// get roles
router.get("/users/:id/roles")
// remove role
router.delete("/users/:id/roles/:roleId")

// search and filter
// search users
router.get("/users/search")
// filter by status
router.get("/users?status")
// filter by role
router.get("/users?role")
// pagination
router.get("/users?page")


module.exports = router;