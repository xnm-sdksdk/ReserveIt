import jwt from "jsonwebtoken";
import User from "../entity/user.entity.js";
import bcrypt from "bcrypt";
import RefreshToken from "../entity/token.entity.js";
import { JWT_OPTIONS, PRIVATE_KEY } from "../config/jwt.js";
import { randomBytes, createHash } from "crypto";
import UserService from "../service/user.service.js";

const userService = new UserService();

export async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getUserById(req, res) {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function registerUser(req, res) {
    try {
        const data = req.body;
        const user = await userService.registerUser(data);
        res.status(201).json(user);
        console.log("User registered:", user);
    } catch (error) {
        console.error("Registration failed:", error.message);
    }
}

// auth controllers
export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        await RefreshToken.deleteMany({ userId: user._id });

        const accessToken = jwt.sign(
            {
                sub: user._id.toString(),
                email: user.email,
                groups: ["USER"],
            },
            PRIVATE_KEY,
            {
                ...JWT_OPTIONS,
                expiresIn: "15m",
            }
        );

        const refreshToken = randomBytes(64).toString("hex");

        await RefreshToken.create({
            userId: user._id,
            tokenHash: createHash("sha256").update(refreshToken).digest("hex"),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return res.status(200).json({
            accessToken,
            refreshToken,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export async function logout(req, res) {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.sendStatus(204);
        }

        const tokenHash = crypto
            .createHash("sha256")
            .update(refreshToken)
            .digest("hex");

        await RefreshToken.deleteOne({ tokenHash });

        return res.status(200).json({ message: "Logged out" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export async function refreshToken(req, res) { }

export async function changePassword(req, res) { }

export async function validateToken(req, res) {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.sendStatus(401);
    }

    const token = auth.split(" ")[1];
    try {
        const payload = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"],
            issuer: "user-service",
        });
        res.setHeader("X-User-Id", payload.sub);
        res.setHeader("X-User-Roles", payload.roles?.join(","));
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(req, res) {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        return res.status(204).json({ message: "User deleted successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
    }
}
