import fs from "fs";

if (!process.env.JWT_PRIVATE_KEY) {
    throw new Error("JWT_PRIVATE_KEY not set");
}

export const PRIVATE_KEY = fs.readFileSync("/jwt_private.pem", "utf8");
export const PUBLIC_KEY = fs.readFileSync("/jwt_public.pem", "utf8");

export const JWT_OPTIONS = {
    algorithm: "RS256",
    issuer: process.env.JWT_ISSUER || "user-service"
};
